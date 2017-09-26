import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import BottomNavigationExampleSimple from '../../Router/bottomNavigationExampleSimple';
import HomePage from '../../Router/homePage';
import Search from '../../Router/search';
import Add from '../../Router/add';
import Favorites from '../../Router/favorites';
import Peason from '../../Router/peason';
import Page from '../../Router/page';
import Res from '../../Router/res';
import TabFirst from '../../Router/tabFirst';
import TabSecond from '../../Router/tabSecond';
import TabThird from '../../Router/tabThird';
import PhotoContent from '../../Router/photoContent';
import HomeContent from '../../Router/homeContent';
import SendContent from '../../Router/sendContent';
import NewNews from '../../Router/newNews';
import Swipe from '../../Router/swipe';
import PeasonDetail from '../../Router/peasonDetail';
import HomeSend from '../../Router/homeSend';

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
                  <Route path='res' component={Swipe} />
                </Route>
                <Route path='add' component={Add} />
                <Route path='favorites' component={Favorites} />
                <Route path='peason' component={Peason} />
                <Route path='newNews' component={HomeSend} />
                <Route path='peaDetail' component={PeasonDetail} />
              </Route>
            </Router>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('material-home')
);
