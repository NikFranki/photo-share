import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import createLogger from 'redux-logger'
import thunkMiddle from 'redux-thunk'
import todoApp from '../Reducer/Index'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, todoApp)

let store = createStore(
  persistedReducer,
  applyMiddleware(
      thunkMiddle,
      createLogger
  )
)
let persistor = persistStore(store)
const ps = { store, persistor }

export default ps
