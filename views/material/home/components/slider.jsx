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
