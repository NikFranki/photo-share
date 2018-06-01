import { combineReducers } from 'redux'
import { handleAction, handleActions, combineActions } from 'redux-actions'
import {
    REQUEST_POSTS,
    RECEIVE_POSTS, FETCHITEMS,
    OPEN_DIALOG, CLOSE_DIALOG,
    ADD_COMMENT, OPEN_DRAWER,
    CLOSE_DRAWER, LIKE_NUMS,
    TABSELECT, ISENABLETOSLIDE,
    RECOMMENDLIST, RECOMMENDARRAY,
    SEARCHPLACEHOLD, SEARCHSHOW,
    PICTURECUT, HOMESCROLLLISTMSG,
    ADDSELECTIMGINDEX, ADDLOADING
} from '../Action/Index'

const initialState = {receivePosts: []}
const items = (state = initialState, action) => {
    switch(action.type) {
        case FETCHITEMS:
            return {...state, receivePosts: action.items}
        default:
            return state
    }
}

/**
 * @Author   Franki
 * @DateTime 2018-03-15
 * @desc     [处理评论数据]
 * @param    {Object}   state  [对象数据]
 * @param    {[type]}   action [action数据]
 * @return   {[type]}          [action数据]
 */
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
                items: action.payload.posts
            }
        default:
            return state
    }
}

/**
 * @Author   Franki
 * @DateTime 2018-03-15
 * @desc     [请求/接收post数据]
 * @param    {[type]}   {                 [combineActions(REQUEST_POSTS, RECEIVE_POSTS)](state, action [action 触发type]
 * @return   {[type]}      [state数据]
 */
const postsBySubreddit = handleActions({
    [combineActions(REQUEST_POSTS, RECEIVE_POSTS)](state, action) {
        return {...state, [action.payload.subreddit]: posts(state[action.payload.subreddit], action)}
    }
}, {})

/**
 * @Author   Franki
 * @DateTime 2018-03-15
 * @desc     [打开/关闭弹框]
 * @param    {[type]}   {                 [combineActions(OPEN_DIALOG, CLOSE_DIALOG)](state, action) [action 触发type]
 * @return   {[type]}      [弹框state数据]
 */
const doWithDialog = handleActions({
    // 以键值形式创建reducer
    // OPEN_DIALOG: (state, action) =>
    // ({
    //     ...state,
    //     show: action.payload.show,
    //     dialogContents: action.payload.dialogContents
    // }),
    // CLOSE_DIALOG: (state, action) =>
    // ({
    //     ...state,
    //     show: action.payload.show,
    // }),

    // 以数组的形式创建reducer
    // [OPEN_DIALOG](state, action) {
    //     return {
    //         ...state,
    //         show: action.payload.show,
    //         dialogContents: action.payload.dialogContents
    //     }
    // },
    // [CLOSE_DIALOG](state, action) {
    //     return {
    //         ...state,
    //         show: action.payload.show
    //     }
    // }

    // 将多个reducer结合起来
    [combineActions(OPEN_DIALOG, CLOSE_DIALOG)](state, action) {
        return {
            ...state,
            show: action.payload.show,
            dialogContents: action.payload.dialogContents
        }
    }
}, {show: false, dialogContents: []})

// 处理一个单独的action用handleAction
/**
 * @Author   Franki
 * @DateTime 2018-03-15
 * @desc     [添加评论]
 * @param    {[type]}   ADD_COMMENT [action类型]
 * @param    {[type]}   [用于完成动作]
 * @return   {[type]}   [object]
 */
const addComment = handleAction(ADD_COMMENT, (state, action) => ({
    ...state, wholeComment: action.payload.wholeComment
}), {wholeComment: []})

/**
 * @Author   Franki
 * @DateTime 2018-03-15
 * @desc     [上拉/下拉操作]
 * @param    {[type]}   {                 [combineActions(OPEN_DRAWER, CLOSE_DRAWER)](state, action) [action 触发type]
 * @return   {[type]}      [上拉/下拉state数据]
 */
const doWithDrawer = handleActions({
    [combineActions(OPEN_DRAWER, CLOSE_DRAWER)](state, action) {
        return {
            ...state,
            show: action.payload.show
        }
    }
}, {show: false})

/**
 * @Author   Franki
 * @DateTime 2018-03-15
 * @desc     [赞数统计]
 * @param    {[type]}   LIKE_NUMS [类型]
 * @param    {[type]}   (state,   action)
 * @return   {[type]}             [对象]
 */
const countLikeNums = handleAction(LIKE_NUMS, (state, action) => {
    if (action.payload.islike) {
        return {
            ...state, likeNums: action.payload.nums+1
        }
    } else {
        return {
            ...state, likeNums: action.payload.nums-1
        }
    }
}, {likeNums: 0})

const doWithTabSelect = handleAction(TABSELECT, (state, action) => ({
    ...state, index: action.payload.index
}), {index: 0})

const isEnableToSlide = handleAction(ISENABLETOSLIDE, (state, action) => { return action.payload}, true)

/**
 * @Author   Franki
 * @DateTime 2018-06-01
 * @desc     [推荐列表]
 * @param    {[type]}   RECOMMENDARRAY [description]
 * @param    {[type]}   [description]
 * @return   {[type]}   [数组]
 */
const recommendArray = handleAction(RECOMMENDARRAY, (state, action) => (
   [...action.payload]
), [{name0: false}, {name1: false}, {name2: false}, {name3: false}, {name4: false}])

/**
 * @Author   Franki
 * @DateTime 2018-03-15
 * @desc     [推荐列表]
 * @param    {[type]}   RECOMMENDLIST [description]
 * @param    {[type]}   [description]
 * @return   {[type]}   [数组]
 */
const recommendArr = handleAction(RECOMMENDLIST, (state, action) => (
   [...action.payload]
), [{name0: false}, {name1: false}])

/**
 * @Author   Franki
 * @DateTime 2018-03-15
 * @desc     [搜索栏文字切换]
 * @param    {[type]}   SEARCHPLACEHOLD [description]
 * @param    {[type]}                   [description]
 * @return   {[type]}                   [description]
 */
const searchBarStr = handleAction(SEARCHPLACEHOLD, (state, action) => (
    action.payload.searchStr
), "搜索")

/**
 * @Author   Franki
 * @DateTime 2018-03-15
 * @desc     [显示搜索页面]
 * @param    {[type]}   SEARCHSHOW [description]
 * @param    {[type]}              [description]
 * @return   {[type]}              [description]
 */
const isShowSearch = handleAction(SEARCHSHOW, (state, action) => (
    action.payload.flag
), false)

/**
 * @Author   Franki
 * @DateTime 2018-03-15
 * @desc     [获取图片当前index]
 * @param    {[type]}   PICTURECUT [description]
 * @param    {[type]}              [description]
 * @return   {[type]}              [description]
 */
const resPictureCurIndex = handleAction(PICTURECUT, (state, action) =>(
    action.payload.index
), 0)

/**
 * @Author   Franki
 * @DateTime 2018-03-15
 * @desc     [首页图片列表信息]
 * @param    {[type]}   HOMESCROLLLISTMSG [description]
 * @param    {[type]}                     [description]
 * @return   {[type]}                     [description]
 */
const resHomeScrollListMsg = handleAction(HOMESCROLLLISTMSG, (state, action) => ([...action.payload]), [])

/**
 * @Author   Franki
 * @DateTime 2018-03-15
 * @desc     [选择图片index]
 * @param    {[type]}   ADDSELECTIMGINDEX [description]
 * @param    {[type]}   (state,           action        [description]
 * @return   {[type]}                     [description]
 */
const resAddSelectImgIndex = handleAction(ADDSELECTIMGINDEX, (state, action) => (
    action.payload.index
), 0)

/**
 * @Author   Franki
 * @DateTime 2018-03-15
 * @desc     [loading加载状态]
 * @param    {[type]}   ADDLOADING [description]
 * @param    {[type]}              [description]
 * @return   {[type]}              [description]
 */
const resLoadingStatus = handleAction(ADDLOADING, (state, action) => (action.payload.status), false)

const todoApp = combineReducers({
    items,
    postsBySubreddit,
    doWithDialog,
    addComment,
    doWithDrawer,
    countLikeNums,
    doWithTabSelect,
    isEnableToSlide,
    recommendArray,
    recommendArr,
    searchBarStr,
    isShowSearch,
    resPictureCurIndex,
    resHomeScrollListMsg,
    resAddSelectImgIndex,
    resLoadingStatus
})

export default todoApp
