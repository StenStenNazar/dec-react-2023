import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices/user.slice";
import {commentReducer} from "./slices/comment.slice";
import {carReducer} from "./slices/car.slice";




const rootReducer = combineReducers({
    userReducer,
    commentReducer,
    carReducer
})
export const setupStore = () => configureStore({
    reducer: rootReducer
})
