import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchBar from '../material/home/components/search-bar';
import Nav from '../material/home/components/nav';
import Recommend from '../material/home/components/recommend';
import SlideBar from '../material/home/components/slide-bar';
import SlideImgs from '../material/home/components/slide-imgs';
import * as TodoActionCreators from '../Redux/Action/Index';

class Search extends Component {
    constructor(props) {
        super(props);
        this.tabs = ["热门搜索", "用户", "标签", "地点"];
        this.tabStyle = {};
        this.navStyle = {};
        this.curIndex = 0; // 默认选中的index
        this.searchCount = 0; // 次数控制，防止组件state更新无限触发componentDidUpdate
        this.recommendList = [{name0: false}, {name1: false}, {name2: false}, {name3: false}, {name4: false}];
        this.boundActionCreators = bindActionCreators(TodoActionCreators, this.props.dispatch); // 绑定actioncreator, 并dispatch action
    }

    componentWillMount() {
        this.navStyle = {
            width: '100%',
            backgroundColor: '#fff',
            whiteSpace: 'nowrap',
            display: 'flex',
            boxShadow: '0 1px 0 #ddd',
        };
        this.tabStyle = {
            boxSizing: 'border-box',
            display: 'inline-flex',
            fontFamily: 'Roboto, sans-serif',
            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            position: 'relative',
            color: '#000',
            opacity: '.5',
            width: '33.3%',
            textTransform: 'uppercase',
            background: 'none',
            height: '48px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all .5s',
        };
    }

    componentDidMount() {
        this.boundActionCreators.recommendSelect(this.recommendList.slice(0, 2));
    }

    componentDidUpdate() {
        if (this.props.isShowSearch && this.searchCount === 1) {
            this.handleSlide();
            this.searchCount++;
        }
    }

    componentWillUnmount() {
        this.navStyle = {};
        this.tabStyle = {};
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
        document.querySelector('.recommend-page').addEventListener('touchstart', ev => {
            startX = ev.touches[0].pageX;
            startY = ev.touches[0].pageY;
        }, false);
        document.querySelector('.recommend-page').addEventListener('touchend', ev => {
            let endX, endY;
            endX = ev.changedTouches[0].pageX;
            endY = ev.changedTouches[0].pageY;
            let direction = this.GetSlideDirection(startX, startY, endX, endY);
            let curIndex = this.curIndex;

            switch(direction) {
                case 0:
                    console.log("没滑动");
                    break;
                case 1:
                    console.log("向上");
                    break;
                case 2:
                    console.log("向下");
                    break;
                case 3:
                    console.log("向左");
                    this.handleClick(curIndex+1 < 4 ? curIndex+1 : 3);
                    this.handleRecommend(curIndex+1 < 4 ? curIndex+1 : 3);
                    break;
                case 4:
                    console.log("向右");
                    this.handleClick(curIndex-1 < 0 ? 0 : curIndex-1);
                    this.handleRecommend(curIndex-1 < 0 ? 0 : curIndex-1);
                    break;
                default:
            }
        }, false);
    }

    handleClick = (i) => {
        this.curIndex = i;
        this.handleRecommend(i);
        // 利用dispatch发送action
        this.boundActionCreators.tabSelect(i);
        let buttomLine = document.querySelector('.bottom-line');
        let left;
        switch(i) {
            case 0:
                left = '0%';
            case 1:
                left = (100/this.tabs.length * 1) + '%';
            default:
                left = (100/this.tabs.length * i) + '%';
        }
        buttomLine.style.left = left;
    }

    handleRecommend = (i) => {
        let index = i;
        if (index === 0) {
            this.boundActionCreators.searchPlacehold("搜索");
            this.boundActionCreators.recommendSelect(this.recommendList.slice(0, 2));
        } else if (index === 1) {
            this.boundActionCreators.searchPlacehold("搜索用户");
            this.boundActionCreators.recommendSelect(this.recommendList.slice(0, 3));
        } else if (index === 2) {
            this.boundActionCreators.searchPlacehold("搜索话题标签");
            this.boundActionCreators.recommendSelect(this.recommendList.slice(0, 4));
        } else {
            this.boundActionCreators.searchPlacehold("搜索地点");
            this.boundActionCreators.recommendSelect(this.recommendList.slice(0, 5));
        }
    }

    handleInputClick = (flag) => {
        this.searchCount = this.searchCount === 0 ? 1 : 2;
        this.boundActionCreators.searchShow(flag);
    }

    handleImgClick = (flag) => {
        this.curIndex = 0;
        this.searchCount = 0;
        this.boundActionCreators.recommendSelect(this.recommendList.slice(0, 5));
        this.boundActionCreators.searchShow(flag);
    }

    render() {
        const {
            index,
            recommends,
            searchPlaceholder,
            isShowSearch
        } = this.props;

        return <div className="recommend-hole">
                {this.props.children}
                <SearchBar placeholder={searchPlaceholder} onHandleImgClick={this.handleImgClick} onHandleInputClick={this.handleInputClick} />
                {
                    isShowSearch ? <div>
                        <Nav navStyle={this.navStyle} tabs={this.tabs} tabStyle={this.tabStyle} selectIndex={index} onHandleClick={this.handleClick} />
                        <Recommend recommends={recommends} />
                    </div>
                    :
                    <div>
                        <SlideBar />
                        <SlideImgs />
                    </div>
                }
                {/*<Link to="/search/page">page</Link><br />
                <Link to="/search/res">res</Link>*/}
            </div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        index: state.doWithTabSelect,
        recommends: state.recommendArr,
        searchPlaceholder: state.searchBarStr,
        isShowSearch: state.isShowSearch
    }
}

export default connect(mapStateToProps)(Search);
