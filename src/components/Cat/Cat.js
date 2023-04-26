import React, {useReducer} from 'react';

import './Cat.css'
import {catReducer} from "../reducers/cat.reducer";

const Cat = ({cat, deleteCat}) => {
    return (
        <div className={'cat'}>
            <div>{cat}</div>
            <button onClick={() => deleteCat(cat)}>delete</button>
        </div>
    );
};

export default Cat;