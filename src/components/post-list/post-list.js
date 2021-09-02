import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, 
                   nameItem, phoneItem, emailItem, commentItem }) => {

    const elements = posts.map((item) => {
        const {id,  ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
              <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    nameItem={() => nameItem(id)} 
                    phoneItem={() => phoneItem(id)} 
                    emailItem={() => emailItem(id)} 
                    commentItem={() => commentItem(id)} 
                    />
            </li>
        )
    });

    return (
        <>

      <div id='head=list' className="app-list-item d-flex justify-content-between">
        <span className=" header-name"
        onClick={nameItem}>Name</span>

        <span className=" header-phone" 
            onClick={phoneItem}>Phone</span>

        <span className=" header-email"
            onClick={emailItem}>Email</span>

        <span className=" header-comment"
            onClick={commentItem}>Comment</span>
        </div>


        <ul className = "app-list list-group">
            {elements}
        </ul>
        </>
    )
}

export default PostList;