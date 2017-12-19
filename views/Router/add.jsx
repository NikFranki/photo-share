import React, { Component } from 'react';
import { fetchPosts } from '../Redux/Action/Index'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';
import Axios from 'axios'
import {fetchItems} from '../Redux/Action/Index'
import * as TodoActionCreators from '../Redux/Action/Index';
import CustomDialog from '../material/home/components/custom-dialog'
import DropDown from '../material/home/components/drop-down'
import '../Style/add.less'


class Add extends Component {
    constructor(props) {
        super(props);
        this.axiosRequest = this.axiosRequest.bind(this);
        this.imgsSrc = [ // 图片地址切换
            [ // 图库获取的图片
                '../../../img/solo.jpg',
                '../../../img/solo.jpg',
                '../../../img/solo.jpg',
                '../../../img/solo.jpg',
                '../../../img/solo.jpg',
                '../../../img/solo.jpg',
                '../../../img/solo.jpg',
                '../../../img/solo.jpg',
                '../../../img/solo.jpg',
                '../../../img/solo.jpg',
                '../../../img/solo.jpg',
                '../../../img/solo.jpg',
                '../../../img/solo.jpg',
                '../../../img/solo.jpg',
            ],
            [ // 视频获取的资源
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
            ],
            [ // WeiXin获取的图片
                '../../../img/America.jpg',
                '../../../img/America.jpg',
                '../../../img/America.jpg',
                '../../../img/America.jpg',
                '../../../img/America.jpg',
                '../../../img/America.jpg',
                '../../../img/America.jpg',
                '../../../img/America.jpg',
                '../../../img/America.jpg',
                '../../../img/America.jpg',
                '../../../img/America.jpg',
                '../../../img/America.jpg',
                '../../../img/America.jpg',
                '../../../img/America.jpg',
            ],
            [ // tieba获取的资源
                '../../../img/madrid.jpg',
                '../../../img/madrid.jpg',
                '../../../img/madrid.jpg',
                '../../../img/madrid.jpg',
                '../../../img/madrid.jpg',
                '../../../img/madrid.jpg',
                '../../../img/madrid.jpg',
                '../../../img/madrid.jpg',
                '../../../img/madrid.jpg',
                '../../../img/madrid.jpg',
                '../../../img/madrid.jpg',
                '../../../img/madrid.jpg',
                '../../../img/madrid.jpg',
                '../../../img/madrid.jpg',
            ],
            [ // Sgame获取的图片
                '../../../img/Shore.jpg',
                '../../../img/Shore.jpg',
                '../../../img/Shore.jpg',
                '../../../img/Shore.jpg',
                '../../../img/Shore.jpg',
                '../../../img/Shore.jpg',
                '../../../img/Shore.jpg',
                '../../../img/Shore.jpg',
                '../../../img/Shore.jpg',
                '../../../img/Shore.jpg',
                '../../../img/Shore.jpg',
                '../../../img/Shore.jpg',
                '../../../img/Shore.jpg',
                '../../../img/Shore.jpg',
            ],
            [ // Screenshots获取的资源
                '../../../img/ramos.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos.jpg',
            ],
        ];
        this.dropDownList = ['图库', '视频', 'WeiXin', 'tieba', 'Sgame', 'Screenshots'];
        this.boundActionCreators = bindActionCreators(TodoActionCreators, this.props.dispatch); // 绑定actioncreator, 并dispatch action
        this.flag = false;
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchPosts('reactjs'));
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

    handleResIndex = (index) => {
        this.flag = !this.flag;
        this.boundActionCreators.pictureCut(index);
    }

    render() {
        const { dispatch, curImgSrcIndex } = this.props;
        console.log(hashHistory);

        return (
            <div className="publish">
                <header>
                    {/*<span className="name">{this.dropDownList[curImgSrcIndex]}</span>*/}
                    <DropDown list={this.dropDownList} onResIndex={this.handleResIndex} selectItem={this.dropDownList[curImgSrcIndex]} />
                    <span onClick={() => hashHistory.push('/home')} className="go-on">继续</span>
                </header>
                <main style={{height: document.documentElement.clientHeight - 56 - 75 + 'px'}}>
                    <img src="../../../img/taylor.jpg" alt="big-image" style={{width: document.documentElement.clientWidth, height: document.documentElement.clientWidth}} />
                    <div className="images-list" style={{height: document.documentElement.clientHeight - 56 - 75 - document.documentElement.clientWidth}}>
                        <div className="images-item" >
                            {
                                this.imgsSrc[curImgSrcIndex].map((item, index) => <a key={index} style={{width: document.documentElement.clientWidth/4, height: document.documentElement.clientWidth/4}}><img src={item} alt="tt"/></a>)
                            }
                        </div>
                    </div>
                </main>
                <footer>图库</footer>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos,
        items: state.items.receivePosts,
        curImgSrcIndex: state.resPictureCurIndex
    }
}

export default connect(mapStateToProps)(Add);
