import { connect } from 'react-redux';
import {add, del, maxid, getData} from '../store/actions/actions';
import PostList from '../components/post-list';

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
        onMaxId: () => dispatch(maxid()),

        onGetData: () => { 
            dispatch(getData());
        }
      }
}

export default connect(mapSTP, mapDTP)(PostList);
