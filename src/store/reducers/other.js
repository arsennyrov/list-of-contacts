import { } from '../actions/actionTypes';

const initialState = {
            term: '',
            filter: 'all'
}

export default function otherReducer(state = initialState, action) {
    switch (action.type) {

        default: {
            return state
        }
    }
}