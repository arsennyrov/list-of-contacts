import { connect } from 'react-redux';
import {add, del, maxid} from '../store/actions/actions';
import PostAddForm from '../components/post-add-form';

function mapSTP(state) {
    const { data, maxid, term, filter } = state; 
    return {
        data, maxid, term, filter
    }
}

function mapDTP(dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onDel: id => dispatch(del(id)),
        onMaxId: () => dispatch()
      }
}

export default connect(mapSTP, mapDTP)(PostAddForm);
