import axios from "axios";



export async function getProjectById(id: number)  {
    return await axios.get(`/projects/byId/${id}`)
}