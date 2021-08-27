import {GET_GISTS_ERROR, GET_GISTS_START, GET_GISTS_SUCCESS} from './types';

export const getGistStart = () => ({type: GET_GISTS_START})
export const getGistSuccess = (gists) => ({type: GET_GISTS_SUCCESS, payload: gists})
export const getGistError = (error) => ({type: GET_GISTS_ERROR, payload: error})