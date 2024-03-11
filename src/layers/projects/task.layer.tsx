import '../../styles/style_project.css'
import {ITask} from "../../shared/types/task.type";
// function Task({title, description, expireAt}: ITask) {
function Task() {
    return (
        <div className="to-do-list">
            <div className=" mb-2">
                <div className="task" id='task_name'>
                    <h3 id="task_name">Изменение пака иконок</h3>
                    <input type="date" className="mt-2 date" id="task_date"/>
                    <p className="mt-2 company" id="task_company">ООО “Пятерочка”</p>
                </div>
            </div>
        </div>
    );
}

export default Task;
