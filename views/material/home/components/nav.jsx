import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        tabs: ['one', 'two', 'three'], // 默认tab数目
        isNeedFocus: true, // 默认点击后是否需要聚焦
        selectIndex: {index: 0}, // 当前选择的index
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
                left = (100/this.props.tabs.length * 1) + '%';
            default:
                left = (100/this.props.tabs.length * i) + '%';
        }
        buttomLine.style.left = left;
    }

    render() {
        const { tabs, navStyle, tabStyle, lineStyle, buttomLineStyle, selectIndex } = this.props;
        const styles = {
            nav: navStyle || {
                width: '100%',
                backgroundColor: 'rgb(0, 188, 212)',
                whiteSpace: 'nowrap',
                display: 'flex',
            },
            tab: tabStyle || {
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
                transition: 'all .5s',
            },
            line: lineStyle || {
                width: '100%',
            },
            bottomLine: buttomLineStyle || {
                left: '0%',
                width: `${100/tabs.length}%`,
                bottom: '0',
                display: 'block',
                backgroundColor: 'rgb(255, 64, 129)',
                height: '2px',
                marginTop: '-2px',
                position: 'relative',
                transition: 'left .5s cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            },
        };

        return (
            <div>
                <div className="nav" style={styles.nav}>
                    {
                        tabs.map((item, index) => {
                            let tabStyles = {};
                            if (this.props.isNeedFocus && index === selectIndex.index) {
                                tabStyles = Object.assign({}, styles.tab, {opacity: '.9'});
                            } else {
                                tabStyles = styles.tab;
                            }
                            return (
                                <div ref={`tab-${index}`} key={index} style={tabStyles} onClick={() => this.handleClick(index)} className={`${item}`}>{item}</div>
                            )
                        })
                    }
                </div>
                <div className="line" style={styles.line}>
                    <div className="bottom-line" style={styles.bottomLine}></div>
                </div>
            </div>
        )
    }
}

export default Nav;
