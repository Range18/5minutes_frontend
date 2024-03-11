
import React from "react";
import {IContact} from "../../shared/types/contact.type";
function Contact({name, about, contact}: IContact) {

    return (
        <div className="col-4 me-1 d-flex align-items-center link">
            <img src="" alt="" className="me-3 ps-2"/>
            <div className="links_text">
                <h3>{name}</h3>
                <p>{about} • {contact}</p>
            </div>
        </div>
    );
}


export default Contact;