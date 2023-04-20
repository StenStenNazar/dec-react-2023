import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

export const todoService = {
    getAll: () => axiosService.get(urls.todos).then(value => value.data)
}