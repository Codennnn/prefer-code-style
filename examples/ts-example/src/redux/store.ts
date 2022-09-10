import { combineReducers, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import app from './app/app-reducer'
import user from './user/user-reducer'

const appPersistConfig = {
  key: 'app',
  storage,
  blacklist: ['routes'],
}

const userPersistConfig = {
  key: 'user',
  storage,
}

const rootReducer = combineReducers({
  app: persistReducer(appPersistConfig, app),
  user: persistReducer(userPersistConfig, user),
})

export const store = createStore(rootReducer)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const persistor = persistStore(store)
