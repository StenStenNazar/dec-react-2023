import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    comments: []
}
export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {
        setComments: (state, action) => {
            state.comments = action.payload
        },
        addComments: (state, actions) => {
            state.comments = [...state.comments, actions.payload.data]
        }
    }
})

export const {reducer: commentReducer, actions} = commentSlice;
export const commentActions = {
    ...actions
}