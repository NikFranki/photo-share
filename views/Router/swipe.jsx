import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../material/home/components/nav';
import Swiper from '../material/home/components/swiper';
import Add from './add';
import Peason from './peason';
import CustomSearch from '../material/home/components/custom-search';

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
    }
};

export default class MycComponent extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (i, slideToFunc) => {
        this.refs.swipers.handleSlideTo(i);
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
        } = this.props;

        return (
            <div>
                <Nav tabs={['tab one', 'tab two', 'tab three']} navStyle={styles.nav} tabStyle={styles.tab} lineStyle={styles.line} buttomLineStyle={styles.buttomLine}  onHandleClick={this.handleClick} />
                <Swiper ref='swipers' onSlideChangeEnd={this.handleClick}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            {/*<img style={styles.img} src={urlSrc[0]} alt="slide1" />*/}
                            <Peason />
                            <CustomSearch />
                        </div>
                        <div className="swiper-slide">
                            <img style={styles.img} src={urlSrc[1]} alt="slide2" />
                        </div>
                        <div className="swiper-slide">
                            <img style={styles.img} src={urlSrc[2]} alt="slide3" />
                        </div>
                    </div>
                </Swiper>
            </div>
        )
    }
}

