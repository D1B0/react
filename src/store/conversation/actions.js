import {ERROR, START, SUCCESS} from '../types';
import {COMPLETE_CHAT_EDIT, GET_CONVERSATIONS, HANDLE_CHANGE_VALUE, SHOW_MODAL_WINDOW, START_CHAT_EDIT} from './types';

export const startAction = () => ({type: START})
export const successAction = () => ({type: SUCCESS})
export const errorAction = (error) => ({type: ERROR, payload: error})
export const getConversation = (conversations) => ({type: GET_CONVERSATIONS, payload: conversations})
export const showModalWindow = () => ({type: SHOW_MODAL_WINDOW})
export const handleChangeValue = (room, text) => ({type: HANDLE_CHANGE_VALUE, payload: {room, text}})

