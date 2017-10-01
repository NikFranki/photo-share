import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import './google_font.css';
import './materialize.css';
import './style.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleDone = this.handleDone.bind(this);
        this.getLastHref = this.getLastHref.bind(this);
    }

    componentDidMount() {
        $(document).on('click', '#first-name-input', function(){
            $('#first-name').next().addClass("active");
        });

        $(document).on('click', '#last-name-input', function(){
            $('#last-name').next().addClass("active");
        });

        $(document).on('click', '#email-input', function(){
            $('#email').next().addClass("active");
        });

        $(document).on('click', '#password-input', function(){
            $('#password').next().addClass("active");
        });

        let self = this;
        document.body.addEventListener("click", function(e) {
            if (e.target !== self.refs.firstName || (e.target.childNodes[0] && (e.target.childNodes[0] !== self.refs.firstName)) ||
                e.target !== self.refs.lastName || (e.target.childNodes[0] && (e.target.childNodes[0] !== self.refs.lastName)) ||
                e.target !== self.refs.emailName || (e.target.childNodes[0] && (e.target.childNodes[0] !== self.refs.emailName)) ||
                e.target !== self.refs.passwordName || (e.target.childNodes[0] && (e.target.childNodes[0] !== self.refs.passwordName))
                ) {
                if (!$('#first-name').val()) {
                    $('#first-name').next().removeClass("active");
                }
                if (!$('#last-name').val()) {
                    $('#last-name').next().removeClass("active");
                }
                if (!$('#email').val()) {
                    $('#email').next().removeClass("active");
                }
                if (!$('#password').val()) {
                    $('#password').next().removeClass("active");
                }
            }
        }, false);
    }

    getLastHref() {
        let index = location.href.indexOf("views");
        return location.href.substr(0, index+6);
    }

    handleDone() {
        let firstName = $("#first-name").val(),
            lastName = $('#last-name').val(),
            email = $('#email').val(),
            password = $('#password').val();
        if (firstName && lastName && email && password) {
            $('.done').addClass('success-done');
            location.href = this.getLastHref()+"material/login/login.html";
        }
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
                        <form className="form-register" method="post" name="register">
                            <div id="first-name-input" className="input-field col s6">
                                <input ref="firstName" id="first-name" type="text" className="validate" />
                                <label for="first-name">First Name</label>
                            </div>
                            <div id="last-name-input" className="input-field col s6">
                                <input ref="lastName" id="last-name" type="text" className="validate" />
                                <label for="last-name">Last Name</label>
                            </div>
                            <div id="email-input" className="input-field col s6">
                                <input ref="emailName" id="email" type="email" name="email" className="validate" />
                                <label for="email">Email</label>
                            </div>
                            {/*<p className="alert alert-danger">Your email is invalid.</p>*/}
                            <div id="password-input" className="input-field col s6">
                                <input ref="passwordName" id="password" type="password" name="password" className="validate" />
                                <label for="password">Password</label>
                            </div>
                            {/*<p className="alert alert-danger">Your password must be at least 6 characters.</p>*/}
                            <div className="space-top text-center">
                                <button onClick={this.handleDone} className="waves-effect waves-light btn done">
                                    <i className="material-icons left">Done</i>
                                </button>
                                <button type="button" className="waves-effect waves-light btn cancel">
                                    <i className="material-icons left">Cancel</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Register />, document.getElementById('material-register'));
