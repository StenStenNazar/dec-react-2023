import React from 'react';

import './User.css'

const User = ({user}) => {
    const{name,email,id} = user
    return (
        <div className={'user'}>
            <li>{id}</li>
            <li>{name}</li>
            <li>{email}</li>
        </div>
    );
};

export default User;