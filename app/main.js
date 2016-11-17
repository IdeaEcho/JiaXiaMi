import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {configureStore} from './store/configure-store';
import {Router, Route, Link, hashHistory, browserHistory} from 'react-router';//路由控制
import {syncHistoryWithStore, analyticsService} from 'react-router-redux';

// import rootSaga from './sagas/index';
// import {drop, initData, showViewDistribute} from './actions/db';
import Home from './containers/client/Home';//首页

// const store = configureStore();
// //路由渲染页面
// const history = syncHistoryWithStore(hashHistory, store);
//初始化数据库
// store.dispatch(initData())

const Main = () => (
  <Provider >
    <Home />
  </Provider>
);

export default Main;
