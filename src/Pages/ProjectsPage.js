import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import ProjectMicroComponent from '../components/Projects/ProjectMicroComponent';

import "./ProjectsPage.scss"

const ProjectsPage = () => {
    return (
        <div className="projectspage-container">
            <Navbar />
            <div className="projectstext-container">
                {mappedProjects}

            </div>
        </div>
    );
}

const projectInformation = [
    {
        title: "Personal Website",
        github: "https://github.com/toblrne/personalwebsite",
        technologies: "React, Firebase",
        description: "Hello this is a project"
    }
]

const mappedProjects = projectInformation.map(
    elem =>
        <ProjectMicroComponent
            key={elem.title}
            title={elem.title}
            github={elem.github}
            technologies={elem.technologies}
            devpost={elem.devpost}
            description={elem.description}
        />
)




export default ProjectsPage;