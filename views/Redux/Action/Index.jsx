import Axios from 'axios'

export const ADD_TODO = 'ADD_TODO'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const FETCHITEMS = 'FETCHITEMS'
export const OPEN_DIALOG = 'OPEN_DIALOG'
export const CLOSE_DIALOG = 'CLOSE_DIALOG'
export const ADD_COMMENT = 'ADD_COMMENT'
export const OPEN_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'


export const addTodo = text => {
    return {
        type: ADD_TODO,
        text
    }
}

export const fetchItems = items => {
    return {
        type: FETCHITEMS,
        items
    }
}

const requestPosts = subreddit => {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

const receivePosts = (subreddit, json) => {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receiveAt: Date.now()
    }
}

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

/*打开弹框*/
export const openDialog = dialogContents => {
    return {
        type: OPEN_DIALOG,
        show: true,
        dialogContents
    }
}

/*关闭弹框*/
export const closeDialog = () => {
    return {
        type: CLOSE_DIALOG,
        show: false
    }
}

/*添加评论*/
export const addComment = (originalComment, newComment) => {
    originalComment.push(newComment)
    return {
        type: ADD_COMMENT,
        wholeComment: originalComment
    }
}

/*上移操作*/
export const openDrawer = () => {
    return {
        type: OPEN_DRAWER,
        show: true
    }
}

/*下移操作*/
export const closeDrawer = () => {
    return {
        type: CLOSE_DRAWER,
        show: false
    }
}
