import React from "react";
function Note({title, description}:INote) {

    return (
        <div className="col-4 me-1 d-flex align-items-center link">
            <img src="" alt="" className="me-3 ps-2"/>
            <div className="links_text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export interface INote {
    title: string,
    description: string
}

export default Note;