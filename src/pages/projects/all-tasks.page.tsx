import {SideBar} from "../../layers/side-bar.layer";
import '../../styles/style_project.css'
import Task from "../../layers/projects/task.layer";
function AllTasksPage() {

    return (
        <div>
        <SideBar/>

    <div className="p-2 p-md-4 container" id="my_app">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-5">
            <h2>Все задачи</h2>
            <button className="btn btn-primary text-center mt-3 pe-5 ps-5 p-3 my_btn" type="submit">Импорт задач</button>
        </div>
        <div className="d-flex mt-2 mt-md-4 flex-column flex-md-row justify-content-around prioritie">


            <div className="d-flex flex-column justify-content-start not_started">
                <div className="d-flex  align-items-center feature ">
                    <h3>Не начатые</h3>
                    <p className='ms-2' id="task_cnt">3</p>
                </div>
                <Task></Task>
            </div>


            <div className="ms-2 d-flex flex-column justify-content-start in_process" id="in_process">
                <div className="d-flex align-items-center feature">
                    <h3>В процессе</h3>
                    <p className='ms-2' id="task_cnt">3</p>
                </div>
                <Task></Task>
            </div>

            <div className="ms-2 d-flex flex-column justify-content-start finished" id="finished">
                <div className="d-flex align-items-center feature">
                    <h3>Законченые</h3>
                    <p className='ms-2' id="task_cnt">3</p>
                </div>
                <Task></Task>
            </div>

        </div>
    </div>
            </div>
    );
}


export default AllTasksPage;