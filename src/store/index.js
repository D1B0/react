import {combineReducers, createStore} from 'redux';
import {roomReducer} from './conversations';
import {messageReducer} from './messages';
import {profileReducer} from './profile';

export const store = createStore (
    combineReducers ({
        profile: profileReducer,
        conversations: roomReducer,
        messages: messageReducer
    })
)