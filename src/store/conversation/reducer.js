import {START, SUCCESS, ERROR} from '../types';
import {GET_CONVERSATIONS, HANDLE_CHANGE_VALUE, SHOW_MODAL_WINDOW} from './types';

const initialState = {
    addConversationModalShow: false,
    pending: false,
    error: null,
    rooms: []
}
export const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL_WINDOW: {
            return {
                ...state, nameRoom: '', addConversationModalShow: !state.addConversationModalShow
            }
        }
        case START: {
            return {
                ...state, pending: true
            }
        }
        case SUCCESS: {
            return {
                ...state, pending: false
            }
        }
        case ERROR: {
            return {
                ...state, pending: false, error: action.payload
            }
        }
        case GET_CONVERSATIONS: {
            return {
                ...state, rooms: action.payload
            }
        }
        case HANDLE_CHANGE_VALUE: {
            return {
                ...state,
                rooms: state.rooms.map (el => {
                    if (el.title === action.payload.room) {
                        el.value = action.payload.text
                    }
                    return el
                })
            }
        }
        default:
            return state
    }
}