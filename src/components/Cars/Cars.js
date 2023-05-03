import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../services/car.service";
import {carActions} from "../../store/slices/car.slice";
import Car from "../Car/Car";
import './Cars.css'
import CarForm from "../CarForm/CarForm";

const Cars = () => {

    const {cars,carForUpdate} = useSelector(state => state.carReducer);
    const dispatch = useDispatch();
    const [trigger,setTrigger] = useState(null);

    useEffect(() => {
        carService.getAll().then(value => dispatch(carActions.setCars(value)))
    }, [trigger])

    return (
        <div className={'cars_wrapper'}>
            <CarForm setTrigger={setTrigger}/>
            <div className={'cars'}>
                {cars && cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    )
        ;
};

export default Cars;