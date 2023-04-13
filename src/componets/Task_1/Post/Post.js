import React from 'react';

import './Post.css'

const Post = ({post, getFullInfo}) => {
    const {id, title, body, userId} = post;
    return (
        <div className={'post'}>
            <li><b>id:</b>{id}</li>
            <li><b>title:</b>{title}</li>
            <button onClick={() => getFullInfo({id, title, body, userId})}>details</button>
        </div>
    );
};

export default Post;