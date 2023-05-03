import {createSlice} from "@reduxjs/toolkit";

import users from "../../components/Users/Users";


const initialState = {
    users: []
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        createUser: (state, actions) => {
            state.users = [...state.users, actions.payload.data]
        }
    }

})

export const {reducer: userReducer, actions} = userSlice
export const userActions = {
    ...actions
}
