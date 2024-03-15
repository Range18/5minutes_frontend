import {createProjectReq} from "../http/projects/projects.requests";

export async function createProject(title: string, description: string) {
    const response = await createProjectReq({title, description});
    document.location.href = `/projects/${response.data.id}`;
}

