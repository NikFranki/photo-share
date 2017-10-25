import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        tabs: ['one', 'two', 'three'], // 默认tab数目
    }

    handleClick = (i) => {
        if (this.props.onHandleClick) {
            this.props.onHandleClick(i);
            return;
        }
        let buttomLine = document.querySelector('.bottom-line');
        let left;
        switch(i) {
            case 0:
                left = '0%';
            case 1:
                left = (33.333 * 1) + '%';
            default:
                left = (33.333 * i) + '%';
        }
        buttomLine.style.left = left;
    }

    render() {
        const { tabs, navStyle, tabStyle, lineStyle, buttomLineStyle } = this.props;
        const styles = {
            nav: this.props.navStyle || {
                width: '100%',
                backgroundColor: 'rgb(0, 188, 212)',
                whiteSpace: 'nowrap',
                display: 'flex',
            },
            tab: this.props.tabStyle || {
                boxSizing: 'border-box',
                display: 'inline-flex',
                fontFamily: 'Roboto, sans-serif',
                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                position: 'relative',
                color: 'rgb(255, 255, 255)',
                width: '33.3%',
                textTransform: 'uppercase',
                background: 'none',
                height: '48px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            },
            line: this.props.lineStyle || {
                width: '100%',
            },
            bottomLine: this.props.buttomLineStyle || {
                left: '0%',
                width: '33.333%',
                bottom: '0',
                display: 'block',
                backgroundColor: 'rgb(255, 64, 129)',
                height: '2px',
                marginTop: '-2px',
                position: 'relative',
                transition: 'left 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            },
        };

        return (
            <div>
                <div className="nav" style={styles.nav}>
                    {
                        tabs.map((item, index) =>
                                <div key={index} style={styles.tab} onClick={() => this.handleClick(index)} className={`${item}`}>{item}</div>
                        )
                    }
                </div>
                <div className="line" style={styles.line}>
                    <div className="bottom-line" style={styles.bottomLine}></div>
                </div>
            </div>
        )
    }
}
