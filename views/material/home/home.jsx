import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';


import BottomNavigationExampleSimple from './components/bottomNavigationExampleSimple';
import HomePage from './components/homePage';
import Search from './components/search';
import Add from './components/add';
import Favorites from './components/favorites';
import Peason from './components/peason';
import Page from './components/page';
import Res from './components/res';
import TabFirst from './components/tabFirst';
import TabSecond from './components/tabSecond';
import TabThird from './components/tabThird';
import PhotoContent from './components/photoContent';
import HomeContent from './components/homeContent';
import SendContent from './components/sendContent';
import NewNews from './components/newNews';
import HomeSend from './homeSend';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return  <Router history={hashHistory}>
              <Route path='/' component={BottomNavigationExampleSimple}>
                <IndexRoute component={HomePage} />
                <Route path='home' component={HomePage}>
                  <Route path='tab1' component={PhotoContent} />
                  <Route path='tab2' component={HomeContent} />
                  <Route path='tab3' component={SendContent} />
                </Route>
                <Route path='search' component={Search}>
                  <Route path='page' component={Page} />
                  <Route path='res' component={Res} />
                </Route>
                <Route path='add' component={Add} />
                <Route path='favorites' component={Favorites} />
                <Route path='peason' component={Peason} />
                <NewNews path='newNews' component={HomeSend} />
              </Route>
            </Router>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('material-home')
);
