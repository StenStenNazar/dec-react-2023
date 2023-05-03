import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(state)

    const inc =()=>{
        dispatch({type:'INC'})
    }
    const dec =()=>{
        dispatch({type:"DEC"})
    }

    const res =()=>{
        dispatch({type:'RES'})
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=>inc()}>increment</button>
            <button onClick={()=>dec()}>decrement</button>
            <button onClick={()=> res()}>reset</button>
        </div>
    );
};

export default Counter;