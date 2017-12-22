import React, {Component} from 'react';
import Nav from '../material/home/components/nav';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActionCreators from '../Redux/Action/Index';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class FollowList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            index
        } = this.props;

        const followedList = <List className="followed-list" style={{height: window.innerHeight - 104, overflowY: 'scroll'}}>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item, key) => <ListItem key={key}
                    style={{marginBottom: "10px"}}
                    primaryText="Taylor Swift 赞了 romas 的帖子"
                    leftAvatar={<Avatar size={45} src="../../../img/taylor.jpg" />}
                    rightAvatar={<Avatar style={{borderRadius: 'inherit'}} size={45} src="../../../img/ramos_avatar.jpg" />}
                    />)
                }
            </List>;

        const privates = <List className="followed-list" style={{height: window.innerHeight - 104, overflowY: 'scroll'}}>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item, key) => <ListItem key={key}
                    innerDivStyle={{lineHeight: '20px', paddingTop: '13px'}}
                    style={{marginBottom: "10px"}}
                    primaryText="Taylor Swift 、Justin Bieber 和其他用户分享了12张照片"
                    leftAvatar={<Avatar size={45} src="../../../img/taylor.jpg" />}
                    />)
                }
            </List>;

        return <section className="favor-wrapper">
            <MuiThemeProvider>
                { index === 0 ? followedList : privates }
            </MuiThemeProvider>
        </section>
    }
}

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.tabs = ["已关注", "你"];
        this.tabStyle = {};
        this.navStyle = {};
        this.curIndex = 0; // 默认选中的index
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
        this.handleSlide();
    }

    componentWillUnmount() {
        this.tabStyle = {};
        this.navStyle = {};
        this.boundActionCreators.tabSelect(0);
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
        document.querySelector('.favor-wrapper').addEventListener('touchstart', ev => {
            startX = ev.touches[0].pageX;
            startY = ev.touches[0].pageY;
        }, false);
        document.querySelector('.favor-wrapper').addEventListener('touchend', ev => {
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
                    this.handleClick(curIndex+1 < this.tabs.length ? curIndex+1 : this.tabs.length-1);
                    break;
                case 4:
                    console.log("向右");
                    this.handleClick(curIndex-1 < 0 ? 0 : curIndex-1);
                    break;
                default:
            }
        }, false);
    }

    handleClick = (i) => {
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

    render() {
        const {
            index
        } = this.props;

        return (
            <div className="favor">
                <Nav navStyle={this.navStyle} tabStyle={this.tabStyle} buttomLineStyle={this.bottomLine} tabs={this.tabs} selectIndex={index} onHandleClick={this.handleClick} />
                <FollowList index={index.index}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        index: state.doWithTabSelect,
    }
}

export default connect(mapStateToProps)(Favorites);
