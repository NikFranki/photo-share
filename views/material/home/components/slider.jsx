import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../Style/slider.less';

export class Slide extends Component {

    render() {
        const {background, active, link, text} = this.props;
        const slideStyle = {backgroundImage: 'url(' + background + ')' }

        return (
            <div className="slider_slide" data-active={active} style={slideStyle}>
                <div className="slider_slide_text">
                    <a href={link}>{text}</a>
                </div>
            </div>
        )
    }
}

export default class Slider extends Component {

    static propTypes = {
        slides: PropTypes.array.isRequired
    }

    static defaultProps = {
        slides: [
            {
                background: "../../../img/America.jpg",
                text: "America",
                link: "https://unsplash.com/anthonydelanoix"
            },
            {
                background: "../../../img/Mountains.jpg",
                text: "Mountains",
                link: "https://unsplash.com/aleskrivec"
            },
            {
                background: "../../../img/Shore.jpg",
                text: "Shore",
                link: "https://unsplash.com/intrepid"
            }
        ],

        autoplay: true,
    }

    state = {
        activeSlide: 0,
        interval: '',
    }

    componentDidMount() {
        if (this.props.autoplay) {
            // this.startInterval();
        }
        this.handleSlide();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    //返回角度
    GetSlideAngle = (dx, dy) => {
        return Math.atan2(dy, dx) * 180 / Math.PI;
    }

    //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
    GetSlideDirection = (startX, startY, endX, endY) => {
        let dy = startY - endY;
        let dx = endX - startX;
        let result = 0;

        //如果滑动距离太短
        if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
            return result;
        }

        let angle = this.GetSlideAngle(dx, dy);
        if(angle >= -45 && angle < 45) {
            result = 4;
        }else if (angle >= 45 && angle < 135) {
            result = 1;
        }else if (angle >= -135 && angle < -45) {
            result = 2;
        }else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        }

        return result;
    }

    //滑动处理
    handleSlide = () => {
        let startX, startY;
        document.addEventListener('touchstart', ev => {
            startX = ev.touches[0].pageX;
            startY = ev.touches[0].pageY;
        }, false);
        document.addEventListener('touchend', ev => {
            let endX, endY;
            endX = ev.changedTouches[0].pageX;
            endY = ev.changedTouches[0].pageY;
            let direction = this.GetSlideDirection(startX, startY, endX, endY);
            switch(direction) {
                case 0:
                    console.log("没滑动");
                    this.slideDirction = "";
                    break;
                case 1:
                    console.log("向上");
                    this.slideDirction = "top";
                    break;
                case 2:
                    console.log("向下");
                    this.slideDirction = "bottom";
                    break;
                case 3:
                    console.log("向左");
                    this.slideDirction = "left";
                    this.nextSlide();
                    break;
                case 4:
                    console.log("向右");
                    this.slideDirction = "right";
                    this.previousSlide();
                    break;
                default:
            }
        }, false);
    }

    startInterval = () => {
        let interval = setInterval(() => {
            this.nextSlide();
        }, 3000);
        this.setState({interval: interval});
    }

    endInterval = () => {
        clearInterval(this.state.interval);
    }

    nextSlide = () => {
        this.endInterval();
        let slide = this.state.activeSlide + 1 < this.props.slides.length ? this.state.activeSlide + 1 : 0;
        this.setState({
            activeSlide: slide
        });
        // this.startInterval();
    }

    previousSlide = () => {
        this.endInterval();
        let slide = this.state.activeSlide - 1 < 0 ? this.props.slides.length - 1:  this.state.activeSlide - 1;
        this.setState({
            activeSlide: slide
        });
        // this.startInterval();
    }

    render() {
        const {slides} = this.props;
        return (
            <div className="slider">
                {
                    slides.map((slide, index) =>
                        <Slide
                            key={index}
                            background={slide.background}
                            active={index === this.state.activeSlide}
                            text={slide.text}
                            link={slide.link}
                        />
                    )
                }
                <div className="slider_next" onClick={this.nextSlide}><i className="fa fa-4x fa-arrow-circle-right">{">"}</i></div>
                <div className="slider_previous" onClick={this.previousSlide}><i className="fa fa-4x fa-arrow-circle-left">{"<"}</i></div>
            </div>
        )
    }
}
