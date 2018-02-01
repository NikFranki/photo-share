import React, {Component} from 'react';
import Nav from '../material/home/components/nav';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActionCreators from '../Redux/Action/Index';
import Gesture from '../../js/gesture';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Dialog from '../material/home/components/dialog';

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
        // 页面手势滑动处理
        Gesture.handleSlide(document.querySelector('.favor-wrapper'),
            {
                left: () => {
                    this.handleClick(this.curIndex+1 < this.tabs.length ? this.curIndex+1 : this.tabs.length-1);
                },
                right: () => {
                    this.handleClick(this.curIndex-1 < 0 ? 0 : this.curIndex-1);
                }
            }
        );

        // 长按操作
        Gesture.longPress(document.querySelector('.favor-wrapper'), () => {console.log('长按');this.boundActionCreators.openDialog(['关注他', '举报'])});
    }

    componentWillUnmount() {
        this.tabStyle = {};
        this.navStyle = {};
        this.boundActionCreators.tabSelect(0);
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
            doWithDialog,
            index
        } = this.props;

        return (
            <div className="favor">
                <Nav navStyle={this.navStyle} tabStyle={this.tabStyle} buttomLineStyle={this.bottomLine} tabs={this.tabs} selectIndex={index} onHandleClick={this.handleClick} />
                <FollowList index={index.index} />
                <Dialog
                  show={doWithDialog.show}
                  content={doWithDialog.dialogContents}
                  ok="确定"
                  cancel="取消"
                  onHandleOpenDialog={() => this.boundActionCreators.openDialog(['举报...', '复制网址', '打开发帖通知'])}
                  onHandleCloseDialog={() => this.boundActionCreators.closeDialog()}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        doWithDialog: state.doWithDialog, //返回弹框state
        index: state.doWithTabSelect,
    }
}

export default connect(mapStateToProps)(Favorites);
