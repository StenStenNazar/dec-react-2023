import React from 'react';

import './Dog.css'

const Dog = ({dog, deleteDog}) => {
    return (
        <div className={'dog'}>
            <div>{dog}</div>
            <button onClick={() => deleteDog(dog)}>delete</button>
        </div>
    );
};

export default Dog;