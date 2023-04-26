import React, {useReducer} from 'react';
import {useForm} from "react-hook-form";

import Cat from "../Cat/Cat";
import{catReducer} from "../reducers/cat.reducer";


const CatForm = () => {
    const [state, dispatch] = useReducer(catReducer, {cats: []});
    const {register, reset, handleSubmit} = useForm();
    const save = (cat) => {
        dispatch({type: 'save', payload: cat})
        reset();
    }



    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'cat'} {...register('cat')}/>
                <button>save</button>
            </form>
            { state.cats.map(cat => <Cat key={Math.round(Math.random() * 1000)} cat={cat}/>)}
        </div>
    );
};
export default CatForm;