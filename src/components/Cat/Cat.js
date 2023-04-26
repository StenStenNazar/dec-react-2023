import React, {useReducer} from 'react';

import './Cat.css'
import {catReducer} from "../reducers/cat.reducer";

const Cat = ({cat}) => {
    const [state,dispatch] = useReducer(catReducer,[]);
    const deleteCat =(cat)=>{
       dispatch({type:'delete',payload:cat})
    }

    return (
        <div className={'cat'}>
            <div>{cat}</div>
            <button onClick={()=>deleteCat({cat})}>delete</button>
        </div>
    );
};

export default Cat;