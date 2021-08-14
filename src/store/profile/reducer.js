import {SET_NAME_PROFILE, TOGGLE_VISIBLE_PROFILE} from './types';

const initialState = {
    visibleProfileUser: false,
    user: {
        id: new Date ().getTime (),
        name: ''
    }
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_VISIBLE_PROFILE:
            return {
                ...state,
                visibleProfileUser: !state.visibleProfileUser
            }
        case SET_NAME_PROFILE:
            return {...state, user: {...state.user, id: new Date ().getTime (), name: action.payload}}
        default:
            return state
    }
}