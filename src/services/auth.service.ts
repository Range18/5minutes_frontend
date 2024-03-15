import {login, register} from "../http/auth/auth.requests";

export async function loginUser(email: string, password: string) {
    const response = await login(email, password);
    if (response && response?.status === 200) {
        document.location.href = '/projects/my';
    } else {
        console.log(response?.status)
        console.log(response?.data)
    }
}
export async function registerUser(email: string, username: string, password: string) {
    const response = await register(email, username, password);
    console.log(response)
    if (response && response?.status === 201) {
        document.location.href = '/projects/my';
    } else {
        console.log(response?.status)
        console.log(response?.data)
    }
}