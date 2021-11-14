import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onToggleImportant, 
                   nameItem, phoneItem, emailItem, commentItem, 
                   onAdd, onDel, data, term, filter }) => {

    const elements = posts.map((item, index ) => {
   
 
        return (
            <li key={index} 
                className='list-group-item'
                onClick = {(e) => {
                    if (e.target.id === 'ii') {
                    onDel(index)
                }} }
                >
              <PostListItem 

                    { ...item }
                    onToggleImportant={() => onToggleImportant(index)}
                    nameItem={() => nameItem(index)} 
                    phoneItem={() => phoneItem(index)} 
                    emailItem={() => emailItem(index)} 
                    commentItem={() => commentItem(index)} 
                    />
            </li>
        )
    });


    return (
        <>

      <div id='head-list' className="app-list-item d-flex justify-content-between">
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

