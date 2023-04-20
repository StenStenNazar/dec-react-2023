import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

export const albumsService = {
    getAll: () => axiosService.get(urls.albums).then(value => value.data)
}