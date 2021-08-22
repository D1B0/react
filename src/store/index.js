import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import {roomReducer} from './conversations';
import {gistReducer} from './gists';
import {messageReducer} from './messages';
import {botAnswer, logger, report} from './middlewares';
import {profileReducer} from './profile';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['conversations', 'messages'],
    whitelist: ['profile']
}
export const store = createStore (
    persistReducer (persistConfig,
        combineReducers ({
            profile: profileReducer,
            conversations: roomReducer,
            messages: messageReducer,
            gists: gistReducer
        })), compose (
        applyMiddleware (thunk, logger, report, botAnswer),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()
    ))
export const persistore = persistStore (store)