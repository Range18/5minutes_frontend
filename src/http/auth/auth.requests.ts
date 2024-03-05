import {axiosInstance} from "../axios";
import {AxiosResponse} from "axios";
import {LoggedUserRdo} from "../logged-user.rdo";



export async function register(email:string, username: string, password: string): Promise<AxiosResponse<LoggedUserRdo> | void> {
    return  await axiosInstance.post('/auth/register', {email, username, password}).catch((error) => {console.log(error)})
}

export async function login(email:string, password: string): Promise<AxiosResponse<LoggedUserRdo> | void>
{
        return  await axiosInstance.post('/auth/login', {email, password}).catch((error) => {console.log(error)})
}

export  async function logout(): Promise<void> {
        await axiosInstance.delete('/auth/logout').catch((error) => {console.log(error)})
}
