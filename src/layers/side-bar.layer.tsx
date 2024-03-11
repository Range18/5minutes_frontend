import React from "react";
import workImage  from '../assets/work.png'
import calendarImage  from "../assets/Calendar.png"
import activityImage  from "../assets/Activity.png"
import notificationImage  from "../assets/Notification.png"
import unionImage  from "../assets/Union.png"
export function SideBar() {
    //TODO
    return (
        <ul className="nav fixed-top  m-2 d-flex navbar mb-5 align-content-center justify-content-center">
            <li className="">
                <a href="/projects/my" className="nav-item p-3"><img src={workImage} alt="" id="logo" style={{backgroundColor: '#F8F8FA'}}/></a>
            </li>
            <li className="p-3 nav-item">
                <a href="/tasks" className="nav-item p-3"><img src={calendarImage} alt="" id="logo"/></a>
            </li>
            <li className="p-3 nav-item ">
                <a href="analytics.html" className="nav-item p-3"><img src={activityImage} className="icon3" alt="" id="icon" /></a>
            </li>
            <li className="p-3 nav-item">
                <a href="" className="nav-item p-3"><img src={notificationImage} className="icon4" alt="" id="icon"/></a>
            </li>
            <li className="p-3 nav-item">
                <a href="" className="nav-item p-3"><img src={unionImage} className="icon5" alt="" id="icon"/></a>
            </li>
        </ul>
    );
}
