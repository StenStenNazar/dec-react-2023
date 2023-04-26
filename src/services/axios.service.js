import axios from "axios";
import baseURL from "../constants/url/urls";

export const axiosService = axios.create({baseURL})