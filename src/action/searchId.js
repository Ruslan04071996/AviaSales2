import {FETCH_REQUEST_ID ,FETCH_RECEIVE_ID,FETCH_ERROR_ID} from '../constants';

export const requestId = () => {
    return {
        type: FETCH_REQUEST_ID
    }
}
export const receiveId = (payload) => {
    return {
        type: FETCH_RECEIVE_ID,
        status: 'success',
        payload
    }
}
export const errorId = (error) => {
    return {
        type: FETCH_ERROR_ID,
        status: 'error',
        error
    }
}