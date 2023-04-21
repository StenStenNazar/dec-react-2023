import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

export const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    create: (car) => axiosService.post(urls.cars, car).then(value => value.data),
    deleteCar: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateCar: (id, data) => axiosService.put(`${urls.cars}/${id}`, data)
}