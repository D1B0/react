import {SET_NAME_PROFILE, TOGGLE_VISIBLE_PROFILE} from './types';

const initialState = {
    visibleProfile: false,
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
                visibleProfile: !state.visibleProfile
            }
        case SET_NAME_PROFILE:
            return {
                ...state,
                name: state.visibleProfile.name = name
            }
        default:
            return state
    }
}