import {ADD_NEW_ROOM} from '../conversations/types';
import {ADD_NEW_MESSAGE} from './types';

const initialState = {
    room1: [],
    room2: []
}
export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_ROOM:
            return {
                ...state, [`room${Object.keys (state).length + 1}`]: []
            }
        case ADD_NEW_MESSAGE: {
            return {...state, [action.payload.roomId]: [...state[action.payload.roomId], {...action.payload.message}]}
        }
        default:
            return state
    }
}