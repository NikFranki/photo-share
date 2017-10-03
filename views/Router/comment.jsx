import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import Checkbox from 'material-ui/Checkbox';
import Axios from 'axios';
import { connect } from 'react-redux';
import {fetchPosts, fetchItems, addComment} from '../Redux/Action/Index';
import '../Style/comment.less';

const commentContent = [
    {
        id: '1',
        commentatorAvatar: '../../../img/solo.jpg',
        commentatorName: 'franki',
        comment: 'hi ramos',
        time: '2天'
    },{
        id: '2',
        commentatorAvatar: '../../../img/solo.jpg',
        commentatorName: 'franki',
        comment: 'hi ramos',
        time: '2天'
    },{
        id: '3',
        commentatorAvatar: '../../../img/solo.jpg',
        commentatorName: 'franki',
        comment: 'hi ramos',
        time: '2天'
    },{
        id: '4',
        commentatorAvatar: '../../../img/solo.jpg',
        commentatorName: 'franki',
        comment: 'hi ramos',
        time: '2天'
    },{
        id: '5',
        commentatorAvatar: '../../../img/solo.jpg',
        commentatorName: 'franki',
        comment: 'hi ramos',
        time: '2天'
    },{
        id: '6',
        commentatorAvatar: '../../../img/solo.jpg',
        commentatorName: 'franki',
        comment: 'hi ramos',
        time: '2天'
    },{
        id: '7',
        commentatorAvatar: '../../../img/solo.jpg',
        commentatorName: 'franki',
        comment: 'hi ramos',
        time: '2天'
    },{
        id: '8',
        commentatorAvatar: '../../../img/solo.jpg',
        commentatorName: 'franki',
        comment: 'hi ramos',
        time: '2天'
    },
]

class Comment extends Component {
    constructor(props) {
        super(props);
        this.axiosRequest = this.axiosRequest.bind(this);
        this.isEmpty = this.isEmpty.bind(this);
        this.handleAddMore = this.handleAddMore.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchPosts('reactjs'));
        // this.axiosRequest();
    }

    componentDidUpdate() {
        if (this.props.addComment.wholeComment.length > 0) {
            document.querySelector(".whole-comment").scrollTop = document.querySelector(".whole-comment").scrollHeight
        }
    }

    axiosRequest() {
      const self = this;
      Axios.get(`http://www.subreddit.com/r/reactjs.json`)
        .then(function (response) {
          self.props.dispatch(fetchItems(response.data.data.children))
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    handleAddMore() {
        const {dispatch} = this.props;
        dispatch(fetchPosts('reactjs'));
    }

    isEmpty(obj) {
        for (var key in obj) {
            return false;
        }
        return true;
    }

    render() {
        let commentContents = this.isEmpty(this.props.commentContents) ? [] : this.props.commentContents.reactjs.items;
        if (commentContents.length > 0) {
            commentContents = commentContent;
        }
        if (this.props.addComment.wholeComment.length > 0) {
            commentContents = this.props.addComment.wholeComment;
        }
        const styles = {
            wholeComment: {
                height: document.body.clientHeight-56-40,
            },
            circule: {
                display: "none"
            }
        }

        return (
                <MuiThemeProvider>
                    <div className="whole-comment" style={styles.wholeComment}>
                        <div className="self-comment">
                            <div className="left-area">
                                <Avatar
                                  src="../../../img/solo.jpg"
                                  size={30}
                                />
                            </div>
                            <div className="right-area">
                                <div className="comment-content">
                                    <div className="top">
                                        <label className="author">sergioramos</label>
                                        <div className="comment">
                                            Sunnday mood ...
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <label>1周</label>
                                        <label></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="add-comment">
                            <img onClick={this.handleAddMore} src="../../../img/add.svg" alt="" />
                            <CircularProgress style={styles.circule} />
                        </div>
                        <ul className="list-comment">
                            {
                                commentContents.map((item, key) => {
                                    return  <li key={item.id} ref={`li-${item.id}`}>
                                                <div className="self-comment">
                                                    <div className="left-area">
                                                        <Avatar
                                                          src={item.commentatorAvatar}
                                                          size={30}
                                                        />
                                                    </div>
                                                    <div className="right-area">
                                                        <div className="comment-content">
                                                            <div className="top">
                                                                <label className="author">{item.commentatorName}</label>
                                                                <div className="comment">
                                                                    {item.comment}
                                                                </div>
                                                                <div className="extra-area">
                                                                    <Checkbox
                                                                      checkedIcon={<img src="../../../img/red_love.svg" alt="pic" />}
                                                                      uncheckedIcon={<img src="../../../img/love.svg" alt="pic" />}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="bottom">
                                                                <label>{item.time}</label>
                                                                <label>回复{item.id}</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                })
                            }
                        </ul>
                        <div className="write-content">
                            <div className="send">
                                <img src="../../../img/send.svg" alt="send" />
                            </div>
                            <div className="write">
                                <input ref='input' type="text" placeholder="添加评论..." />
                            </div>
                            <div ref="enter" className="enter">
                                <img onClick={() => {
                                        this.refs.enter.style.opacity=".8";
                                        setTimeout(() => {
                                            this.refs.enter.style.background="blue";
                                            this.refs.enter.style.opacity=".5";
                                        }, 100)
                                        if(!this.refs.input.value.trim()) return;
                                        this.props.dispatch(addComment(commentContent, {
                                        id: commentContents.length+1,
                                        commentatorAvatar: '../../../img/solo.jpg',
                                        commentatorName: 'franki',
                                        comment: this.refs.input.value.trim() || 'hi ramos',
                                        time: '2天'
                                        }))
                                        this.refs.input.value = ""
                                    }
                                } src="../../../img/tick.svg" alt="enter" />
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        commentContents: state.postsBySubreddit,
        items: state.items.receivePosts,
        addComment: state.addComment
    }
}

export default connect(mapStateToProps)(Comment)
