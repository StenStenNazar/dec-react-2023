import React from 'react';

import './Simpson.css'

const Simpson = ({simpson}) => {

    const {name, surname, age, info, photo,} = simpson
    return (
        <div className={'simpson'}>
            <h3>{name}</h3>
            <h3>{surname}</h3>
            <li>{age}-years old</li>
            <li>{info}</li>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default Simpson;