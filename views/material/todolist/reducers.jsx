import { combineReducers } from 'redux'
import {
  ADD_TODO, COMPLETE_TODO,
  SET_VISIBILITY_FILTER, DELETE_TODO,
  SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
  SEARCH_TODO, REQUEST_POSTS,
  RECEIVE_POSTS, VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters

/* todolist 可见性选择 */
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

/* 处理todolist显示的数组 */
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: !state[action.index].completed
        }),
        ...state.slice(action.index + 1)
      ]
    case DELETE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index+1)
      ]
    case SEARCH_TODO:
      return [
        ...action.todos
      ]
    default:
      return state
  }
}

/* 选择下拉框的选项 */
function selectedSubreddit(state = 'reactjs', action) {
  switch(action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state;
  }
}

/* 处理post对象 */
function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch(action.type) {
    case INVALIDATE_SUBREDDIT:
      return {...state, didInvalidate: true}
    case REQUEST_POSTS:
      return {...state, isFetching: true, didInvalidate: false}
    case RECEIVE_POSTS:
      return {...state,
        isFetching: false, didInvalidate: false,
        items: action.posts, lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

/* 返回对应选项对应的value(返回值是一个object) */
function postsBySubreddit(state = { }, action) {
  switch(action.type) {
    case INVALIDATE_SUBREDDIT:
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return {...state, [action.subreddit]: posts(state[action.subreddit], action)}
    default:
      return state
  }
}

const initialState = {
  receivePosts: {}
}

/* 单纯存储数据 */
function postsData(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_POSTS:
      return {...state, receivePosts: action.posts};
    default:
      return state;
  }
}

/* 把用到的reducer全部连接在一起，传递给store，store下发给容器组件 */
const todoApp = combineReducers({
  visibilityFilter,
  todos,
  postsData,
  postsBySubreddit,
  selectedSubreddit
})

export default todoApp
