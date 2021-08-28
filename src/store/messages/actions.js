import {ERROR, START, SUCCESS} from '../types';
import {ADD_MESSAGE_FB, COMPLETE_EDIT, START_EDIT} from './types';

export const addMessageFB = (messages) => ({type: ADD_MESSAGE_FB, payload: messages})
export const startAction = () => ({type: START})
export const successAction = () => ({type: SUCCESS})
export const errorAction = (error) => ({type: ERROR, payload: error})
export const startEdit = () => ({type: START_EDIT})
export const completeEdit = () => ({type: COMPLETE_EDIT})