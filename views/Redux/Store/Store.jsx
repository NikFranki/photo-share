import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddle from 'redux-thunk'
import todoApp from '../Reducer/Index'

let store = createStore(
    todoApp,
    applyMiddleware(
        thunkMiddle,
        createLogger
    )
)

export default store
