import React from 'react';

import CatForm from "../catForm/catForm";
import DogForm from "../DogForm/DogForm";
import './CatsDogs.css'

const CatsDogs = () => {
    return (
        <div className={'cats_dogs'}>
            <div>
                <h1>Cats</h1>
                <CatForm/>
            </div>
            <div>
                <h1>Dogs</h1>
                <DogForm/>
            </div>
        </div>
    );
};

export default CatsDogs;