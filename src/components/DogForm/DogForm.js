import React, {useReducer} from 'react';
import {useForm} from "react-hook-form";
import dog from "../Dog/Dog";
import Dog from "../Dog/Dog";
import {reducer} from "../reducers/dog.reducer";


const DogForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const [state, dispatch] = useReducer(reducer, {dogs: []});
    const save = (dog) => {
        dispatch({type: 'save', payload: dog})
        reset()
    }

    const deleteDog = (dog) => {
        dispatch({type: 'delete', payload: dog})
    }


    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'dog'} {...register('dog')}/>
                <button>save</button>
            </form>
            {state.dogs.map(dog => <Dog key={Math.round(Math.random() * 1000)} dog={dog} deleteDog={deleteDog}/>)}
        </div>
    );
};

export default DogForm;