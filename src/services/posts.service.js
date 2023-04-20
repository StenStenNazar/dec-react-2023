import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";


export const postsService = {
    getById: (id) => axiosService.get(urls.posts + `/${id}`).then(value => value.data)
}