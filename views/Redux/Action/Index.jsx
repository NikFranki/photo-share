import Axios from 'axios'
import { createAction, createActions  } from 'redux-actions';

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const FETCHITEMS = 'FETCHITEMS'
export const OPEN_DIALOG = 'OPEN_DIALOG'
export const CLOSE_DIALOG = 'CLOSE_DIALOG'
export const ADD_COMMENT = 'ADD_COMMENT'
export const OPEN_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'
export const LIKE_NUMS = 'LIKE_NUMS'
export const TABSELECT = 'TABSELECT'
export const ISENABLETOSLIDE = 'ISENABLETOSLIDE'
export const RECOMMENDLIST = 'RECOMMENDLIST'
export const RECOMMENDARRAY = 'RECOMMENDARRAY'
export const SEARCHPLACEHOLD = 'SEARCHPLACEHOLD'
export const SEARCHSHOW = 'SEARCHSHOW'
export const PICTURECUT = 'PICTURECUT'
export const HOMESCROLLLISTMSG = 'HOMESCROLLLISTMSG'
export const ADDSELECTIMGINDEX = 'ADDSELECTIMGINDEX'
export const ADDLOADING = 'ADDLOADING'

export const fetchItems = items => {
    return {
        type: FETCHITEMS,
        items
    }
}

/*抓取数据*/
export const fetchPosts = subreddit => {
    return dispatch => {
        dispatch(requestPosts(subreddit))

        return Axios.get(`http://www.subreddit.com/r/${subreddit}.json`)
            .then(
                response => dispatch(receivePosts(subreddit, response.data))
            )
            .catch(
                error => console.log(error)
            )
    }
}

/*nav tab点击*/
export const tabSelect = createAction(TABSELECT, index => ({index}))

/*search 是否允许滑动，防止无限触发state*/
export const isEnableToSlide = createAction(ISENABLETOSLIDE, flag => (flag))

/*推荐list 数组*/
export const recommendSelect = createAction(RECOMMENDLIST, list => (list))

/*推荐数组（原始）*/
export const recommendArray = createAction(RECOMMENDARRAY, arr => arr)

/*search bar提示文字*/
export const searchPlacehold = createAction(SEARCHPLACEHOLD, searchStr => ({searchStr}))

/*搜索列表展示内容切换*/
export const searchShow = createAction(SEARCHSHOW, flag => ({flag}))

/*发布模块图片切换*/
export const pictureCut = createAction(PICTURECUT, index => ({index}))

/*添加主页滚动区域信息*/
export const HomeScrollListMsg = createAction(HOMESCROLLLISTMSG)

/*发布功能选择具体类别下的图片index*/
export const AddSelectImgIndex = createAction(ADDSELECTIMGINDEX, index => ({index}))

/*loading动画状态*/
export const AddLoadingStatus = createAction(ADDLOADING, status => ({status}))

/**
 * @description [利用createActions创建action]
 * @author [franki]
 * @time 20180315
 */
export const {
    openDialog, // 打开弹框
    closeDialog, // 关闭弹框
    openDrawer, // 上移操作
    closeDrawer, // 下移操作
    requestPosts, // 请求post数据
    receivePosts, // 接收post数据
    addComment, // 添加评论
    likeNums, // 赞数操作
} = createActions({
    OPEN_DIALOG: dialogContents => ({show: true, dialogContents}),
    CLOSE_DIALOG: () => ({show: false}),
    OPEN_DRAWER: () => ({show: true}),
    CLOSE_DRAWER: () => ({show: false}),
    REQUEST_POSTS: subreddit => ({subreddit}),
    RECEIVE_POSTS:  (subreddit, json) => ({
        subreddit,
        posts: json.data.children.map(child => child.data),
        receiveAt: Date.now()}),
    ADD_COMMENT: (originalComment, newComment) => {
        originalComment.push(newComment)
        return {wholeComment: originalComment}
    },
    LIKE_NUMS: (islike, nums) => ({islike, nums}),
})
