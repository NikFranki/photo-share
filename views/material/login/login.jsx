import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './login-show';
import { Provider } from 'react-redux';
import store from '../../Redux/Store/Store';

const Logins = () => <Provider store={store}>
              <Login />
            </Provider>

ReactDOM.render(<Logins />, document.getElementById('material-login'));
