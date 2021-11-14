import React, {Component} from 'react';
import { connect } from 'react-redux';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostList from '../../container/post-list-container';
import PostAddForm from '../../container/post-add-form-container';
import {add, del} from '../../store/actions/actions';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.nameItem = this.nameItem.bind(this);
        this.phoneItem = this.phoneItem.bind(this);
        this.emailItem = this.emailItem.bind(this);
        this.commentItem = this.commentItem.bind(this); 
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;

    };

    nameItem(id) {
        let result = prompt(this.state.data[id-1].name, this.state.data[id-1].name);
        this.setState(({data}) => {
            const newArr = data;  
            newArr[id-1].name = result;
            return {
                data: newArr
            }
       });
    }

    phoneItem(id) {
        let result = prompt(this.state.data[id-1].phone, this.state.data[id-1].phone);
        this.setState(({data}) => {
            const newArr = data;  
            newArr[id-1].phone = result;
            return {
                data: newArr
            }
       });    }

    emailItem(id) {
        let result = prompt(this.state.data[id-1].email, this.state.data[id-1].email);
        if (!result.includes("@")) {
            alert('Наберите Email правильно');
            return;
        }

        this.setState(({data}) => {
            const newArr = data;  
            newArr[id-1].email = result;
            return {
                data: newArr
            }
       });
    }

    commentItem(id) {
        let result = prompt(this.state.data[id-1].comment, this.state.data[id-1].comment);
        this.setState(({data}) => {
            const newArr = data;  
            newArr[id-1].comment = result;
            return {
                data: newArr
            }
       });
    }

    searchPost(items, term) {
        if (this.props.term && this.props.term.length === 0) {
            return items
        }
        
         return items.filter((item) => {
            return item.name;  /* .indexOf(this.props.term) > -1; */
        }); 
    }

    filterPost(items, filter) {
            return items
    }

    onUpdateSearch(term) {

        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        console.log('app:', this.props);

        const { data, term } = this.props;

        const allPosts = data.length;

        const visiblePosts = this.searchPost(data, term);

        return (
            <div className="app">
                 <AppHeader
                 allPosts={allPosts} />
                 <div className="search-panel d-flex">
                     <SearchPanel
                     onUpdateSearch={this.onUpdateSearch}/>

                 </div>
                 <PostList
                     posts={visiblePosts}
                     nameItem={this.nameItem}
                     phoneItem={this.phoneItem}
                     emailItem={this.emailItem}
                     commentItem={this.commentItem}

                    />
                 <PostAddForm
/*                     onAdd={this.addItem} */
                 />
            </div>
         )
    }

}

function mapSTP(state) {
    const { data, maxid, term, filter } = state.listReducer; 
    return {
        data, maxid, term, filter
    }
}

function mapDTP(dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onDel: index => dispatch(),
      }
}

export default connect(mapSTP, mapDTP)(App)