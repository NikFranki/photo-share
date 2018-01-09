import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Axios from 'axios';

import './google_font.css';
import './materialize.css';
import './style.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleDone = this.handleDone.bind(this);
        this.getLastHref = this.getLastHref.bind(this);
        this.state = {
            avatarName: '上传头像'
        };
    }

    componentDidMount() {
        $(document).on('click', '#first-name-input', function(){
            $('#first-name').next().addClass("active");
        });

        $(document).on('click', '#email-input', function(){
            $('#email').next().addClass("active");
        });

        $(document).on('click', '#bio-input', function(){
            $('#bio').next().addClass("active");
        });

        $(document).on('click', '#password-input', function(){
            $('#password').next().addClass("active");
        });

        $(document).on('click', '#repassword-input', function(){
            $('#repassword').next().addClass("active");
        });

        let self = this;
        document.body.addEventListener("click", function(e) {
            if (e.target.parentNode.parentNode.className !== 'form-register' || e.target !== self.refs.firstName || (e.target.childNodes[0] && (e.target.childNodes[0] !== self.refs.firstName)) ||
                e.target !== self.refs.lastName || (e.target.childNodes[0] && (e.target.childNodes[0] !== self.refs.lastName)) ||
                e.target !== self.refs.emailName || (e.target.childNodes[0] && (e.target.childNodes[0] !== self.refs.emailName)) ||
                e.target !== self.refs.bio || (e.target.childNodes[0] && (e.target.childNodes[0] !== self.refs.bio)) ||
                e.target !== self.refs.passwordName || (e.target.childNodes[0] && (e.target.childNodes[0] !== self.refs.passwordName)) ||
                e.target !== self.refs.rePasswordName || (e.target.childNodes[0] && (e.target.childNodes[0] !== self.refs.rePasswordName))
            ) {
                if (!$('#first-name').val()) {
                    $('#first-name').next().removeClass("active");
                }
                if (!$('#email').val()) {
                    $('#email').next().removeClass("active");
                }
                if (!$('#bio').val()) {
                    $('#bio').next().removeClass("active");
                }
                if (!$('#password').val()) {
                    $('#password').next().removeClass("active");
                }
                if (!$('#repassword').val()) {
                    $('#repassword').next().removeClass("active");
                }
            }
        }, false);
    }

    getLastHref = () => {
        let index = location.href.indexOf("views");
        return location.href.substr(0, index+6);
    }

    handleAvatar = () => {
        const avatar = $('#avatar');
        if (avatar[0].files.length !== 0) {
            this.setState({
                avatarName: avatar[0].files[0].name
            })
        }
    }

    handleDone = () => {
        let firstName = $("#first-name").val(),
            password = $('#password').val(),
            repassword = $('#repassword').val(),
            email = $('#email').val(),
            bio = $('#bio').val(),
            avatar = $('#avatar');

        if (!(firstName.length >=1 && firstName.length < 10)) {
            console.log('名字请限制在 1-10 个字符');
            return;
        } else if (password.length < 6) {
            console.log('密码至少 6 个字符');
            return;
        } else if (password !== repassword) {
            console.log('两次输入密码不一致');
            return;
        } else if (email.length === 0) {
            console.log('邮箱不能为空');
            return;
        } else if (!(bio.length >= 1 && bio.length <= 30)) {
            console.log('个人简介请限制在 1-30 个字符');
            return;
        } else if (avatar[0].files.length === 0) {
            console.log('头像不能为空');
            return;
        } else {
            $('.done').addClass('success-done');
        }

        // http://localhost:8888/signup
        Axios.post('http://192.168.11.95:8888/signup', {
                username: firstName,
                password: password,
                repassword: repassword,
                email: email,
                bio: bio,
                avatar: avatar[0].files[0].name
        }).then(response => {
            console.log(response)
            location.href = this.getLastHref()+"material/login/login.html";
        })
    }

    handleCancel = () => {
        $('#first-name').val("");
        $('#email').val("");
        $('#bio').val("");
        $('#password').val("");
        $('#repassword').val("");
    }

    render() {
        return (
            <div className="container">
                <div id="signup">
                    <div className="signup-screen">
                        <div className="space-bot text-center">
                            <h1>Sign up</h1>
                            <div className="divider"></div>
                        </div>
                        <div className="form-register">
                            <div id="first-name-input" className="input-field col s6">
                                <input ref="firstName" id="first-name" type="text" className="validate" />
                                <label>username</label>
                            </div>
                            <div id="password-input" className="input-field col s6">
                                <input ref="passwordName" id="password" type="password" name="password" className="validate" />
                                <label>password</label>
                            </div>
                            <div id="repassword-input" className="input-field col s6">
                                <input ref="rePasswordName" id="repassword" type="password" name="repassword" className="validate" />
                                <label>repeat-password</label>
                            </div>
                            <div id="email-input" className="input-field col s6">
                                <input ref="emailName" id="email" type="email" name="email" className="validate" />
                                <label>email</label>
                            </div>
                            <div id="bio-input" className="input-field col s6">
                                <input ref="bio" id="bio" type="text" className="validate" />
                                <label>bio</label>
                            </div>
                            {/*<div id="gender-input" className="input-field col s6">
                                <input ref="gender" id="gender-input" type="text" className="validate" />
                                <label>gender</label>
                            </div>*/}
                            <div id="avatar-input" className="input-field col s6">
                                <label>avatar</label>
                                <div id="avatar-upload" className="avatar-upload">{this.state.avatarName}
                                    <input type="file" name="avatar" ref="avatar" className="avatar-input" id="avatar" onChange={this.handleAvatar} />
                                </div>
                            </div>
                            <div className="space-top text-center">
                                <button onClick={this.handleDone} className="waves-effect waves-light btn done">
                                    <i className="material-icons left">Done</i>
                                </button>
                                <button onClick={this.handleCancel} type="button" className="waves-effect waves-light btn cancel">
                                    <i className="material-icons left">Cancel</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Register />, document.getElementById('material-register'));
