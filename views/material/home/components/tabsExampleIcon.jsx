import React, { Component } from 'react';

import { Avatar, FontIcon } from 'material-ui';
import {Tabs, Tab} from 'material-ui/Tabs';
import IconSettings from 'material-ui/svg-icons/action/settings';
import IconAutoRenew from 'material-ui/svg-icons/action/autorenew';
import IconFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconTurnedInNot from 'material-ui/svg-icons/action/turned-in-not';
import IconFavorite from 'material-ui/svg-icons/action/favorite';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconBrightness from 'material-ui/svg-icons/image/brightness-5';
import IconPanorama from 'material-ui/svg-icons/image/panorama-fish-eye';
import IconCamera from 'material-ui/svg-icons/image/photo-camera';
import ListItem from 'material-ui/List/ListItem';
import {CardMedia} from 'material-ui/Card';
import IconComment from 'material-ui/svg-icons/communication/comment';
import IconNearMe from 'material-ui/svg-icons/maps/near-me';
import IconSend from 'material-ui/svg-icons/content/send';

import SliderX from './sliderX';

const iconStyles = {
  marginRight: 15,
};

const style = {margin: 5};

class TabsExampleIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialSelectedIndex: 2,
    };
    this.select = this.select.bind(this);
  }

  componentDidMount() {

  }

  select(index) {
    if (this.props.handleTopIndex) {
      this.props.handleTopIndex(index);
    }
    this.setState({initialSelectedIndex: index});
  }

  render() {
    return (
      <Tabs initialSelectedIndex={this.state.initialSelectedIndex}>
        {
          this.props.pageTab.map((item, i) => {
            let aCon;
            const homeConHeight = {"height": document.body.clientHeight-40-56};
            aCon = i === 0 ?  <Tab key={i} onClick={() => this.select(0)} icon={<IconCamera />}>
                                <div className="photo-content" style={homeConHeight}>
                                  <div className="top-oper">
                                    <span><IconSettings /></span>
                                    <span><ArrowForward /></span>
                                  </div>
                                  <div className="bottom-oper">
                                    <span><IconBrightness /></span>
                                    <span><IconPanorama /></span>
                                    <span><IconAutoRenew /></span>
                                  </div>
                                </div>
                              </Tab> :
                   i === 1 ?  <Tab className="tabClass" key={i} onClick={() => this.select(1)} icon={<FontIcon className="muidocs-icon-action-home">Instagram</FontIcon>}>
                                <div className="home-content" style={homeConHeight}>
                                  <div className="your-snapshot">
                                    <ListItem
                                      style={{height: 70, background: "rgba(221, 221, 221, 0.08)"}}
                                      disabled={true}
                                      leftAvatar={
                                        <Avatar src="../../../img/solo.jpg"
                                                size={30}
                                                style={style}
                                        />
                                      }
                                    >
                                      <span className="img-shot">你的快拍</span>
                                    </ListItem>
                                  </div>
                                  <ul className="scroll-list">
                                    <li>
                                      <div className="personal-msg">
                                        <Avatar src="../../../img/solo.jpg"
                                                size={30}
                                                style={style}
                                        />
                                        <span className="username">sergioramos</span>
                                        <span><MoreVertIcon style={{color: "rgba(0, 0, 0, 0.5)", height: 20, width: 20}} /></span>
                                      </div>
                                      <div className="share-img">
                                          <CardMedia>
                                            <img src="../../../img/dream.jpg" alt="" />
                                          </CardMedia>
                                      </div>
                                      <div className="account-operate">
                                        <div className="icon-oper">
                                          <IconFavoriteBorder style={iconStyles} />
                                          <IconComment style={iconStyles} />
                                          <IconNearMe style={iconStyles} />
                                          <IconTurnedInNot style={{position: "absolute", right: 0}} />
                                        </div>
                                        <div className="comment-oper">
                                          <ListItem
                                                style={{paddingTop: 3, paddingLeft: 27, paddingBottom: 3, fontSize: 13}}
                                                disabled={true}
                                                leftAvatar={
                                                  <IconFavorite style={{top: 5, left: 15, width: 12, height: 12}} />
                                                }
                                          >
                                            1000000赞
                                          </ListItem>
                                          <div className="per-comment">
                                            哈哈
                                          </div>
                                          <div className="all-comment">
                                            全部1005条评论
                                          </div>
                                          <div className="first-comment">
                                            第一条评论
                                          </div>
                                          <div className="second-comment">
                                            第二条评论
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="personal-msg">
                                        <Avatar src="../../../img/solo.jpg"
                                                size={30}
                                                style={style}
                                        />
                                        <span className="username">sergioramos</span>
                                        <span><MoreVertIcon style={{color: "rgba(0, 0, 0, 0.5)", height: 20, width: 20}} /></span>
                                      </div>
                                      <div className="share-img">
                                          <CardMedia>
                                            <img src="../../../img/dream.jpg" alt="" />
                                          </CardMedia>
                                      </div>
                                      <div className="account-operate">
                                        <div className="icon-oper">
                                          <IconFavoriteBorder style={iconStyles} />
                                          <IconComment style={iconStyles} />
                                          <IconNearMe style={iconStyles} />
                                          <IconTurnedInNot style={{position: "absolute", right: 0}} />
                                        </div>
                                        <div className="comment-oper">
                                          <ListItem
                                                style={{paddingTop: 3, paddingLeft: 27, paddingBottom: 3, fontSize: 13}}
                                                disabled={true}
                                                leftAvatar={
                                                  <IconFavorite style={{top: 5, left: 15, width: 12, height: 12}} />
                                                }
                                          >
                                            1000000赞
                                          </ListItem>
                                          <div className="per-comment">
                                            哈哈
                                          </div>
                                          <div className="all-comment">
                                            全部1005条评论
                                          </div>
                                          <div className="first-comment">
                                            第一条评论
                                          </div>
                                          <div className="second-comment">
                                            第二条评论
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="personal-msg">
                                        <Avatar src="../../../img/solo.jpg"
                                                size={30}
                                                style={style}
                                        />
                                        <span className="username">sergioramos</span>
                                        <span><MoreVertIcon style={{color: "rgba(0, 0, 0, 0.5)", height: 20, width: 20}} /></span>
                                      </div>
                                      <div className="share-img">
                                          <CardMedia>
                                            <img src="../../../img/dream.jpg" alt="" />
                                          </CardMedia>
                                      </div>
                                      <div className="account-operate">
                                        <div className="icon-oper">
                                          <IconFavoriteBorder style={iconStyles} />
                                          <IconComment style={iconStyles} />
                                          <IconNearMe style={iconStyles} />
                                          <IconTurnedInNot style={{position: "absolute", right: 0}} />
                                        </div>
                                        <div className="comment-oper">
                                          <ListItem
                                                style={{paddingTop: 3, paddingLeft: 27, paddingBottom: 3, fontSize: 13}}
                                                disabled={true}
                                                leftAvatar={
                                                  <IconFavorite style={{top: 5, left: 15, width: 12, height: 12}} />
                                                }
                                          >
                                            1000000赞
                                          </ListItem>
                                          <div className="per-comment">
                                            哈哈
                                          </div>
                                          <div className="all-comment">
                                            全部1005条评论
                                          </div>
                                          <div className="first-comment">
                                            第一条评论
                                          </div>
                                          <div className="second-comment">
                                            第二条评论
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="personal-msg">
                                        <Avatar src="../../../img/solo.jpg"
                                                size={30}
                                                style={style}
                                        />
                                        <span className="username">sergioramos</span>
                                        <span><MoreVertIcon style={{color: "rgba(0, 0, 0, 0.5)", height: 20, width: 20}} /></span>
                                      </div>
                                      <div className="share-img">
                                          <CardMedia>
                                            <img src="../../../img/dream.jpg" alt="" />
                                          </CardMedia>
                                      </div>
                                      <div className="account-operate">
                                        <div className="icon-oper">
                                          <IconFavoriteBorder style={iconStyles} />
                                          <IconComment style={iconStyles} />
                                          <IconNearMe style={iconStyles} />
                                          <IconTurnedInNot style={{position: "absolute", right: 0}} />
                                        </div>
                                        <div className="comment-oper">
                                          <ListItem
                                                style={{paddingTop: 3, paddingLeft: 27, paddingBottom: 3, fontSize: 13}}
                                                disabled={true}
                                                leftAvatar={
                                                  <IconFavorite style={{top: 5, left: 15, width: 12, height: 12}} />
                                                }
                                          >
                                            1000000赞
                                          </ListItem>
                                          <div className="per-comment">
                                            哈哈
                                          </div>
                                          <div className="all-comment">
                                            全部1005条评论
                                          </div>
                                          <div className="first-comment">
                                            第一条评论
                                          </div>
                                          <div className="second-comment">
                                            第二条评论
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="personal-msg">
                                        <Avatar src="../../../img/solo.jpg"
                                                size={30}
                                                style={style}
                                        />
                                        <span className="username">sergioramos</span>
                                        <span><MoreVertIcon style={{color: "rgba(0, 0, 0, 0.5)", height: 20, width: 20}} /></span>
                                      </div>
                                      <div className="share-img">
                                          <CardMedia>
                                            <img src="../../../img/dream.jpg" alt="" />
                                          </CardMedia>
                                      </div>
                                      <div className="account-operate">
                                        <div className="icon-oper">
                                          <IconFavoriteBorder style={iconStyles} />
                                          <IconComment style={iconStyles} />
                                          <IconNearMe style={iconStyles} />
                                          <IconTurnedInNot style={{position: "absolute", right: 0}} />
                                        </div>
                                        <div className="comment-oper">
                                          <ListItem
                                                style={{paddingTop: 3, paddingLeft: 27, paddingBottom: 3, fontSize: 13}}
                                                disabled={true}
                                                leftAvatar={
                                                  <IconFavorite style={{top: 5, left: 15, width: 12, height: 12}} />
                                                }
                                          >
                                            1000000赞
                                          </ListItem>
                                          <div className="per-comment">
                                            哈哈
                                          </div>
                                          <div className="all-comment">
                                            全部1005条评论
                                          </div>
                                          <div className="first-comment">
                                            第一条评论
                                          </div>
                                          <div className="second-comment">
                                            第二条评论
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </Tab> :
                              <Tab key={i} onClick={() => this.select(2)} icon={<IconSend />}>
                                <p className="test"><span>推荐用户</span><span>显示全部</span></p>
                                <SliderX imgSrcs={this.props.imgSrcs} />
                              </Tab>;
            return aCon;
          })
        }
      </Tabs>
    );
  }
}

TabsExampleIcon.defaultProps = {
  imgSrcs: [
              '../../../img/dream.jpg',
              '../../../img/solo.jpg',
              '../../../img/dream.jpg',
              '../../../img/solo.jpg',
              '../../../img/dream.jpg'
   ],
}

export default TabsExampleIcon;
