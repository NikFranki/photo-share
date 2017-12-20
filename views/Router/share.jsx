import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toggle from 'material-ui/Toggle';
import '../Style/share.less';
import {HomeScrollListMsg} from '../Redux/Action/Index';
import LocalStorge from '../../js/localStorage';

class Share extends Component {

    componentDidMount() {

    }

    render() {
        console.log(this.props);
        let src = LocalStorge.getLocalData("publish-image-src") || src;

        const homeListItemMsg = {
          id: window.scrollListMsg.length+1,
          avatar: src,
          postman: 'sergioramos',
          postpicture: src,
          favournums: '1000000',
          postmanstatemen: '哈哈',
          comments: '1005',
          followerscomments: ['第一条评论', '第二条评论']
        };

        return (
            <MuiThemeProvider>
            <div className="share">
                <div className="top-bar">
                    <img src="../../../img/left_arrow.svg" alt="left" />
                    <span className="top-bar-share-to">分享对象</span>
                    <span onClick={() => {
                        this.props.dispatch(HomeScrollListMsg([homeListItemMsg]));
                        hashHistory.push('/home');
                    }} className="top-bar-share">分享</span>
                </div>
                <div className="images-share">
                    <a><img src={src} alt="taylor" /></a>
                    <input type="text" placeholder="说说这张图片..." />
                </div>
                <div className="location">location</div>
                <div className="user-sign">user-sign</div>
                <div className="share-to">
                    <div className="share-to-some">分享对象</div>
                    <div className="Facebook">
                        <Toggle
                            label="Facebook"
                            defaultToggled={false}
                        />
                    </div>
                    <div className="Twitter">
                        <Toggle
                            label="Twitter"
                            defaultToggled={false}
                        />
                    </div>
                    <div className="Tumblr">
                        <Toggle
                            label="Tumblr"
                            defaultToggled={false}
                        />
                    </div>
                </div>
                <div className="advanced-settings">高级设置</div>
            </div>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        resHomeScrollListMsg: state.resHomeScrollListMsg
    }
}

export default connect(mapStateToProps)(Share);
