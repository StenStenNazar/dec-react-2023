import { UserAxiosService} from "./axios.service";
import {urls} from "../constants/baseUrl";

export const userService = {
    getAll: () => UserAxiosService.get(urls.users).then(value => value.data),
    createUser: (user) => UserAxiosService.post(urls.users, user)
}