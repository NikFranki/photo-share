import React, { Component } from 'react';
import { fetchPosts } from '../Redux/Action/Index'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';
import LocalStorge from '../../js/localStorage';
import Axios from 'axios'
import {fetchItems} from '../Redux/Action/Index'
import * as TodoActionCreators from '../Redux/Action/Index';
import DropDown from '../material/home/components/drop-down'
import '../Style/add.less'


class Add extends Component {
    constructor(props) {
        super(props);
        this.axiosRequest = this.axiosRequest.bind(this);
        this.imgsSrc = [ // 图片地址切换
            [ // 图库获取的图片
                '../../../img/solo.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos1.jpg',
                '../../../img/ramos2.jpg',
                '../../../img/ramos3.jpg',
                '../../../img/ramos4.jpg',
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
                '../../../img/ramos.jpg',
                '../../../img/taylor.jpg',
                '../../../img/ramos1.jpg',
                '../../../img/taylor.jpg',
                '../../../img/ramos2.jpg',
                '../../../img/taylor.jpg',
                '../../../img/ramos3.jpg',
                '../../../img/taylor.jpg',
                '../../../img/ramos4.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
                '../../../img/taylor.jpg',
            ],
            [ // WeiXin获取的图片
                '../../../img/America.jpg',
                '../../../img/taylor.jpg',
                '../../../img/America.jpg',
                '../../../img/ramos.jpg',
                '../../../img/America.jpg',
                '../../../img/ramos1.jpg',
                '../../../img/America.jpg',
                '../../../img/ramos2.jpg',
                '../../../img/America.jpg',
                '../../../img/ramos.jpg',
                '../../../img/America.jpg',
                '../../../img/America.jpg',
                '../../../img/ramos.jpg',
                '../../../img/America.jpg',
            ],
            [ // tieba获取的资源
                '../../../img/madrid.jpg',
                '../../../img/ramos.jpg',
                '../../../img/madrid.jpg',
                '../../../img/ramos1.jpg',
                '../../../img/madrid.jpg',
                '../../../img/ramos2.jpg',
                '../../../img/madrid.jpg',
                '../../../img/ramos3.jpg',
                '../../../img/madrid.jpg',
                '../../../img/ramos4.jpg',
                '../../../img/madrid.jpg',
                '../../../img/ramos.jpg',
                '../../../img/madrid.jpg',
                '../../../img/madrid.jpg',
            ],
            [ // Sgame获取的图片
                '../../../img/Shore.jpg',
                '../../../img/taylor.jpg',
                '../../../img/Shore.jpg',
                '../../../img/ramos.jpg',
                '../../../img/Shore.jpg',
                '../../../img/ramos1.jpg',
                '../../../img/Shore.jpg',
                '../../../img/ramos2.jpg',
                '../../../img/Shore.jpg',
                '../../../img/ramos3.jpg',
                '../../../img/Shore.jpg',
                '../../../img/Shore.jpg',
                '../../../img/ramos4.jpg',
                '../../../img/Shore.jpg',
            ],
            [ // Screenshots获取的资源
                '../../../img/ramos.jpg',
                '../../../img/ramos1.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos2.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos3.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos4.jpg',
                '../../../img/ramos3.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos3.jpg',
                '../../../img/ramos.jpg',
                '../../../img/ramos3.jpg',
                '../../../img/ramos.jpg',
            ],
        ];
        this.dropDownList = ['图库', '视频', 'WeiXin', 'tieba', 'Sgame', 'Screenshots'];
        this.boundActionCreators = bindActionCreators(TodoActionCreators, this.props.dispatch); // 绑定actioncreator, 并dispatch action
        this.flag = false;
    }

    componentDidMount() {
        const {dispatch, curImgSrcIndex, selectImgIndex } = this.props;
        dispatch(fetchPosts('reactjs'));
        LocalStorge.setLocalData('publish-image-src', this.imgsSrc[curImgSrcIndex][selectImgIndex]);
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
        this.boundActionCreators.AddSelectImgIndex(0); // 更换了图片列表后，重置图片下标index
        LocalStorge.setLocalData('publish-image-src', this.imgsSrc[index][0]);
    }

    handleImgSrcIndex = (index) => {
        this.boundActionCreators.AddSelectImgIndex(index);
        LocalStorge.setLocalData('publish-image-src', this.imgsSrc[this.props.curImgSrcIndex][index]);
    }

    render() {
        const { dispatch, curImgSrcIndex, selectImgIndex } = this.props;

        return (
            <div className="publish">
                <header>
                    <DropDown list={this.dropDownList} onResIndex={this.handleResIndex} selectItem={this.dropDownList[curImgSrcIndex]} />
                    <span onClick={() => hashHistory.push('/share')} className="go-on">继续</span>
                </header>
                <main style={{height: document.documentElement.clientHeight - 56 - 75 + 'px'}}>
                    <img src={this.imgsSrc[curImgSrcIndex][selectImgIndex]} alt="big-image" style={{width: document.documentElement.clientWidth, height: document.documentElement.clientWidth}} />
                    <div className="images-list" style={{height: document.documentElement.clientHeight - 56 - 75 - document.documentElement.clientWidth}}>
                        <div className="images-item" >
                            {
                                this.imgsSrc[curImgSrcIndex].map((item, index) => <a onClick={() => this.handleImgSrcIndex(index)} key={index} style={{width: document.documentElement.clientWidth/4, height: document.documentElement.clientWidth/4}}><img src={item} alt="tt"/></a>)
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
        items: state.items.receivePosts,
        curImgSrcIndex: state.resPictureCurIndex, // 选择图片类别index
        selectImgIndex: state.resAddSelectImgIndex // 选择图片类别数组下的index
    }
}

export default connect(mapStateToProps)(Add);
