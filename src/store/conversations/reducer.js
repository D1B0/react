import {ADD_NEW_ROOM} from './types';

const initialState = {
    rooms: [{title: "room1"},
        {title: "room2"}]
}
export const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_ROOM:
            return {
                ...state,
                rooms: [...state.rooms, {title: `room${state.rooms.length + 1}`}]
            }
        default:
            return state
    }
}