import React, {useState} from 'react';
import {createProject} from "../../services/project.service";

// импорт функции createTask


function CreateProject() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <div className="container p-md-5 col-md-6">
            <h2 className="text-center mt-2">Создать проекта</h2>
            <input type="text" className="form-control p-3 mt-3 input_text" placeholder="Название проекта" aria-label="title"
    aria-describedby="basic-addon1" onChange={text => setTitle(text.target.value)}/>
        <   input type="text" className="form-control p-3 mt-2 input_text" placeholder="Описание проекта" aria-label="description"
    aria-describedby="basic-addon1" onChange={text => setDescription(text.target.value)}/>
    
            <button className="btn btn-primary text-center mt-3 pe-5 ps-5 p-3 my_btn" type="submit" onClick={async () => {await createProject(title, description)} }>Добавить
            </button>
        </div>
    );
}
export default CreateProject;