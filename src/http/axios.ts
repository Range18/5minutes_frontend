import axios from "axios";


export const axiosInstance = axios.create({baseURL: 'https://tele2quiz.store/api', withCredentials: true})