import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../services/car.service";
import {carActions} from "../../store/slices/car.slice";

const CarForm = ({setTrigger}) => {
    const {carForUpdate} = useSelector(state => state.carReducer);
    const {handleSubmit, register, reset, setValue} = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('year', carForUpdate.year)
            setValue('price', carForUpdate.price)
        }

    }, [carForUpdate])

    const save = async (car) => {
        const {data} = await carService.create(car)
        dispatch(carActions.addCar({data}))
        reset()
    }

    const updeter = async (car) => {
        console.log(car)
        const {data} = await carService.updateCar(carForUpdate.id, car)
        reset()
        setTrigger(prev => !prev)
    }


    return (
        <form onSubmit={handleSubmit(carForUpdate ? updeter : save)}>
            <input type="text" placeholder={"brand"} {...register("brand")}/>
            <input type="text" placeholder={"price"} {...register("price")}/>
            <input type="text" placeholder={"year"} {...register("year")}/>
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export default CarForm;