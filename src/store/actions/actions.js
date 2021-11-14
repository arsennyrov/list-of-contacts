import { ADD, DEL, MAXID } from "./actionTypes";

export function add() {
    return {
        type: ADD,
    }
}

export function del(index) {
    return {
        type: DEL,
        payload: index
    }
}

export function maxid() {
    return {
        type: MAXID
    }
}

export const getData = () => dispatch => {
    setTimeout(() => {
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: [] })
    }, 1000)
}