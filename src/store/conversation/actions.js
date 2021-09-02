import {ERROR, START, SUCCESS} from '../types';
import {ADD_ROOM, DELETE_ROOM, EDIT_ROOM, GET_CONVERSATIONS, HANDLE_CHANGE_VALUE, SHOW_MODAL_WINDOW} from './types';

export const startAction = () => ({type: START})
export const successAction = () => ({type: SUCCESS})
export const errorAction = (error) => ({type: ERROR, payload: error})
export const getConversation = (conversations) => ({type: GET_CONVERSATIONS, payload: conversations})
export const showModalWindow = () => ({type: SHOW_MODAL_WINDOW})
export const handleChangeValue = (room, text) => ({type: HANDLE_CHANGE_VALUE, payload: {room, text}})
export const addRoom = (name) => ({type: ADD_ROOM, payload: name})
export const deleteRoom = (name) => ({type: DELETE_ROOM, payload: name})
export const editRoom = (oldName, newName) => ({type: EDIT_ROOM, payload: {oldName, newName}})

