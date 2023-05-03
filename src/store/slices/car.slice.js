import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate:null
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload
        },
        addCar: (state, actions) => {
            state.cars = [...state.cars, actions.payload.data]
        },
        removeCar: (state, actions) => {
            state.cars = state.cars.filter(car => car.id !== actions.payload.id)
        },
        carForUpdateCar:(state,actions)=>{
            console.log(actions.payload.car)
            state.carForUpdate=actions.payload.car
        }
    }
})

export const {reducer: carReducer, actions} = carSlice;

export const carActions = {
    ...actions
}