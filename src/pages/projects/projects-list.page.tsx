import '../../styles/style_project.css'
import {SideBar} from "../../layers/side-bar.layer";
import ProjectButton from "../../layers/projects/project-button.layer";
function ProjectsListPage() {

    return (
        <div>
        <SideBar></SideBar>
        <div className="p-4 mt-3 container">
            <div className="project_names">

                <h1>Все проекты</h1>
                <div className="mt-4 mb-3 p-2 d-flex flex-column flex-md-row justify-content-around" id="">

                    <ProjectButton/>

                    <div className="p-4 ms-md-3  notes collapse" id="name_pr_1">
                        <div className="d-flex flex-column flex-md-row  justify-content-between note_head">
                            <div className="">
                                <h2>Estory</h2>
                                <a href="project.html" className="link">К проекту</a>
                            </div>
                            <button className="btn btn-primary  text-center mt-3 pe-5 ps-5 p-3 my_btn" type="submit">Добавить задачу</button>
                        </div>


                        <div className="mt-3 tasks">


                            <div className="check-task d-flex justify-content-around">
                                <input className="p-2 me-3 form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <div className="task_text">
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            <div className="task_name d-flex flex-wrap">
                                                <h3 className='me-2' id="task_name">Изменение пака иконок</h3>
                                                <h4 id="priority"></h4>
                                            </div>
                                            <p id="'task_descr">Нужно перерисовать иконки магазина, корзины, избранного и профиля. Все правки в документе от Ярослава(Нужно написать ему, что бы выслал и не забыл)</p>
                                        </label>
                                    </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProjectsListPage;