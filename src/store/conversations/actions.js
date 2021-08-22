import {ADD_NEW_ROOM, DELETE_ROOM, EDIT_ROOM, SHOW_ADDER, SHOW_ADDER_WITH_NAME} from './types';

export const addNewRoom = (name) => ({type: ADD_NEW_ROOM, payload: name})
export const deleteRoom = (roomId) => ({type: DELETE_ROOM, payload: roomId})
export const showAdder = () => ({type: SHOW_ADDER})
export const showAdderWithName = (roomId) => ({type: SHOW_ADDER_WITH_NAME, payload: roomId})
export const editRoom = (roomId, newName) => ({type: EDIT_ROOM, payload: {room: roomId, nameRoom: newName}})