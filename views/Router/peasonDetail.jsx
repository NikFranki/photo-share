import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActionCreators from '../Redux/Action/Index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Avatar } from 'material-ui';
import SliderX from '../material/home/components/sliderX';
import ReactPullLoad, { STATS } from '../material/home/components/pull-loader';

import '../Style/peason-detail.less';

const loadMoreLimitNum = 5;

const imgSrcArr =  [
    '../../../img/ramos.jpg',
    '../../../img/ramos1.jpg',
    '../../../img/ramos2.jpg'
];

class PeasonDetail extends Component {
    constructor(props) {
        super(props);
        this.state ={
          hasMore: true,
          data: imgSrcArr,
          action: STATS.init,
          index: loadMoreLimitNum //loading more test time limit
        };
        this.boundActionCreators = bindActionCreators(TodoActionCreators, this.props.dispatch);
    }

    componentDidMount() {
        this.boundActionCreators.peasonPostImgs(imgSrcArr);
    }

    handleAction = (action) => {
        console.info(action, this.state.action,action === this.state.action);
        //new action must do not equel to old action
        if(action === this.state.action){
            return false
        }

        if(action === STATS.refreshing){//刷新
            this.handRefreshing();
        } else if(action === STATS.loading){//加载更多
            this.handLoadMore();
        } else{
            //DO NOT modify below code
            this.setState({
                action: action
            })
        }
    }

    handRefreshing = () => {
        if(STATS.refreshing === this.state.action){
            return false
        }

        // 模拟数据请求异步操作
        setTimeout(()=>{
            //refreshing complete
            this.setState({
                hasMore: true,
                action: STATS.refreshed,
                index: loadMoreLimitNum
            });
        }, 1000)

        this.setState({
            action: STATS.refreshing
        })
    }

    handLoadMore = () => {
        if(STATS.loading === this.state.action){
            return false;
        }

        //无更多内容则不执行后面逻辑
        if(!this.state.hasMore){
            return;
        }

        // 模拟数据请求异步操作
        setTimeout(()=>{
            if(this.state.index === 0){
                this.setState({
                    action: STATS.reset,
                    hasMore: false
                });
            } else{
                this.setState({
                    data: [...this.state.data, imgSrcArr[0]],
                    action: STATS.reset,
                    index: this.state.index - 1
                });
                this.boundActionCreators.peasonPostImgs(this.state.data);
            }
        }, 1000)

        this.setState({
            action: STATS.loading
        })
    }

    render() {
        const {
          hasMore,
          data
        } = this.state

        return  <ReactPullLoad
                    downEnough={150}
                    action={this.state.action}
                    handleAction={this.handleAction}
                    hasMore={hasMore}
                    distanceBottom={1000}>
                    <MuiThemeProvider>
                        <div className="personal-introduce">
                            <div className="header-msg">
                                <a className="avatar">
                                    <Avatar src='../../../img/ramos_avatar.jpg'
                                            size={50}
                                    />
                                </a>
                                <div className="quantity-statistics">
                                    <div className="qualitys">
                                        <div className="qual-top">
                                            <div className="one">
                                                <p>903</p>
                                                <p>帖子</p>
                                            </div>
                                            <div className="two">
                                                <p>19.8m</p>
                                                <p>关注者</p>
                                            </div>
                                            <div className="three">
                                                <p>870</p>
                                                <p>关注</p>
                                            </div>
                                        </div>
                                        <div className="qual-botom">
                                            <div className="attention">
                                                已关注
                                            </div>
                                            <div className="drop-down">
                                                <img src="../../../img/drop-down.svg" alt="下拉" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-introduation">
                                <p className="name">Sergio Ramos</p>
                                <div className="decoration">
                                    Cuenta oficial de Sergio Ramos.
                                    Cuenta oficial de Sergio Ramos.
                                    Cuenta oficial de Sergio Ramos.
                                    Cuenta oficial de Sergio Ramos.
                                    Cuenta oficial de Sergio Ramos.
                                </div>
                                <p className="translation">查看翻译</p>
                                <p className="link-href">bit.ly/UnicefMexico</p>
                                <p className="obseration">关注者: <span className="obser">franki</span></p>
                            </div>
                            <div className="photo-show">
                                <nav>
                                    <ul>
                                        <li className="all"><a href="#/peaDetail/all"><img src="../../../img/apps.svg" alt="" /></a></li>
                                        <li className="single"><a href="#/peaDetail/single"><img src="../../../img/iconfont-gengduo.svg" alt="" /></a></li>
                                        <li className="correlation"><a href="#/related"><img src="../../../img/related.svg" alt="" /></a></li>
                                    </ul>
                                </nav>
                                {this.props.children}
                            </div>
                        </div>
                    </MuiThemeProvider>
                </ReactPullLoad>
    }
}

export default connect((state, ownProps) => {
    return {
        photos: state.peasonPostImgs
    }
})(PeasonDetail);
