import React from 'react';

import './Todo.css'

const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo
    return (
        <div className={'todo'}>
            <li><b>userId</b>{userId}</li>
            <li><b>id</b>{id}</li>
            <li><b>title:</b>{title}</li>
            <li><b>completed:</b>{completed.toString()}</li>
        </div>
    );
};

export default Todo;