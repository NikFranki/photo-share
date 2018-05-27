import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import '../../../../node_modules/swiper/dist/css/swiper.css';

const urlSrc = [
    '../../../img/America.jpg',
    '../../../img/Mountains.jpg',
    '../../../img/Shore.jpg',
];

const styles = {
    img: {
        width: '100%',
        height: '40vw'
    }
};

export default class SwiperComponent extends Component {

    static defaultProps = {
        initialSlide: 0, // 默认轮播图从index为0的位置显示
    };

    constructor(props) {
        super(props);
        this.swiper = ""; // swiper 对象
    }

    componentDidMount() {
        document.querySelector('.recommend').addEventListener('touchstart', () => {
          this.swiper.disableTouchControl();
        }, false);

        document.querySelector('.recommend').addEventListener('touchend', () => {
          this.swiper.enableTouchControl();
        }, false);

        this.swiper = new Swiper('.swiper-container', {
            initialSlide: this.props.initialSlide,
            // pagination: '.swiper-pagination', // 分页器
            // speed: 500, // 滑片速度
            prevButton: `.swiper-button-prev`,
            nextButton: `.swiper-button-next`,
            // autoplay: 3000, // 自动滑动
            // loop: true,
            loopAdditionalSlide: 1,
            freeMode: false, // 只滑动一个slide

            // callback
            onSlideChangeEnd: (swiper) => {
                if (this.props.onSlideChangeEnd && typeof(this.swiper.realIndex) !== 'undefined') {
                    this.props.onSlideChangeEnd(this.swiper.realIndex);
                    return;
                }
            },
            onSetTransition: (swiper) => {
                swiper.disableTouchControl();
            },
            onTransitionEnd: (swiper) => {
                swiper.enableTouchControl();
            }
        });
    }

    handleSlideTo = (i) => {
        this.swiper.slideTo(i, 500, false);
    }

    render() {
        const swrapper_view =   <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img style={styles.img} src={urlSrc[0]} alt="slide1" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img style={styles.img} src={urlSrc[1]} alt="slide2" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img style={styles.img} src={urlSrc[2]} alt="slide3" />
                                    </div>
                                </div>;
        const children = this.props.children ? this.props.children : swrapper_view;

        return (
            <div className="swiper-container">
                {children}

                <div className="swiper-pagination">
                </div>

                {/*<div className="swiper-button-prev">
                </div>

                <div className="swiper-button-next">
                </div>*/}
            </div>
        )
    }
}
