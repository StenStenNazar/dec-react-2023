import React from 'react';

import './Car.css'
import {carService} from "../../services/car.service";
import {useDispatch} from "react-redux";
import {carActions} from "../../store/slices/car.slice";

const Car = ({car}) => {
    const {brand, price, year, id} = car;
    const dispatch = useDispatch();

    const remove= async (id)=>{
         await carService.remove(id)
        dispatch(carActions.removeCar({id}))
    }

    return (
        <div className={'car'}>
            <li><b>id</b>:{id}</li>
            <li><b>price</b>:{price}</li>
            <li><b>year</b>:{year}</li>
            <li><b>brand</b>:{brand}</li>
            <div className={'buttons'}>
            <button onClick={()=>remove(id)}>delete</button>
            <button onClick={()=>dispatch(carActions.carForUpdateCar({car}))}>update</button>
            </div>
        </div>
    );
};

export default Car;