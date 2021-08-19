import {ADD_NEW_ROOM, DELETE_ROOM} from './types';

export const addNewRoom = (name) => ({type: ADD_NEW_ROOM, payload: name})
export const deleteRoom = (roomId) => ({type: DELETE_ROOM, payload: roomId})