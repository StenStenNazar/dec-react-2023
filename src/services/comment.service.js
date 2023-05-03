import {UserAxiosService} from "./axios.service";
import {urls} from "../constants/baseUrl";

export const commentService={
    getAll: ()=> UserAxiosService.get(urls.comments).then(value => value.data),
    create: ( comment)=> UserAxiosService.post(urls.comments,comment)
}