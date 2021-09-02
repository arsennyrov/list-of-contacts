import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        const {id,  ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
              <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)} 
                    />
            </li>
        )
    });

    return (
        <>

      <div id='head=list' className="app-list-item d-flex justify-content-between">
        <span className=" header-name"
        onClick={onToggleLiked}>Name</span>

        <span className=" header-phone" 
            onClick={onToggleLiked}>Phone</span>

        <span className=" header-email"
            onClick={onToggleLiked}>Email</span>

        <span className=" header-comment"
            onClick={onToggleLiked}>Comment</span>
        </div>


        <ul className = "app-list list-group">
            {elements}
        </ul>
        </>
    )
}

export default PostList;