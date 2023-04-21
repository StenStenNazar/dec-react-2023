import React, {useEffect, useState} from 'react';
import {set, useForm} from 'react-hook-form'
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/car.service";
import {carValidator} from "../../validators/car.validator";
import css from '../Car/Car.module.css'


const CarForm = ({setTrig, carForUpdate, setCarForUpdate,watcher}) => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    // const [inputValue, setInputValue] = useState('');
    // const filteredCars = cars.filter(car =>{
    //     return car.brand.toLowerCase().includes(inputValue.toLowerCase())
    // })
    //
    // console.log(filteredCars)

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    const save = async (car) => {
        await carService.create(car)
        setTrig(prev => !prev)
        reset()
    }
    const update = async (car) => {
        await carService.updateCar(carForUpdate.id, car)
        reset()
        setTrig(prev => !prev)
        setCarForUpdate(null)
    }

    return (
        <div>
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="number" placeholder={'year'}  {...register('year')}/>
            <input type="number" placeholder={'price'} {...register('price')}/>
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            <input className={css.search} type="text" placeholder={'search'} onChange={(event)=>watcher(event.target.value)} />
        </form>
            <div className={css.errors}>
                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
            </div>
        </div>
    );
};

export default CarForm;