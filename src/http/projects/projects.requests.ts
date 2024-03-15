import axios, {AxiosResponse} from "axios";
import {ICreateProjectDto} from "./types/create-project.dto";
import {IGetProjectDto} from "./types/get-project.dto";
import {axiosInstance} from "../axios";



export async function getProjectById(id: number): Promise<AxiosResponse<IGetProjectDto>> {
    return await axiosInstance.get(`/projects/byId/${id}`)
}

export async function createProjectReq(createProjectDto: ICreateProjectDto): Promise<AxiosResponse<IGetProjectDto>>  {
    return await axiosInstance.post(`/projects}`, createProjectDto)
}

