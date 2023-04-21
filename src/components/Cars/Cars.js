import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import css from './Cars.module.css'
import CarForm from "../CarForm/CarForm";

const Cars = () => {
    const [trig, setTrig] = useState(null)
    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null)
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        carService.getAll().then(value => setCars(value))
    }, [trig])

    const remove = async (id) => {
        await carService.deleteCar(id)
        setTrig(prev => !prev)
    }

    const watcher =(data)=>{
        setInputValue(data) //- функція бере значення з інпута
                                // на onChange={(event)=>watcher(event.target.value)
    }

    const fCars =cars.filter(car =>car.brand.toLowerCase().includes(inputValue.toLowerCase()))


    return (
        <div>

            <div>
                <CarForm setTrig={setTrig} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate} cars={cars}
                         watcher={watcher}  />
            </div>

            <div className={css.cars}>
                {fCars && fCars.map(car => <Car key={car.id} car={car} remove={remove}
                                              setCarForUpdate={setCarForUpdate}/>)}
            </div>
        </div>
    );
};

export default Cars;