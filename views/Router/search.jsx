import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchBar from '../material/home/components/search-bar';
import Nav from '../material/home/components/nav';
import Loading from '../material/home/components/loading';
import Recommend from '../material/home/components/recommend';
import SlideBar from '../material/home/components/slide-bar';
import SlideImgs from '../material/home/components/slide-imgs';
import Dialog from '../material/home/components/dialog';
import * as TodoActionCreators from '../Redux/Action/Index';
import LocalData from '../../js/localStorage';
import Api from '../../js/api';
import Gesture from '../../js/gesture';

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
        this.user = LocalData.getLocalData('ActiveUser') ? LocalData.getLocalData('ActiveUser').name : "eva";
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
            width: `${100 / this.tabs.length}%`,
            textTransform: 'uppercase',
            background: 'none',
            height: '48px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all .5s',
        };
        this.bottomLine = {
            left: '0%',
            width: `${100/this.tabs.length}%`,
            bottom: '0',
            display: 'block',
            backgroundColor: '#000',
            height: '1px',
            marginTop: '-1px',
            position: 'relative',
            transition: 'left .5s cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        };
    }

    componentDidMount() {
        this.boundActionCreators.recommendSelect(this.recommendList.slice(0, 2));
        // this.getServerData();
    }

    componentDidUpdate() {
        if (this.props.isShowSearch && this.searchCount === 1) {
            // 页面手势滑动处理
            Gesture.handleSlide(document.querySelector('.recommend-page'),
                {
                    left: () => {
                        const curIndex = this.curIndex;
                        this.handleClick(curIndex+1 < 4 ? curIndex+1 : 3);
                        this.handleRecommend(curIndex+1 < 4 ? curIndex+1 : 3);
                    },
                    right: () => {
                        const curIndex = this.curIndex;
                        this.handleClick(curIndex-1 < 0 ? 0 : curIndex-1);
                        this.handleRecommend(curIndex-1 < 0 ? 0 : curIndex-1);
                    }
                }
            );
            this.searchCount++;
        }
    }

    componentWillUnmount() {
        this.navStyle = {};
        this.tabStyle = {};
        this.boundActionCreators.tabSelect(0);
    }

    doAction = (action) => {
        const actions = {
            'hack': () => {
                console.log('hack');
                return 'hack';
            },
            'slash': () => {
                console.log('slash');
                return 'slash';
            },
            'run': () => {
                console.log('run');
                return 'run';
            }
        };

        if (typeof actions[action] !== 'function') {
            throw new Error('Invalid action.');
        }

        return actions[action]();
    }

    successCallback = () => {
        this.boundActionCreators.AddLoadingStatus(false);
    }

    failCallback = () => {
        this.boundActionCreators.AddLoadingStatus(false);
        this.boundActionCreators.openDialog(['网络请求出错了，请稍后再试']);
    }

    getServerData = () => {
        // search/img?author=taylor
        this.boundActionCreators.AddLoadingStatus(true);
        Api.call(`search/user?name=${this.user}`, 'get', {}, this.successCallback, {isExecuteErrorBack: true, isDelayLoading: true, delayTime: 1000}, this.failCallback);
    }

    handleClick = (i) => {
        console.log(i);
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
            isShowSearch,
            resLoadingStatus,
            doWithDialog
        } = this.props;

        const props = {loading: resLoadingStatus, loadingType: 6, loadingName: ''};

        return  <div className="recommend-hole">
                    {this.props.children}
                    <SearchBar placeholder={searchPlaceholder} onHandleImgClick={this.handleImgClick} onHandleInputClick={this.handleInputClick} />
                    {
                        isShowSearch ? <div>
                            <Nav navStyle={this.navStyle} tabs={this.tabs} tabStyle={this.tabStyle} buttomLineStyle={this.bottomLine} selectIndex={index} onHandleClick={this.handleClick} />
                            <Recommend recommends={recommends} />
                        </div>
                        :
                        <div>
                            <SlideBar />
                            <SlideImgs />
                        </div>
                    }
                    <Loading ref="loading" {...props} />
                    <Dialog
                      show={doWithDialog.show}
                      title="搜索"
                      content={doWithDialog.dialogContents}
                      ok="确定"
                      cancel="取消"
                      onHandleCloseDialog={() => this.boundActionCreators.closeDialog()}
                    />
                </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        index: state.doWithTabSelect,
        recommends: state.recommendArr,
        searchPlaceholder: state.searchBarStr,
        isShowSearch: state.isShowSearch,
        resLoadingStatus: state.resLoadingStatus,
        doWithDialog: state.doWithDialog, //返回弹框state
    }
}

export default connect(mapStateToProps)(Search);
