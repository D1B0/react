import {ADD_NEW_ROOM, DELETE_ROOM, EDIT_ROOM} from '../conversations';
import {
    ADD_NEW_MESSAGE,
    CLEAR_MESSAGE_TEXT,
    COMPLETE_EDIT_MESSAGE, DELETE_MESSAGE,
    HANDLE_CHANGE_TEXT_MESSAGE,
    START_EDIT_MESSAGE
} from './types';

const initialState = {
    isEdit: false,
    textMessage: '',
    editId: "",
    messages: {
        room1: [],
        room2: []
    }
}
export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_ROOM:
            return {
                ...state, messages: {
                    ...state.messages, [action.payload]: []
                }
            }
        case HANDLE_CHANGE_TEXT_MESSAGE: {
            return {
                ...state, textMessage: action.payload.text
            }
        }
        case CLEAR_MESSAGE_TEXT: {
            return {
                ...state, isEdit: false, textMessage: "", editId: ""
            }
        }
        case START_EDIT_MESSAGE: {
            return {
                ...state,
                isEdit: true,
                textMessage: state.messages[action.payload.roomId].find (el => el.id === action.payload.id).message,
                editId: action.payload.id
            }
        }
        case COMPLETE_EDIT_MESSAGE: {
            return {
                ...state, messages: {
                    ...state.messages, [action.payload.roomId]: state.messages[action.payload.roomId].map (el => {
                        if (el.id === state.editId) {
                            {
                                return {
                                    ...el, message: state.textMessage
                                }
                            }
                        }
                        return el
                    })
                }
            }
        }
        case ADD_NEW_MESSAGE: {
            if (action.payload.author === "Bot") {
                return {
                    ...state, messages: {
                        ...state.messages, [action.payload.roomId]: [...state.messages[action.payload.roomId], {
                            id: new Date ().getTime (),
                            author: action.payload.author,
                            message: action.payload.message
                        }]
                    }
                }
            }
            return {
                ...state, messages: {
                    ...state.messages, [action.payload.roomId]: [...state.messages[action.payload.roomId], {
                        id: new Date ().getTime (),
                        author: action.payload.author,
                        message: state.textMessage
                    }]
                }
            }
        }
        case DELETE_MESSAGE: {
            return {
                ...state, messages: {
                    ...state.messages, [action.payload.roomId]: state.messages[action.payload.roomId].filter (
                        el => el.id !== action.payload.id
                    )
                }
            }
        }
        case DELETE_ROOM: {
            return Object.entries (state).reduce ((acc, [key, value]) => {
                if (key !== `${action.payload}`) acc[key] = value
                return acc
            }, {})
        }
        case EDIT_ROOM: {
            return Object.entries (state).reduce ((acc, [key, value]) => {
                if (key === action.payload.room) {
                    key = action.payload.nameRoom
                }
                acc[key] = value
                return acc
            }, {})
        }
        default:
            return state
    }
}