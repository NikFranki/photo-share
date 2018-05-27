import React, { Component } from 'react';
import '../../../Style/search-bar.less';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        searchImgs : ['../../../img/left_arrow.svg', '../../../img/search.svg'], // 搜索栏背景图
    }

    /*
    * 处理img点击
    */
    handleSearchImgClick = () => {
        if (this.props.onHandleImgClick) {
            this.props.onHandleImgClick(false);
        }
        if (!this.props.ischangeicon) { // 不切换图标
            return;
        }
        this.refs.searchInput.value = "";
        this.refs.delImgSrc.style.display = "none";
        this.refs.searchImgSrc.setAttribute('src', this.props.searchImgs[1]);
        this.refs.searchBar.style.boxShadow = "0 1px 0 #ddd";
    }

    /*
    * 删除点击事件
    */
    handleDelClick = () => {
        this.refs.searchInput.value = "";
        this.refs.delImgSrc.style.display = "none";
    }

    /**
    * 处理搜索输入点击
    */
    handleInputClick = () => {
        if (this.props.onHandleInputClick) {
            this.props.onHandleInputClick(true);
        }
        if (!this.props.ischangeicon) { // 不切换图标
            return;
        }
        this.refs.searchImgSrc.setAttribute('src', this.props.searchImgs[0]);
        this.refs.searchBar.style.boxShadow = "0 0 0";
    }

    /*
    * 处理输入事件
    */
    handleOnInput = () => {
        let input = this.refs.searchInput.value;
        if (input.length > 0) {
            this.refs.delImgSrc.style.display = "block";
        }
    }

    render() {
        const {
            placeholder,
            searchbarStyle
        } = this.props;
        const Style = {
            searchbarStyle: searchbarStyle || {
            }
        };

        return (
            <div ref="searchBar" className="search-bar" style={Style.searchbarStyle}>
                <img className="search-img" onClick={this.handleSearchImgClick} ref="searchImgSrc" src="../../../img/search.svg" alt="search" />
                <div className="search-input">
                    <input onInput={this.handleOnInput} onClick={this.handleInputClick} ref="searchInput" type="text" placeholder={placeholder} />
                </div>
                <img className="del-img" onClick={this.handleDelClick} ref="delImgSrc" src="../../../img/del.svg" alt="del" />
            </div>
        )
    }
}
