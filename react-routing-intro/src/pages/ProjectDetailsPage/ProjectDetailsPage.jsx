import { Link, useParams } from "react-router-dom";
import projectsData from './../projects-data.json'
import { useState } from "react";

function ProjectDetailsPage() {

    const { projectId } = useParams()

    const selectedProject = projectsData.find(eachProject => eachProject._id === projectId)

    const [project, setProject] = useState(selectedProject)


    return (
        <div>

            <h2>Detalles de proyecto {project.name}</h2>

            <hr />

            <p>Deatlles de proyecto: {project.description}</p>
            <p>Tecnologías: {project.technologies}</p>
            <hr />

            <Link to={'/proyectos'}>Volver al listado de proyectos</Link>
        </div>
    );
}

export default ProjectDetailsPage