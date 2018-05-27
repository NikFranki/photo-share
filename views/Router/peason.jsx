import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import IconTurnedInNot from 'material-ui/svg-icons/action/turned-in-not';
import Api from '../../js/api';
import LocalData from '../../js/localStorage';
import "../Style/peason.less";
import Popup from '../material/home/components/Popup';

class Peason extends Component {

    state = {
        detailMsg: {}
    }

    componentWillMount() {
        this.user = LocalData.getLocalData('ActiveUser') ? LocalData.getLocalData('ActiveUser').name : "eva";
        // this.reqForPeason();
    }

    isEmptyObj = (obj) => {
        for (let name in obj) {
            return false;
        }
        return true;
    }

    getLastHref = () => {
        let index = location.href.indexOf("views");
        return location.href.substr(0, index+6);
    }

    reqForPeason = () => {
        Api.call(`search/user?name=${this.user}`, 'get', {}, this.successCallback, {isExecuteErrorBack: true, isDelayLoading: false}, this.failCallback);
    }

    successCallback = response => {
        this.setState({
            detailMsg: {
                bio: response.user.bio || '',
                posts: response.user.posts || '0',
                followers: response.user.followers || '0',
                focusers: response.user.focusers || '0',
            }
        })
    }

    render() {
        const photoWidth = window.innerWidth * 0.35;
        const sign = <p>fantasty@dream~~<br />ONCE A RED, ALWAYS REDS</p>;
        console.log(this.state.detailMsg);
        const {
            detailMsg
        } = this.state;

        const isShow = this.isEmptyObj(this.state.detailMsg) ? false : true;

        return (
            <MuiThemeProvider>
                <div>
                    <button onClick={() => this.refs.popup.handlePopupStart()}>start</button>
                    <Popup ref="popup" />
                    {
                    isShow ? <div className="peason-module">
                                <header>
                                    <section className="peasonal-details">
                                        <button className="back" onClick={() => {location.href = this.getLastHref()+"material/login/login.html";}}>退出</button>
                                        <Avatar
                                            className="avator"
                                            src="../../../img/ramos3.jpg"
                                            size={65}
                                        />
                                        <img className="plus" src="../../../img/plus.svg" alt="plus" />
                                        <div className="statistics">
                                            <p><span>{detailMsg.posts}</span><span>{detailMsg.followers}</span><span>{detailMsg.focusers}</span></p>
                                            <p><span>帖子</span><span>关注者</span><span>关注</span></p>
                                            <button>编辑个人主页</button>
                                        </div>
                                    </section>
                                    <section className="signature">{detailMsg.bio ? detailMsg.bio : ''}</section>
                                </header>
                                <main className="peason-wrapper">
                                    <nav>
                                        <ul>
                                            <li className="all"><img src="../../../img/apps.svg" alt="" /></li>
                                            <li className="single"><img src="../../../img/iconfont-gengduo.svg" alt="" /></li>
                                            <li className="correlation"><img src="../../../img/related.svg" alt="" /></li>
                                            <li className="collects"><IconTurnedInNot className="collection" /></li>
                                        </ul>
                                    </nav>
                                    <div className="photo-wall">
                                        {
                                            [1,2,3,4,5].map((item, key) => <section key={key} className="photo-item">
                                            <img style={{width: photoWidth, height: photoWidth}} src="../../../img/America.jpg" alt="photo" />
                                            <img style={{width: '30%', height: photoWidth}} src="../../../img/America.jpg" alt="photo" />
                                            <img style={{width: photoWidth, height: photoWidth}} src="../../../img/America.jpg" alt="photo" />
                                        </section>)
                                        }
                                    </div>
                                </main>
                                </div>
                    : <div></div>
                }
                </div>

            </MuiThemeProvider>
        )
    }
}

export default Peason;
