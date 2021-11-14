import { MAXID } from '../actions/actionTypes';

const initialState = {
            maxid: 7,
}

export default function maxidReducer(state = initialState, action) {
    switch (action.type) {
         case MAXID: {
                return {
                        maxid: state.maxid+1
                }                        
        }             

        default: {
            return state
        }
    }
}