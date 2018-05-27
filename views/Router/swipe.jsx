import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../material/home/components/nav';
import Swiper from '../material/home/components/swiper';
import Add from './add';
import PhotoContent from './photoContent';
import HomeContent from './homeContent';
import SendContent from './sendContent';
import TabFirst from './tabFirst';
import TabSecond from './tabSecond';
import TabThird from './tabThird';

const urlSrc = [
    '../../../img/America.jpg',
    '../../../img/Mountains.jpg',
    '../../../img/Shore.jpg',
]

const styles = {
    nav: {
        width: '100%',
        backgroundColor: 'rgb(0, 188, 212)',
        whiteSpace: 'nowrap',
        display: 'flex',
    },
    tab: {
        boxSizing: 'border-box',
        display: 'inline-flex',
        fontFamily: 'Roboto, sans-serif',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        position: 'relative',
        color: 'rgb(255, 255, 255)',
        width: '33.333%',
        textTransform: 'uppercase',
        background: 'none',
        height: '48px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        width: '100%',
    },
    bottomLine: {
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
    img: {
        width: '100%',
        height: '40vw'
    },
};

const tabFrist = <TabFirst />;
const tabSecond = <TabSecond />;
const tabThird = <TabThird />;


export default class MycComponent extends Component {

    static defaultProps = {
        tabs: [tabFrist, tabSecond, tabThird], //['tab one', 'tab two', 'tab three']
        swipes: [<PhotoContent />, <HomeContent />, <SendContent />], // 滑片
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    handleClick = (i, slideToFunc) => {
        this.refs.swipers && this.refs.swipers.handleSlideTo(i); // 只有当this.refs.swipers存在才调用handleSlideTo方法
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
        const {
            children,
            tabs,
            swipes
        } = this.props;

        return (
            <div>
                {children}
                <Nav ref='tab' className="haha" tabs={tabs} navStyle={styles.nav} tabStyle={styles.tab} lineStyle={styles.line} buttomLineStyle={styles.buttomLine} selectIndex={{index: 1}} onHandleClick={this.handleClick} />
                <Swiper ref='swipers' initialSlide={1} onSlideChangeEnd={this.handleClick}>
                    <div className="swiper-wrapper">
                        {swipes.map((item, index) =>    <div key={index} className="swiper-slide">
                                                            {item}
                                                        </div>
                        )}
                    </div>
                </Swiper>
            </div>
        )
    }
}

