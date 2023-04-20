import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

export const commentsService = {
    getAll: () => axiosService.get(urls.comments).then(value => value.data)
}