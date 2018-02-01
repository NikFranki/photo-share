import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Axios from 'axios';
import LocalStorage from '../../../js/localStorage';
import $ from 'jquery';
import Dialog from '../home/components/dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './google_font.css';

/*导入action*/
import {
  openDialog, closeDialog
} from '../../Redux/Action/Index';

class LoginShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: false,
        };
        this.login = this.login.bind(this);
        this.getLastHref = this.getLastHref.bind(this);
    }

    componentDidMount() {
        //登录
        this.login();
    }

    getLastHref() {
        let index = location.href.indexOf("views");
        return location.href.substr(0, index+6);
    }

    login() {
        let _this = this;
        $(document).on("click", ".login__submit", function(e) {
          const name = _this.refs.username.value;
          const password = _this.refs.password.value;
            if (_this.state.animating) return;
            _this.setState({animating: true});
            //回调函数的this(这个this就是点击所在节点和其上下文)
            var that = this;
            $(that).addClass("processing");
            setTimeout(function() {
              setTimeout(function() {
                console.log('入参:', {
                    name: name,
                    password: password
                  });
                Axios({
                  method: 'post',
                  url: 'http://127.0.0.1:8888/signin',
                  data: {
                    name: name,
                    password: password
                  }
                }).then(response => {
                  console.log(response)
                  // 把登录信息存到本地
                  LocalStorage.setLocalData('ActiveUser', response.data.result);
                  if (response.data.code === 'ok') {
                    location.href = _this.getLastHref()+"material/home/home.html";
                    setTimeout(function() {
                      $(".login").hide();
                      $(".login").addClass("inactive");
                      _this.setState({animating: false});
                      $(that).removeClass("success processing");
                    }, _this.props.submitPhase2);
                  } else if (response.data.code === 'failure') {
                    console.log('登录失败');
                    _this.setState({animating: false});
                    $(that).removeClass("success processing");
                    setTimeout(() => _this.props.dispatch(openDialog(['用户名或密码错误，请重新输入'])), 500);
                  }
                }).catch(e => console.log(e));
              }, _this.props.submitPhase2 - 70);

            }, _this.props.submitPhase1);
        });
    }

    render() {
      const {
        doWithDialog
      } = this.props;

      return <MuiThemeProvider>
              <div className="cont">
                  <div className="demo">
                      <div className="login">
                        <div className="login__check"></div>
                        <div className="login__form">
                          <div className="login__row">
                            <svg className="login__icon name svg-icon" viewBox="0 0 20 20">
                              <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
                            </svg>
                            <input type="text" ref="username" className="login__input name" placeholder="Username"/>
                          </div>
                          <div className="login__row">
                            <svg className="login__icon pass svg-icon" viewBox="0 0 20 20">
                              <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
                            </svg>
                            <input type="password" ref="password" className="login__input pass" placeholder="Password"/>
                          </div>
                          <button type="button" className="login__submit">Sign in</button>
                          <p className="login__signup">Don't have an account? &nbsp;<a onClick={() => {location.href = this.getLastHref()+"material/register/register.html";}}>Sign up</a></p>
                        </div>
                      </div>
                  </div>
                  <Dialog
                    show={doWithDialog.show}
                    content={doWithDialog.dialogContents}
                    ok="确定"
                    cancel=""
                    onHandleOpenDialog={() => this.props.dispatch(openDialog(['举报...', '复制网址', '打开发帖通知']))}
                    onHandleCloseDialog={() => this.props.dispatch(closeDialog())}
                  />
              </div>
            </MuiThemeProvider>
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    doWithDialog: state.doWithDialog, //返回弹框state
  }
}

export default connect(mapStateToProps)(LoginShow);

LoginShow.defaultProps = {
    name: 'login',
    submitPhase1 : 1100,
    submitPhase2 : 400,
}

