import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import thunkMiddle from 'redux-thunk'
import { Router, Route, hashHistory } from 'react-router'
import App from './containers/App'
import todoApp from './reducers'
// import LocalStorge from './localStorage'

// LocalStorge.setLocalData('haha', [123]);

// const loggerMiddleware = createLogger();

/**
 * 记录所有被发起的action以及产生的新的state
*/
const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}

/**
 * 在state更新完成和listener被通知之后发送崩溃报告
*/
const crashReportter = store => next => action => {
    try {
        return next(action)
    } catch(err) {
        console.error('Caught an exception!', err);
        Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        })
        throw err
    }
}

/**
 * 让你可以发起一个函数来替代 action。
 * 这个函数接收 `dispatch` 和 `getState` 作为参数。
 *
 * 对于（根据 `getState()` 的情况）提前退出，或者异步控制流（ `dispatch()` 一些其他东西）来说，这非常有用。
 *
 * `dispatch` 会返回被发起函数的返回值。
 */
const thunk = store => next => action =>
  typeof action === 'function' ?
    action(store.dispatch, store.getState) :
    next(action)

/**
 * 中间件thunk源码
*/
function applyMiddlewares() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

let store = createStore(
    todoApp,
    // applyMiddleware() 告诉createStore() 如何处理中间件
    applyMiddleware(
        thunkMiddle,
        createLogger
    )
)

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/(:filter)" component={App} />
    </Router>
    {/*<App />*/}
  </Provider>,
  rootElement
)
