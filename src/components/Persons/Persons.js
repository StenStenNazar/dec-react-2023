import React from 'react';
import {useState, useEffect} from 'react'

import Person from '../Person/Person'
import '../Person/Person.css'

const Persons = () => {
    const [persons, setPersons] = useState();
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/[1,2,3,4,5,6]')
            .then(value => value.json())
            .then(value => setPersons(value))
    }, [])
    return (
        <div>
            <h1>Rick_Morty</h1>
            <div className={'persons'}> {persons && persons.map(person => <Person key={person.id}
                                                                                  person={person}/>)}</div>
        </div>
    );
};

export default Persons;