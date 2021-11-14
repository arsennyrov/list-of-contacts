import React from 'react';

import './app-header.css'

const AppHeader = ({allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Список контактов</h1>
            <h2>{allPosts} записей</h2>
        </div>
    )
}

export default AppHeader;