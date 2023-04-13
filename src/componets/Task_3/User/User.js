import React from 'react';

import './User.css'

const User = ({user, getUserId}) => {
    const {name, username, id, email} = user

    return (
        <div className={'user'}>
            <li>{id}</li>
            <li>{name}</li>
            <li>{username}</li>
            <li>{email}</li>
            <button onClick={() => getUserId(id)}> show posts</button>
        </div>
    );
};

export default User;