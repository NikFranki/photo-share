import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListItem from 'material-ui/List/ListItem';
import { Avatar, FontIcon } from 'material-ui';
import {CardMedia} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import IconComment from 'material-ui/svg-icons/communication/comment';
import IconNearMe from 'material-ui/svg-icons/maps/near-me';
import IconTurnedInNot from 'material-ui/svg-icons/action/turned-in-not';
import Bookmark from 'material-ui/svg-icons/action/bookmark';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconFavorite from 'material-ui/svg-icons/action/favorite';
import SliderX from '../material/home/components/sliderX';
import Dialog from '../material/home/components/dialog';
import DrawerSlide from '../material/home/components/drawer-slide';
import { Link } from 'react-router';
import { connect } from 'react-redux';

/*导入action*/
import {
  openDialog, closeDialog,
  openDrawer, closeDrawer,
  likeNums
} from '../Redux/Action/Index';

import '../Style/home-content.less';

const style = {
  margin: 5
};

const styles = {
  link: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
  },
};

const iconStyles = {
  marginRight: 15,
};

const imgSrcArr =  [
              '../../../img/dream.jpg',
              '../../../img/solo.jpg',
              '../../../img/madrid.jpg',
              '../../../img/ramos.jpg',
              '../../../img/dream.jpg'
];

// 主页滚动区域卡片信息
window.scrollListMsg = [
  {
    id: 1,
    avatar: '../../../img/ramos_avatar.jpg',
    postman: 'sergioramos',
    postpicture: '../../../img/ramos.jpg',
    favournums: '1000000',
    postmanstatemen: '哈哈',
    comments: '1005',
    followerscomments: ['第一条评论', '第二条评论']
  },{
    id: 2,
    avatar: '../../../img/ramos_avatar.jpg',
    postman: 'sergioramos',
    postpicture: '../../../img/ramos1.jpg',
    favournums: '1000000',
    postmanstatemen: '哈哈',
    comments: '1005',
    followerscomments: ['第一条评论', '第二条评论']
  },{
    id: 3,
    recommend: '推荐用户',
    showall: '显示全部'
  },{
    id: 4,
    avatar: '../../../img/ramos_avatar.jpg',
    postman: 'sergioramos',
    postpicture: '../../../img/ramos2.jpg',
    favournums: '1000000',
    postmanstatemen: '哈哈',
    comments: '1005',
    followerscomments: ['第一条评论', '第二条评论']
  },{
    id: 5,
    avatar: '../../../img/ramos_avatar.jpg',
    postman: 'sergioramos',
    postpicture: '../../../img/ramos3.jpg',
    favournums: '1000000',
    postmanstatemen: '哈哈',
    comments: '1005',
    followerscomments: ['第一条评论', '第二条评论']
  },{
    id: 6,
    avatar: '../../../img/ramos_avatar.jpg',
    postman: 'sergioramos',
    postpicture: '../../../img/ramos4.jpg',
    favournums: '1000000',
    postmanstatemen: '哈哈',
    comments: '1005',
    followerscomments: ['第一条评论', '第二条评论']
  }
];

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(event, isInputChecked) {
      let islike, nums = this.props.countLikeNums.likeNums !== 0 ? this.props.countLikeNums.likeNums : 1000000;
      islike = isInputChecked ? true : false;
      this.props.dispatch(likeNums(islike, nums));
  }

  render() {
    const { doWithDialog, doWithDrawer, resHomeScrollListMsg } = this.props;
    console.log(this.props.resHomeScrollListMsg);

    let flag = false;
    window.scrollListMsg.map((value, key) => {
      if (value === resHomeScrollListMsg[0])  flag = true;
    });

    if (flag) { // 不需要更新组件
      console.log('主页列表数组不重新赋值');
    } else { // 需要更新组件
      window.scrollListMsg =  window.scrollListMsg.concat(resHomeScrollListMsg)
    }


    return  <MuiThemeProvider>
                <div className="home-content" style={{"height": document.documentElement.clientHeight-40-56}}>
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
                        {
                          window.scrollListMsg.map((item, key) => {
                            if (key === 2) {
                              return  <div key={item.id} className="recommend">
                                        <p><label>{item.recommend}</label><label>{item.showall}</label></p>
                                        <SliderX imgSrcs={imgSrcArr} />
                                      </div>
                            } else {
                              return  <li key={item.id}>
                                        <div className="personal-msg">
                                            <Link to="/peaDetail">
                                              <Avatar src={item.avatar}
                                                      size={30}
                                                      style={style}
                                              />
                                            </Link>
                                            <span className="username"><Link style={styles.link} to='/peaDetail'>{item.postman}</Link></span>
                                            <span onClick={() => this.props.dispatch(openDialog(['举报...', '复制网址', '打开发帖通知']))}><MoreVertIcon style={{color: "rgba(0, 0, 0, 0.5)", height: 20, width: 20}} /></span>
                                        </div>
                                        <div className="share-img">
                                            <CardMedia>
                                                <img src={item.postpicture} alt="" />
                                            </CardMedia>
                                        </div>
                                        <div className="account-operate">
                                        <div className="icon-oper">
                                          <Checkbox onCheck={this.handleCheck}
                                            style={{display: "inline-block", width: "inherit"}}
                                            checkedIcon={<ActionFavorite />}
                                            uncheckedIcon={<ActionFavoriteBorder />}
                                          />
                                          <a href="#/comment"><IconComment style={iconStyles} /></a>
                                          <IconNearMe onClick={() => this.props.dispatch(openDrawer())} style={iconStyles} />
                                          <span className="collect">
                                            <Checkbox
                                              style={{position: "absolute", right: 0}}
                                              checkedIcon={<Bookmark />}
                                              uncheckedIcon={<IconTurnedInNot />}
                                            />
                                          </span>
                                        </div>
                                        <div className="comment-oper">
                                            <ListItem
                                                style={{paddingTop: 3, paddingLeft: 27, paddingBottom: 3, fontSize: 13}}
                                                disabled={true}
                                                leftAvatar={
                                                  <IconFavorite style={{top: 5, left: 15, width: 12, height: 12}} />
                                                }
                                            >
                                            {this.props.countLikeNums.likeNums !== 0 ? this.props.countLikeNums.likeNums : 1000000}赞
                                            </ListItem>
                                            <div className="per-comment">
                                              {item.postmanstatemen}
                                            </div>
                                            <div className="all-comment">
                                              <a href="#/comment">全部{item.comments}条评论</a>
                                            </div>
                                            <div className="first-comment">
                                              {item.followerscomments[0]}
                                            </div>
                                            <div className="second-comment">
                                              {item.followerscomments[1]}
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                            }
                          })
                        }
                    </ul>
                <DrawerSlide open={doWithDrawer.show} handleClose={() => this.props.dispatch(closeDrawer())} />
                <Dialog show={doWithDialog.show} content={doWithDialog.dialogContents} onHandleOpenDialog={() => this.props.dispatch(openDialog(['举报...', '复制网址', '打开发帖通知']))} onHandleCloseDialog={() => this.props.dispatch(closeDialog())} />
                </div>
            </MuiThemeProvider>;
  }
}

HomeContent.propTypes = {

}

const mapStateToProps = (state, ownProps) => {
  return {
    resHomeScrollListMsg: state.resHomeScrollListMsg,
    doWithDialog: state.doWithDialog, //返回弹框state
    doWithDrawer: state.doWithDrawer,  //返回上拉的div状态
    countLikeNums: state.countLikeNums, //赞数统计
  }
}

export default connect(mapStateToProps)(HomeContent);
