import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../../Style/drop-down.less';

export default class DropDown extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        list: ['item 1', 'item 2', 'item 3'],
    }

    state = {
        display: false,
    }

    componentDidMount() {
        this.slideToggleTrans(document.getElementById('button'));
        this.otherBodyEle();
    }

    otherBodyEle = () => {
        document.body.addEventListener('click', (e) => {
            if (e.target.id !== "button" ) {
                this.getSlideHeight(document.querySelector('#more'), false);
                this.setState({display: false});
            }
        });
    }

    handleClickRow = (rowData, index) => {
        console.log(this.refs[`row-${index}`]);
        this.refs[`row-${index}`].addEventListener('touchstart', () => {}, false);
        this.setState({display: false});
        let element = document.getElementById('button');
        let rel = element.getAttribute("data-rel");
        let eleMore = document.querySelector("#"+rel);
        // eleMore.style.height = "0px";
        this.getSlideHeight(eleMore, false);
    }

    getSlideHeight = (el, display) => {
        let elMore = el ? el : document.getElementById('more');

        elMore && (elMore.style.height = display ? (() => {
            let height = 0;

            Array.prototype.slice.call(elMore.childNodes).forEach((child) => {
                if (child.nodeType === 1) {
                    let oStyle = window.getComputedStyle(child);
                    height = child.clientHeight + (parseInt(oStyle.borderTopWidth) || 0) + (parseInt(oStyle.borderBottomWidth) || 0);
                }
            });

            return height;
        })() + "px" : "0px");
    }

    slideToggleTrans = (element, display) => {
        // css3 transmition slide滑动效果
        element.addEventListener('click', () => {
            display = !this.state.display;
            this.setState({display: !this.state.display});

            let rel = element.getAttribute("data-rel");
            let eleMore = document.querySelector("#"+rel);

            this.getSlideHeight(eleMore, display);
            // eleMore && (eleMore.style.height = display ? (() => {
            //     let height = 0;

            //     Array.prototype.slice.call(eleMore.childNodes).forEach((child) => {
            //         if (child.nodeType === 1) {
            //             let oStyle = window.getComputedStyle(child);
            //             height = child.clientHeight + (parseInt(oStyle.borderTopWidth) || 0) + (parseInt(oStyle.borderBottomWidth) || 0);
            //         }
            //     });

            //     return height;
            // })() + "px" : "0px")
        }, false);
    }

    render() {
        const {
            list
        } = this.props;

        return (
            <div>
                <div className="box">
                    <p><a href="javascript:" id="button" data-rel="more">点击我</a></p>
                    <div id="more" className="container">
                        <div className="wrap">
                            <ul>
                                {
                                    list.map((value, index) =>
                                    <li ref={`row-${index}`} key={index} onClick={() => this.handleClickRow(value, index)}>
                                        {value}
                                    </li>)
                                }
                                {/*<li>item 1</li>
                                <li>item 2</li>
                                <li>item 3</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
