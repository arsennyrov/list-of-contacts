import {ADD, DEL, MAXID } from '../actions/actionTypes';


const initialState = {
        data: [
                {name: 'Иванов И.И.', 
                        phone: '8-928-111-22-33', 
                        email: 'aaaaeee@ru', 
                        comment: 'Нужный человек',
                        id: '1'},
                {name: 'Петров П.П.', 
                        phone: '8-928-111-33-44', 
                        email: 'cccccc-aaaa@ru', 
                        comment: 'перезвонить во вторник!',
                        id: '2'},
                {name: 'Сидорова С.С.', 
                        phone: '8-928-555-66-77', 
                        email: 'dddd-aaaa@ru', 
                        comment: '',
                        id: '3'},
                {name: 'Ливанов И.И.', 
                        phone: '8-928-111-22-33', 
                        email: 'aaaaeee@ru', 
                        comment: 'Он',
                        id: '4'},
                {name: 'Серова П.П.', 
                        phone: '8-928-111-33-44', 
                        email: 'cccccc-aaaa@ru', 
                        comment: 'перезвонить во вторник!',
                        id: '5'},
                {name: 'Котов С.С.', 
                        phone: '8-928-555-66-77', 
                        email: 'dddd-aaaa@ru', 
                        comment: '',
                        id: '6'},

            ],
            maxid: 7,
            term: '',
            filter: 'all'
}

export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case ADD: {
                const newItem = {
                        name: '_',
                        phone: '',
                        email: '',
                        comment: '', 
                        id: state.maxid
                    } 
                const newArr = [...state.data, newItem];
                return {
                         data: newArr,
                         maxid: state.maxid,
                         term: state.term,
                         filter: state.filter
                        }
                }

        case DEL: {
                return {
                    data: [...state.data.slice(0, action.payload), 
                        ...state.data.slice(action.payload+1)],
                        maxid: state.maxid,
                        term: state.term,
                        filter: state.filter
                 }
            }

         case MAXID: {
                return {
                        data: state.data,
                        maxid: state.maxid+1,
                        term: state.term,
                        filter: state.filter
                }                        
        }             

        default: {
            return state
        }
    }
}