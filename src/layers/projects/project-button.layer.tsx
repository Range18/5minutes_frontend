import '../../styles/style_project.css'

function ProjectButton() {

    return (
        <div className="d-lg-inline-block mb-3 name_project">
            <a className="btn collapse_btn" data-bs-toggle="collapse" href="#name_pr_1" role="button"
               aria-expanded="false" aria-controls="name_pr_1"><h2>Estory</h2></a>
            <p id="date" className="date ">5 задач • До 12 января</p>
        </div>
    );
}

export default ProjectButton;