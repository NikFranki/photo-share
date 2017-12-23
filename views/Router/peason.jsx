import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import IconTurnedInNot from 'material-ui/svg-icons/action/turned-in-not';
import "../Style/peason.less";

class Peason extends Component {

    render() {
        const photoWidth = window.innerWidth * 0.35;

        return (
            <MuiThemeProvider>
                <div className="peason-module">
                    <header>
                        <section className="peasonal-details">
                            <Avatar
                                className="avator"
                                src="../../../img/ramos3.jpg"
                                size={65}
                            />
                            <img className="plus" src="../../../img/plus.svg" alt="plus" />
                            <div className="statistics">
                                <p><span>100</span><span>1000</span><span>100</span></p>
                                <p><span>帖子</span><span>关注者</span><span>关注</span></p>
                                <button>编辑个人主页</button>
                            </div>
                        </section>
                        <section className="signature">fantasty@dream~~<br />ONCE A RED, ALWAYS REDS</section>
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
            </MuiThemeProvider>
        )
    }
}

export default Peason;
