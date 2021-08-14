import {ADD_NEW_ROOM, DELETE_ROOM} from './types';

export const addNewRoom = () => ({type: ADD_NEW_ROOM})
export const deleteRoom = (roomId) => ({type: DELETE_ROOM, payload: roomId})