import {SET_NAME_PROFILE, TOGGLE_VISIBLE_PROFILE} from './types';

export const visibleProfile = () => ({type: TOGGLE_VISIBLE_PROFILE})
export const setNameProfile = (name) => ({type: SET_NAME_PROFILE, payload: name})