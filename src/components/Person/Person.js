import React from 'react';

import './Person.css'

const Person = ({person}) => {
    const {name, status, species, gender, image} = person
    return (
        <div className={'person'}>
            <li>{name}</li>
            <li>{status}</li>
            <li>{species}</li>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Person;