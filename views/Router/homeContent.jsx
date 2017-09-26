import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListItem from 'material-ui/List/ListItem';
import { Avatar, FontIcon } from 'material-ui';
import {CardMedia} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import IconComment from 'material-ui/svg-icons/communication/comment';
import IconNearMe from 'material-ui/svg-icons/maps/near-me';
import IconTurnedInNot from 'material-ui/svg-icons/action/turned-in-not';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconFavorite from 'material-ui/svg-icons/action/favorite';
import SliderX from '../material/home/components/sliderX';
import Dialog from '../material/home/components/dialog';
import { Link } from 'react-router';

const style = {
  margin: 5
};
const styles = {
  link: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
  }
}
const iconStyles = {
  marginRight: 15,
};

const imgSrcArr =  [
              '../../../img/dream.jpg',
              '../../../img/solo.jpg',
              '../../../img/dream.jpg',
              '../../../img/solo.jpg',
              '../../../img/dream.jpg'
];

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
  }

  handleOpenDialog() {
    this.refs.tipse.setState({open: true})
  }

  render() {
    return  <MuiThemeProvider>
                <div className="home-content" style={{"height": document.body.clientHeight-40-56}}>
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
                                <span className="username"><Link style={styles.link} to='/peaDetail'>sergioramos</Link></span>
                                <span onClick={this.handleOpenDialog}><MoreVertIcon style={{color: "rgba(0, 0, 0, 0.5)", height: 20, width: 20}} /></span>
                            </div>
                            <div className="share-img">
                                <CardMedia>
                                    <img src="../../../img/dream.jpg" alt="" />
                                </CardMedia>
                            </div>
                            <div className="account-operate">
                            <div className="icon-oper">
                              <Checkbox
                                style={{display: "inline-block", width: "inherit"}}
                                checkedIcon={<ActionFavorite />}
                                uncheckedIcon={<ActionFavoriteBorder />}
                              />
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
                            <span className="username"><Link style={styles.link} to='/peaDetail'>sergioramos</Link></span>
                            <span onClick={this.handleOpenDialog}><MoreVertIcon style={{color: "rgba(0, 0, 0, 0.5)", height: 20, width: 20}} /></span>
                          </div>
                          <div className="share-img">
                              <CardMedia>
                                <img src="../../../img/dream.jpg" alt="" />
                              </CardMedia>
                          </div>
                          <div className="account-operate">
                            <div className="icon-oper">
                              <Checkbox
                                style={{display: "inline-block", width: "inherit"}}
                                checkedIcon={<ActionFavorite />}
                                uncheckedIcon={<ActionFavoriteBorder />}
                              />
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
                        <div className="recommend">
                          <p><label>推荐用户</label><label>显示全部</label></p>
                          <SliderX imgSrcs={imgSrcArr} />
                        </div>
                    </ul>
                <Dialog ref="tipse" />
                </div>
            </MuiThemeProvider>;
  }
}

export default HomeContent;
