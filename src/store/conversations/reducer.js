import {ADD_NEW_ROOM, DELETE_ROOM, EDIT_ROOM, SHOW_ADDER, SHOW_ADDER_WITH_NAME} from './types';

const initialState = {
    nameRoom: '',
    addConversationModalShow: false,
    rooms: [{title: "room1"},
        {title: "room2"}]
}
export const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ADDER: {
            return {
                ...state, nameRoom: '', addConversationModalShow: !state.addConversationModalShow
            }
        }
        case SHOW_ADDER_WITH_NAME: {
            return {
                ...state, nameRoom: action.payload, addConversationModalShow: !state.addConversationModalShow
            }
        }
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
        case EDIT_ROOM: {
            return {
                ...state, nameRoom: '', rooms: state.rooms.map (el => {
                    if (el.title === action.payload.room) {
                        return {title: action.payload.nameRoom}
                    }
                    return el
                })
            }
        }
        default:
            return state
    }
}