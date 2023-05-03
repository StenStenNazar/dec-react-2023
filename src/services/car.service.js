import {CarAxiosService} from "./axios.service";
import {urls} from "../constants/baseUrl";

export const carService = {
    getAll :()=>CarAxiosService.get(urls.cars).then(value => value.data),
    create:(car)=>CarAxiosService.post(urls.cars,car),
    remove: (id) => CarAxiosService.delete(`${urls.cars}/${id}`,id),
    updateCar:(id,car) =>CarAxiosService.patch(`${urls.cars}/${id}`,car)
}