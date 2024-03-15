
import {axiosInstance} from "../axios";
import {AxiosResponse} from "axios";
import {IGetUserDto} from "./types/get-user.dto";


export async function getMe(): Promise<AxiosResponse<IGetUserDto> | null> {
    return await axiosInstance.get('/users/me').catch((error) => {
        console.log(error);
        return null;
    })
}