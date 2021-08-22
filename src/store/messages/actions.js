import {
    ADD_NEW_MESSAGE,
    CLEAR_MESSAGE_TEXT,
    COMPLETE_EDIT_MESSAGE, DELETE_MESSAGE,
    HANDLE_CHANGE_TEXT_MESSAGE,
    START_EDIT_MESSAGE
} from './types';

export const addMessage = (author, roomId, message) => ({type: ADD_NEW_MESSAGE, payload: {author, roomId, message}})
export const handleChangeTextMessage = (text, roomId) => ({type: HANDLE_CHANGE_TEXT_MESSAGE, payload: {text, roomId}})
export const clearMessageText = () => ({type: CLEAR_MESSAGE_TEXT})
export const startEditMessage = (id, roomId) => ({type: START_EDIT_MESSAGE, payload: {id, roomId}})
export const completeEditMessage = (id, roomId) => ({type: COMPLETE_EDIT_MESSAGE, payload: {id, roomId}})
export const deleteMessage = (id, roomId) => ({type: DELETE_MESSAGE, payload: {id, roomId}})