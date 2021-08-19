import {ADD_NEW_ROOM, DELETE_ROOM} from '../conversations/types';
import {ADD_NEW_MESSAGE} from './types';

const initialState = {
    room1: [],
    room2: []
}
export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_ROOM:
            return {
                ...state, [action.payload]: []
            }
        case ADD_NEW_MESSAGE: {
            return {...state, [action.payload.roomId]: [...state[action.payload.roomId], {...action.payload.message}]}
        }
        case DELETE_ROOM: {
            return Object.entries (state).reduce ((acc, [key, value]) => {
                if (key !== `${action.payload}`) acc[key] = value
                return acc
            })
        }
        default:
            return state
    }
}