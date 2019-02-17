import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import BottomNavigationExampleSimple from '../../Router/bottomNavigationExampleSimple';
import HomePage from '../../Router/homePage';
import Search from '../../Router/search';
import Add from '../../Router/add';
import Share from '../../Router/share';
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
import Comment from '../../Router/comment';
import HomeSend from '../../Router/homeSend';
import All from '../../Router/all';
import Single from '../../Router/single';
import Related from '../../Router/related';
import OnePhotoDetail from '../../Router/one-photo-detail';
import Swiper from '../home/components/swiper';
/*导入redux*/
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import PersistStore from '../../Redux/Store/Store';
import LocalData from '../../../js/localStorage';
import Gesture from '../../../js/gesture';

import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  // app首页加载预存apiUrl
  componentWillMount() {
    // http://bangth.com:8888/
    LocalData.setLocalData("pshareUrl", {prod: "", dev: "http://127.0.0.1:8888/"});
    Gesture.listenAppCancelButton();
  }

  render() {
        return  <Provider store={PersistStore.store}>
              <PersistGate loading={null} persistor={PersistStore.persistor}>
                <Router history={hashHistory}>
                  <Route path='/' component={BottomNavigationExampleSimple}>
                    <IndexRoute component={Swipe} />
                    <Route path='home' component={Swipe} />
                    <Route path='search' component={Search}>
                      <Route path='page' component={Page} />
                      <Route path='res' component={Swipe} />
                    </Route>
                    <Route path='add' component={Add} />
                    <Route path='share' component={Share} />
                    <Route path='favorites' component={Favorites} />
                    <Route path='peason' component={Peason} />
                    <Route path='newNews' component={HomeSend} />
                    <Route path='peaDetail' component={PeasonDetail}>
                      <IndexRoute component={All} />
                      <Route path='all' component={All} />
                      <Route path='single' component={Single} />
                    </Route>
                    <Route path='one_photo_detail' component={OnePhotoDetail} />
                    <Route path='related' component={Related} />
                    <Route path='comment' component={Comment} />
                  </Route>
                </Router>
              </PersistGate>
            </Provider>
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('material-home')
);
