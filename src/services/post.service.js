import {axiosService} from "./axios.service";
import {urls} from "../constants/url/urls";
 class postService{
    getAll(){
        return axiosService.get(urls.posts)
    }
}

export const PostService = new postService()