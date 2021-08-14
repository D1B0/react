import {ADD_NEW_ROOM, DELETE_ROOM} from './types';

const initialState = {
    rooms: [{title: "room1"},
        {title: "room2"}]
}
export const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_ROOM:
            return {
                ...state,
                rooms: [...state.rooms, {title: action.payload}]
            }
        case DELETE_ROOM: {
            return {
                ...state, rooms: state.rooms.filter (el => el.title !== action.payload)
            }
        }
        default:
            return state
    }
}