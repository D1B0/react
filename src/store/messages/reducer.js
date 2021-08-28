import {ERROR, START, SUCCESS} from '../types';
import {ADD_MESSAGE_FB, COMPLETE_EDIT, START_EDIT} from './types';

const initialState = {
    isEdit: false,
    textMessage: '',
    editId: "",
    pending: false,
    error: null,
    messages: {}
}
export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_FB: {
            return {
                ...state, messages: {...state.messages, ...action.payload}
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
        case START_EDIT: {
            return {
                ...state, isEdit: true
            }
        }
        case COMPLETE_EDIT: {
            return {
                ...state, isEdit: false
            }
        }
        default:
            return state
    }
}