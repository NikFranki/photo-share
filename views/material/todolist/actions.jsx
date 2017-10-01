import Axios from 'axios'
/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DELETE_TODO = 'DELETE_TODO';
export const SEARCH_TODO = 'SEARCH_TODO';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';


/*
 * 其它的常量
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }

// export function completeTodo(index) {
//   return { type: COMPLETE_TODO, index }
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }

// export function deleteTodo(index) {
//     return {type: DELETE_TODO, index}
// }

// export function searchTodo(todos) {
//     return {type: SEARCH_TODO, todos}
// }

/*
 * action creator函数
*/
function makeActionCreator(type, ...argNames) {
    return function(...args) {
        let action = { type }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        })
        // console.log(action);
        return action
    }
}

// {type: "ADD_TODO", text: "11"}
export const addTodo = makeActionCreator(ADD_TODO, 'text')

// {type: "COMPLETE_TODO", index: 0}
export const completeTodo = makeActionCreator(COMPLETE_TODO, 'index')

// {type: "SET_VISIBILITY_FILTER", filter: "SHOW_ALL"}
export const setVisibilityFilter = makeActionCreator(SET_VISIBILITY_FILTER, 'filter')

// {type: "DELETE_TODO", index: 0}
export const deleteTodo = makeActionCreator(DELETE_TODO, 'index')

// {type: "DELETE_TODO", index: 0}
export const searchTodo = makeActionCreator(SEARCH_TODO, 'todos')

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchPosts(subreddit) {

  // Thunk middleware 知道如何处理函数。
  // 这里把 dispatch 方法通过参数的形式传给函数，
  // 以此来让它自己也能 dispatch action。

  return function (dispatch) {

    // 首次 dispatch：更新应用的 state 来通知
    // API 请求发起了。

    dispatch(requestPosts(subreddit))

    // thunk middleware 调用的函数可以有返回值，
    // 它会被当作 dispatch 方法的返回值传递。

    // 这个案例中，我们返回一个等待处理的 promise。
    // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。

    return Axios.get(`http://www.subreddit.com/r/${subreddit}.json`)
      .then(function (response) {
        console.log(response.data);
        dispatch(receivePosts(subreddit, response.data))
      })
      .catch(function (error) {
        console.log(error);
      });

    // return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
    //   .then(response => response.json())
    //   .then(json =>

    //     // 可以多次 dispatch！
    //     // 这里，使用 API 请求结果来更新应用的 state。

    //     dispatch(receivePosts(subreddit, json))
    //   )

      // 在实际应用中，还需要
      // 捕获网络请求的异常。
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit));
    }
  }
}
