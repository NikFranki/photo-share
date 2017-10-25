import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../Style/slider.less';

var ViewSwiper = function(el, minRange, previousSlide, nextSlide) {
    this.$el = el;
    this.minRange = minRange;
    this.isDragging = true;
    this.touchX;
    this.bindTouchEvn();
    this.previousSlide = previousSlide;
    this.nextSlide = nextSlide;
};

ViewSwiper.prototype.bindTouchEvn = function(e) {
    this.$el.addEventListener('touchstart', this.onTouchStart.bind(this), false);
    this.$el.addEventListener('touchmove', this.onTouchMove.bind(this), false);
    this.$el.addEventListener('touchend', this.onTouchEnd.bind(this), false);
}

ViewSwiper.prototype.onTouchStart = function(e) {
    if (this.isDragging) {
        this.touchX = e.touches[0].pageX;
        this.isDragging = false;
    }
}

ViewSwiper.prototype.onTouchMove = function(e) {
    // e.preventDefault();
    let touchX = this.touchX;
    let minRange = this.minRange;

    if (!this.isDragging) {
        let release = e.changedTouches[0];
        let releasedAt = release.pageX;
        if (releasedAt + minRange < touchX) {
            this.nextSlide();
            console.log('下一页');
            this.isDragging = true;
        } else if (releasedAt - minRange > touchX) {
            this.previousSlide();
            console.log('上一页');
            this.isDragging = true;
        }
    }
}

ViewSwiper.prototype.onTouchEnd = function(e) {
    let touchX = this.touchX;
    let minRange = this.minRange;

    if (!this.isDragging) {
        let release = e.changedTouches[0];
        let releasedAt = release.pageX;
        if (releasedAt + minRange < touchX) {
            this.isDragging = true;
            this.nextSlide();
            console.log('next page');
        } else if (releasedAt - minRange > touchX) {
            this.previousSlide();
            console.log('previous page');
            this.isDragging = true;
        }
    }
}

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
        let view = new ViewSwiper(document.querySelector('.slider'), 5, this.previousSlide, this.nextSlide);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
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
