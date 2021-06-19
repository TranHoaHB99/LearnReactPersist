import {
    configureStore
} from '@reduxjs/toolkit';
import postReducer from '../features/Post/postSlice';
import authReducer from '../features/Auth/authSlice'
import logger from 'redux-logger';
import {
    getDefaultMiddleware
} from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const rootReducer = {
    posts: postReducer,
    auth: authReducer,
}
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
export const persistor = persistStore(store)
export default store