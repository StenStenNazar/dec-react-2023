import React from 'react';

import './Commen.css'

const Comment = ({comment}) => {
    const {name,email,body,id} = comment;
    return (
        <div className={'comment'}>
            <li>{id}</li>
            <li>{name}</li>
            <li>{email}</li>
            <li>{body}</li>
        </div>
    );
}

export default Comment;