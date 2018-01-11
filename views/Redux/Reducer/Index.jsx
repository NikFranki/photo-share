import { combineReducers } from 'redux'
import {
    ADD_TODO, REQUEST_POSTS,
    RECEIVE_POSTS, FETCHITEMS,
    OPEN_DIALOG, CLOSE_DIALOG,
    ADD_COMMENT, OPEN_DRAWER,
    CLOSE_DRAWER, LIKE_NUMS,
    TABSELECT, RECOMMENDLIST,
    SEARCHPLACEHOLD, SEARCHSHOW,
    PICTURECUT, HOMESCROLLLISTMSG,
    ADDSELECTIMGINDEX, ADDLOADING
} from '../Action/Index'

const todos = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

const initialState = {receivePosts: []}
const items = (state = initialState, action) => {
    switch(action.type) {
        case FETCHITEMS:
            return {...state, receivePosts: action.items}
        default:
            return state
    }
}

const posts = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch(action.type) {
        case REQUEST_POSTS:
            return {...state, isFetching: true}
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                items: action.posts
            }
        default:
            return state
    }
}

const postsBySubreddit = (state = {}, action) => {
    switch(action.type) {
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
            return {...state, [action.subreddit]: posts(state[action.subreddit], action)}
        default:
            return state
    }
}

const doWithDialog = (state = {show: false, dialogContents: []}, action) => {
    switch(action.type) {
        case OPEN_DIALOG:
        case CLOSE_DIALOG:
            return {...state, show: action.show, dialogContents: action.dialogContents}
        default:
            return state
    }
}

const addComment = (state = {wholeComment: []}, action) => {
    switch(action.type) {
        case ADD_COMMENT:
            return {...state, wholeComment: action.wholeComment}
        default:
            return state
    }
}

const doWithDrawer = (state = {show: false}, action) => {
    switch(action.type) {
        case OPEN_DRAWER:
        case CLOSE_DRAWER:
            return {
                ...state,
                show: action.show,
            }
        default:
            return state
    }
}

const countLikeNums = (state = {likeNums: 0}, action) => {
    switch(action.type) {
        case LIKE_NUMS:
            if (action.islike) {
                return {
                    ...state, likeNums: action.nums+1
                }
            } else {
                return {
                    ...state, likeNums: action.nums-1
                }
            }
        default:
            return state
    }
}

const doWithTabSelect = (state = {index: 0}, action) => {
    switch(action.type) {
        case TABSELECT:
            return {...state, index: action.index}
        default:
            return state
    }
}

const recommendArr = (state = [{name0: false}, {name1: false}], action) => {
    switch(action.type) {
        case RECOMMENDLIST:
            return [...action.arr]
        default:
            return state
    }
}

const searchBarStr = (state = "搜索", action) => {
    switch(action.type) {
        case SEARCHPLACEHOLD:
            return action.searchStr
        default:
            return state
    }
}

const isShowSearch = (state = false, action) => {
    switch(action.type) {
        case SEARCHSHOW:
            return action.flag
        default:
            return state
    }
}

const resPictureCurIndex = (state = 0, action) => {
    switch(action.type) {
        case PICTURECUT:
            return action.index
        default:
            return state
    }
}

const resHomeScrollListMsg = (state = [], action) => {
    switch(action.type) {
        case HOMESCROLLLISTMSG:
            return [...action.arr]
        default:
            return state
    }
}

const resAddSelectImgIndex = (state = 0, action) => {
    switch(action.type) {
        case ADDSELECTIMGINDEX:
            return action.index
        default:
            return state
    }
}

const resLoadingStatus = (state = false, action) => {
    switch(action.type) {
        case ADDLOADING:
            return action.status
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos,
    items,
    postsBySubreddit,
    doWithDialog,
    addComment,
    doWithDrawer,
    countLikeNums,
    doWithTabSelect,
    recommendArr,
    searchBarStr,
    isShowSearch,
    resPictureCurIndex,
    resHomeScrollListMsg,
    resAddSelectImgIndex,
    resLoadingStatus
})

export default todoApp
