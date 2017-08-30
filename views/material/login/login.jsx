import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './google_font.css';
import './style.css';

import $ from 'jquery';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: false,
        };
        this.ripple = this.ripple.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.getLastHref = this.getLastHref.bind(this);
    }

    componentDidMount() {
        //登录
        this.login();
        //登出
        this.logout();
    }

    getLastHref() {
        let index = location.href.indexOf("views");
        return location.href.substr(0, index+6);
    }

    login() {
        let _this = this;
        $(document).on("click", ".login__submit", function(e) {
            if (_this.state.animating) return;
            // _this.props.animating = true;
            _this.setState({animating: true});
            //回调函数的this(这个this就是点击所在节点和其上下文)
            var that = this;
            _this.ripple($(that), e);
            $(that).addClass("processing");
            setTimeout(function() {
              // $(that).addClass("success");
              setTimeout(function() {
                // $(".app").show();
                // $(".app").css("top");
                // $(".app").addClass("active");
                location.href = _this.getLastHref()+"material/home/home.html";
              }, _this.props.submitPhase2 - 70);
              setTimeout(function() {
                $(".login").hide();
                $(".login").addClass("inactive");
                _this.setState({animating: false});
                $(that).removeClass("success processing");
              }, _this.props.submitPhase2);
            }, _this.props.submitPhase1);
        });
    }

    logout() {
        let _this = this;
        $(document).on("click", ".app__logout", function(e) {
          if (_this.state.animating) return;
          $(".ripple").remove();
          _this.setState({animating: true});
          var that = this;
          $(that).addClass("clicked");
          setTimeout(function() {
            $(".app").removeClass("active");
            $(".login").show();
            $(".login").css("top");
            $(".login").removeClass("inactive");
          }, _this.props.logoutPhase1 - 120);
          setTimeout(function() {
            $(".app").hide();
            _this.setState({animating: false});
            $(that).removeClass("clicked");
          }, _this.props.logoutPhase1);
        });
    }

    ripple(elem, e) {
      $(".ripple").remove();
      var elTop = elem.offset().top,
          elLeft = elem.offset().left,
          x = e.pageX - elLeft,
          y = e.pageY - elTop;
      var $ripple = $("<div class='ripple'></div>");
      $ripple.css({top: y, left: x});
      elem.append($ripple);
    }

    render() {
        return (
                <div className="cont">
                    <div className="demo">
                        <div className="login">
                          <div className="login__check"></div>
                          <div className="login__form">
                            <div className="login__row">
                              <svg className="login__icon name svg-icon" viewBox="0 0 20 20">
                                <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
                              </svg>
                              <input type="text" className="login__input name" placeholder="Username"/>
                            </div>
                            <div className="login__row">
                              <svg className="login__icon pass svg-icon" viewBox="0 0 20 20">
                                <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
                              </svg>
                              <input type="password" className="login__input pass" placeholder="Password"/>
                            </div>
                            <button type="button" className="login__submit">Sign in</button>
                            <p className="login__signup">Don't have an account? &nbsp;<a>Sign up</a></p>
                          </div>
                        </div>
                        <div className="app">
                          <div className="app__top">
                            <div className="app__menu-btn">
                              <span></span>
                            </div>
                            <svg className="app__icon search svg-icon" viewBox="0 0 20 20">
                              <path d="M20,20 15.36,15.36 a9,9 0 0,1 -12.72,-12.72 a 9,9 0 0,1 12.72,12.72" />
                            </svg>
                            <p className="app__hello">Good Morning!</p>
                            <div className="app__user">
                              <img src="" alt="" className="app__user-photo" />
                              <span className="app__user-notif">3</span>
                            </div>
                            <div className="app__month">
                              <span className="app__month-btn left"></span>
                              <p className="app__month-name">March</p>
                              <span className="app__month-btn right"></span>
                            </div>
                          </div>
                          <div className="app__bot">
                            <div className="app__days">
                              <div className="app__day weekday">Sun</div>
                              <div className="app__day weekday">Mon</div>
                              <div className="app__day weekday">Tue</div>
                              <div className="app__day weekday">Wed</div>
                              <div className="app__day weekday">Thu</div>
                              <div className="app__day weekday">Fri</div>
                              <div className="app__day weekday">Sad</div>
                              <div className="app__day date">8</div>
                              <div className="app__day date">9</div>
                              <div className="app__day date">10</div>
                              <div className="app__day date">11</div>
                              <div className="app__day date">12</div>
                              <div className="app__day date">13</div>
                              <div className="app__day date">14</div>
                            </div>
                            <div className="app__meetings">
                              <div className="app__meeting">
                                <img src="" alt="" className="app__meeting-photo" />
                                <p className="app__meeting-name">Feed the cat</p>
                                <p className="app__meeting-info">
                                  <span className="app__meeting-time">8 - 10am</span>
                                  <span className="app__meeting-place">Real-life</span>
                                </p>
                              </div>
                              <div className="app__meeting">
                                <img src="" alt="" className="app__meeting-photo" />
                                <p className="app__meeting-name">Feed the cat!</p>
                                <p className="app__meeting-info">
                                  <span className="app__meeting-time">1 - 3pm</span>
                                  <span className="app__meeting-place">Real-life</span>
                                </p>
                              </div>
                              <div className="app__meeting">
                                <img src="" alt="" className="app__meeting-photo" />
                                <p className="app__meeting-name">FEED THIS CAT ALREADY!!!</p>
                                <p className="app__meeting-info">
                                  <span className="app__meeting-time">This button is just for demo ></span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="app__logout">
                            <svg className="app__logout-icon svg-icon" viewBox="0 0 20 20">
                              <path d="M6,3 a8,8 0 1,0 8,0 M10,0 10,12"/>
                            </svg>
                          </div>
                        </div>
                    </div>
                </div>
        );
    }
}

Login.defaultProps = {
    name: 'login',
    submitPhase1 : 1100,
    submitPhase2 : 400,
    logoutPhase1 : 800,
    // $login : $(".login"),

}


ReactDOM.render(<Login />, document.getElementById('material-login'));
