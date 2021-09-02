import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Иванов И.И.', 
                        phone: '8-928-111-22-33', 
                        email: 'aaaaeee@ru', 
                        comment: '',
                        important: false, like: false, id: '1'},
                {name: 'Петров П.П.', 
                        phone: '8-928-111-33-44', 
                        email: 'cccccc-aaaa@ru', 
                        comment: '',
                        important: true, like: false, id: '2'},
                {name: 'Сидоров С.С.', 
                        phone: '8-928-555-66-77', 
                        email: 'dddd-aaaa@ru', 
                        comment: '',
                        important: false, like: false, id: '3'},

            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.onToggle = this.onToggle.bind(this);

        this.maxId = 4;

    };

    deleteItem(id) {
       this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
     
            const newArr = [...data.slice(0, index), ...data.slice(index+1)];

            return {
                data: newArr
            }
       });
    }

    addItem(body1, body2, body3, body4) {
       const newItem = {
           name: body1,
           phone: body2,
           email: body3,
           comment: body4, 
           id: this.maxId++
       } 
       this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
       })
    }

    onToggleImportant(id) {
        this.onToggle(id, 'important');
    }

    onToggleLiked(id) {
     /*    this.onToggle(id, 'like'); */
     debugger;
     alert(this.state.data[id-1].name);
    }

    onToggle(id, flag) {
        this.setState(({data}) => {
            const index = data.findIndex(elem  => elem.id === id );
            const old = data[index];
            const newArr = [...data.slice(0, index), 
                (flag === 'like') ? 
                {...old, like: !old.like} :
                {...old, important: !old.important}
                , ...data.slice(index+1)];
            return {
                data: newArr
            }
        });
    }

    searchPost(items, term) {
        if (term.length ===0) {
            return items
        }

        return items.filter((item) => {
            if (item.name.indexOf(term) > -1) {
                return item.name.indexOf(term)
            }
            if (item.phone.indexOf(term) > -1) {
                return item.name.indexOf(term)
            }
            if (item.email.indexOf(term) > -1) {
                return item.name.indexOf(term)
            }
            if (item.comment.indexOf(term) > -1) {
                return item.name.indexOf(term)
            }
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
        const {data, term, filter} = this.state;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                 <AppHeader
                 allPosts={allPosts} />
                 <div className="search-panel d-flex">
                     <SearchPanel
                     onUpdateSearch={this.onUpdateSearch}/>
{/*                      <PostStatusFilter
                     filter={filter}
                     onFilterSelect={this.onFilterSelect} /> */}
                 </div>
                 <PostList
                     posts={visiblePosts}
                     onDelete={this.deleteItem}
                     onToggleImportant={this.onToggleImportant}
                     onToggleLiked={this.onToggleLiked}
                    />
                 <PostAddForm
                    onAdd={this.addItem}/>
            </div>
         )
    }

}
