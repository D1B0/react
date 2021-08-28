import axios from 'axios';
import {getGistError, getGistStart, getGistSuccess} from './actions';

const API_URL_PUBLIC = "https://dog.ceo/api/breed/hound/images/random/30"
export const getGists = () => async (dispatch) => {
    try {
        dispatch (getGistStart ())
        const {data} = await axios.get (API_URL_PUBLIC)
        dispatch (getGistSuccess (data.message))
    } catch (error) {
        dispatch (getGistError (error))
    }
}


