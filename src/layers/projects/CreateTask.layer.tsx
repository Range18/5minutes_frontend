import React from "react";
import React, {useState} from 'react';
// импорт функции


function CreateTask() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [deadline, setDeadline] = useState('')
    const [priority, setPriority] = useState('')
    const [level, setLevel] = useState('')


    return (
        <div className="container p-md-5 col-md-6">
            <h2 className="text-center mt-2">Создать проекта</h2>
            <input type="text" className="form-control p-3 mt-3 input_text" placeholder="Название задаи" aria-label="title"
    aria-describedby="basic-addon1" onChange={text => setTitle(text.target.value)}/>
            <input type="text" className="form-control p-3 mt-2 input_text" placeholder="Описание задачи" aria-label="description"
    aria-describedby="basic-addon1" onChange={text => setDescription(text.target.value)}/>
            <input type="text" className="form-control p-3 mt-2 input_text" placeholder="Дедлайн" aria-label="deadline"
    aria-describedby="basic-addon1" onChange={text => setDeadline(text.target.value)}/>
            <input type="text" className="form-control p-3 mt-2 input_text" placeholder="Приоритет задачи" aria-label="priority"
    aria-describedby="basic-addon1" onChange={text => setPriority(text.target.value)}/>
            <input type="text" className="form-control p-3 mt-2 input_text" placeholder="Степень завершенности" aria-label="deadline"
    aria-describedby="basic-addon1" onChange={text => setDeadline(text.target.value)}/>
    
            <button className="btn btn-primary text-center mt-3 pe-5 ps-5 p-3 my_btn" type="submit" onClick={async () => {await CreateProject(title, description)} }>Добавить
            </button>
        </div>
    );
}
export default CreateTask;