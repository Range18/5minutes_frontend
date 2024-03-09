import React, {useEffect} from 'react';
import '../../styles/style_project.css'
import Contact from "../../layers/contact.layer";
import Note from "../../layers/note.layer";
import {SideBar} from "../../layers/side-bar.layer";
import figmaImg from '../../assets/figma.png'
import gitImg from '../../assets/git.png'
import miroImg from '../../assets/miro.png'
function ProjectPage() {

    return (
        <div>
            <div className="container">
                <SideBar/>
                <div className="d-flex justify-content-between align-items-center note_head">
                    <div className="">
                        <h2>Estory</h2>
                    </div>
                    <button className="btn btn-primary text-center mt-3 pe-5 ps-5 p-3 my_btn" type="submit">Добавить
                        задачу
                    </button>
                </div>
                <p className="p-2 mt-3">Описание нашего проекта это умный агрегатор всего, что бы вы могли найти все что
                    вам нужно в одном месте. Панируем расширение нашего продукта. Описание нашего проекта это умный
                    агрегатор всего, что бы вы могли найти все что вам нужно в одном месте. Панируем расширение нашего
                    продуктаОписание нашего проекта это умный агрегатор всего, что бы вы могли найти все что вам нужно в
                    одном месте. Панируем расширение нашего продуктаОписание нашего проекта это умный агрегатор всего,
                    что бы вы могли найти все что вам нужно в одном месте. </p>
                <h2 className="p-2">Ссылки</h2>
                <div className="d-flex justify-content-between links">
                    <div className="col-4 me-1 d-flex align-items-center link">
                        <img src={figmaImg} alt="" className="me-3 ps-2"/>
                        <div className="links_text">
                            <h3>Дизайн</h3>
                            <p>Figma.com</p>
                        </div>
                    </div>
                    <div className="col-4 me-1 d-flex align-items-center link">
                        <img src={gitImg} alt="" className="me-3 ps-2"/>
                        <div className="links_text">
                            <h3>Код</h3>
                            <p>Github.com</p>
                        </div>
                    </div>
                    <div className="col-4 d-flex align-items-center link">
                        <img src={miroImg} alt="" className="me-3 ps-2"/>
                        <div className="links_text">
                            <h3>Идеи</h3>
                            <p>Miro.com</p>
                        </div>
                    </div>
                </div>
                <h2 className="p-2 mt-5">Контакты</h2>
                <div className="d-flex justify-content-between links">
                        <Contact name={'Александр Александрович'} about={'CEO'} contact={'+79827611111'} />
                </div>
                <h2 className="p-2 mt-5">Заметки</h2>
                <div className="d-flex justify-content-between links">
                    <Note title={'Не забыть позвонить'} description={'Не забыть позвонить\n' +
                        '                                Нужно позвонить Александру, что бы он\n' +
                        '                                подсказал по файлу с иконками, котор...'}/>
                </div>
            </div>

            <div className="p-2 p-md-4 container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Все задачи</h2>
                    <button className="btn btn-primary text-center mt-3 pe-5 ps-5 p-3 my_btn" type="submit">Импорт
                        задач
                    </button>
                </div>
                <div className="d-flex mt-2 mt-md-4   justify-content-around prioritie">
                    <div className="d-flex flex-column justify-content-start not_started">
                        <div className="d-flex  align-items-center feature">
                            <h3>Не начатые</h3>
                            <p className='ms-2' id="count">3</p>
                        </div>
                        <div className="p-3 to-do-list">
                            <div className="m-0 p-2 p-md-3 ">
                                <div className="task" id='task_name'>
                                    <h3>Изменение пака иконок</h3>
                                    <input type="date" className="mt-2 date"/>
                                    <p className="mt-2 company" id="company">ООО “Пятерочка”</p>
                                </div>


                                <div className="mt-md-4 task" id='task_name'>
                                    <h3>Изменение пака иконок</h3>
                                    <input type="date" className="mt-2 date"/>
                                    <p className="mt-2 company" id="company">ООО “Пятерочка”</p>
                                </div>


                                <div className="mt-md-4 task" id='task_name'>
                                    <h3>Изменение пака иконок</h3>
                                    <input type="date" className="mt-2 date"/>
                                    <p className="mt-2 company" id="company">ООО “Пятерочка”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-2 d-flex flex-column justify-content-start in_process" id="in_process">
                        <div className="d-flex align-items-center feature">
                            <h3>В процессе</h3>
                            <p className='ms-2' id="count">3</p>
                        </div>
                        <div className="p-3 to-do-list">
                            <div className="m-0 p-2 p-md-3 ">
                                <div className="task" id='task_name'>
                                    <h3>Изменение пака иконок</h3>
                                    <input type="date" className="mt-2 date"/>
                                    <p className="mt-2 company" id="company">ООО “Пятерочка”</p>
                                </div>


                                <div className="mt-md-4 task" id='task_name'>
                                    <h3>Изменение пака иконок</h3>
                                    <input type="date" className="mt-2 date"/>
                                    <p className="mt-2 company" id="company">ООО “Пятерочка”</p>
                                </div>


                                <div className="mt-md-4 task" id='task_name'>
                                    <h3>Изменение пака иконок</h3>
                                    <input type="date" className="mt-2 date"/>
                                    <p className="mt-2 company" id="company">ООО “Пятерочка”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ms-2 d-flex flex-column justify-content-start finished" id="finished">
                        <div className="d-flex align-items-center feature">
                            <h3>Законченые</h3>
                            <p className='ms-2' id="count">3</p>
                        </div>
                        <div className=" p-3 to-do-list">
                            <div className="m-0 p-2 p-md-3 ">
                                <div className="task" id='task_name'>
                                    <h3>Изменение пака иконок</h3>
                                    <input type="date" className="mt-2 date"/>
                                    <p className="mt-2 company" id="company">ООО “Пятерочка”</p>
                                </div>


                                <div className="mt-md-4 task" id='task_name'>
                                    <h3>Изменение пака иконок</h3>
                                    <input type="date" className="mt-2 date"/>
                                    <p className="mt-2 company" id="company">ООО “Пятерочка”</p>
                                </div>


                                <div className="mt-md-4 task" id='task_name'>
                                    <h3>Изменение пака иконок</h3>
                                    <input type="date" className="mt-2 date"/>
                                    <p className="mt-2 company" id="company">ООО “Пятерочка”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;