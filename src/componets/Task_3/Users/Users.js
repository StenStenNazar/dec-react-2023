import React, {useEffect, useState} from 'react';

import User from '../User/User'

const Users = ({getUserId}) => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers([...value]))
    }, [])

    return (
        <div>
            <div><h1>Users</h1></div>
            <div> {users && users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)}</div>
        </div>
    );
};

export default Users;