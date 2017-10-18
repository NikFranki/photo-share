import React, { Component } from 'react';
import { Link } from 'react-router';
import { Avatar, FontIcon } from 'material-ui';
import {CardMedia} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconComment from 'material-ui/svg-icons/communication/comment';
import IconNearMe from 'material-ui/svg-icons/maps/near-me';
import Bookmark from 'material-ui/svg-icons/action/bookmark';
import IconTurnedInNot from 'material-ui/svg-icons/action/turned-in-not';
import ListItem from 'material-ui/List/ListItem';
import IconFavorite from 'material-ui/svg-icons/action/favorite';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Dialog from '../material/home/components/dialog';
import DrawerSlide from '../material/home/components/drawer-slide';
import { connect } from 'react-redux';
/*导入action*/
import {
  openDialog, closeDialog,
  openDrawer, closeDrawer,
  likeNums
} from '../Redux/Action/Index';

const style = {
  margin: 5
};

const styles = {
  link: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
  },
}

const iconStyles = {
  marginRight: 15,
};

export class Single extends Component {
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
        const { doWithDialog, doWithDrawer } = this.props;
        const scrollListMsg = [
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
            avatar: '../../../img/ramos_avatar.jpg',
            postman: 'sergioramos',
            postpicture: '../../../img/ramos2.jpg',
            favournums: '1000000',
            postmanstatemen: '哈哈',
            comments: '1005',
            followerscomments: ['第一条评论', '第二条评论']
          },{
            id: 4,
            avatar: '../../../img/ramos_avatar.jpg',
            postman: 'sergioramos',
            postpicture: '../../../img/ramos3.jpg',
            favournums: '1000000',
            postmanstatemen: '哈哈',
            comments: '1005',
            followerscomments: ['第一条评论', '第二条评论']
          },{
            id: 5,
            avatar: '../../../img/ramos_avatar.jpg',
            postman: 'sergioramos',
            postpicture: '../../../img/ramos4.jpg',
            favournums: '1000000',
            postmanstatemen: '哈哈',
            comments: '1005',
            followerscomments: ['第一条评论', '第二条评论']
          }
        ];
        return  <div className="single">
                    <ul className="scroll-list">
                        {
                          scrollListMsg.map((item, key) => {
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
                          })
                        }
                    </ul>
                    <DrawerSlide open={doWithDrawer.show} handleClose={() => this.props.dispatch(closeDrawer())} />
                    <Dialog show={doWithDialog.show} content={doWithDialog.dialogContents} onHandleOpenDialog={() => this.props.dispatch(openDialog(['举报...', '复制网址', '打开发帖通知']))} onHandleCloseDialog={() => this.props.dispatch(closeDialog())} />
                </div>
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    doWithDialog: state.doWithDialog, //返回弹框state
    doWithDrawer: state.doWithDrawer,  //返回上拉的div状态
    countLikeNums: state.countLikeNums, //赞数统计
  }
}

export default connect(mapStateToProps)(Single);
