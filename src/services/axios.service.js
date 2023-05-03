import axios from "axios";

import {carBaseURL, placeHolderBaseURL} from "../constants/baseUrl";

const UserAxiosService = axios.create({
    baseURL: placeHolderBaseURL
})

const CarAxiosService = axios.create({
    baseURL: carBaseURL
})

export {
    CarAxiosService,
    UserAxiosService
}