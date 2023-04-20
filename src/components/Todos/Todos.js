import React, {useEffect, useState} from 'react';

import {todoService} from "../../services/todo.service";
import Todo from "../Todo/Todo";
import './Todos.css'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        todoService.getAll().then(value => setTodos([...value]))
    }, [])
    return (
        <div>
            <div className={'todos_text'}><h1>Todos</h1></div>
            <div className={'todos'}>
                {todos && todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
            </div>
        </div>
    );
};

export default Todos;