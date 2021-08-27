import {GET_GISTS_ERROR, GET_GISTS_START, GET_GISTS_SUCCESS} from './types';

const initialState = {
    gists: [],
    pending: false,
    error: null
}
export const gistReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_START: {
            return {...state, pending: true}
        }
        case GET_GISTS_SUCCESS: {
            return {
                ...state, gists: [...action.payload], pending: false
            }
        }
        case GET_GISTS_ERROR: {
            return {
                ...state, error: action.payload, pending: false
            }
        }
        default:
            return state
    }
}