import {axiosInstance} from "../axios";
import {AxiosResponse} from "axios";
import {LoggedUserRdo} from "./logged-user.rdo";



export async function register(email:string, username: string, password: string): Promise<AxiosResponse<LoggedUserRdo> | null> {
    return  await axiosInstance.post('/auth/register', {email: email, username: username,  password: password}).catch((error) => {
        console.log(error);
        return null;
    })
}

export async function login(email:string, password: string): Promise<AxiosResponse<LoggedUserRdo> | null>
{
        return  await axiosInstance.post('/auth/login', {email, password}).catch((error) => {
            console.log(error);
            return null;
        })
}

export  async function logout(): Promise<void> {
        await axiosInstance.delete('/auth/logout').catch((error) => {console.log(error)})
}
