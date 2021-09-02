import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import {roomReducer} from './conversation';
import {gistReducer} from './gists';
import {messageReducer} from './messages';
import {logger, report} from './middlewares';
import {profileReducer} from './profile';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['conversations', 'messages'],
    whitelist: ['profile']
}
export const reducer = combineReducers ({
    profile: profileReducer,
    conversations: roomReducer,
    messages: messageReducer,
    gists: gistReducer
})
const persistreducer = persistReducer (persistConfig,
    reducer
)
export const store = createStore (
    persistreducer
    , compose (applyMiddleware (thunk, logger, report)
    ))
export const persistore = persistStore (store)