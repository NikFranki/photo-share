import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Avatar } from 'material-ui';
import SliderX from '../material/home/components/sliderX';

import '../Style/peason-detail.less';

export default class PeasonDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const imgSrcArr =  [
                      '../../../img/dream.jpg',
                      '../../../img/solo.jpg',
                      '../../../img/madrid.jpg',
                      '../../../img/ramos.jpg',
                      '../../../img/dream.jpg'
        ];
        return  <MuiThemeProvider>
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
    }
}

