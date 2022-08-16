import React from 'react';
import { FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'


import './Projects.scss'

const ProjectMicroComponent = ({ title, github, technologies, devpost, description }) => {
    return (
        <div className='microcomponent-container'>
            <div className="project-title"> {title} &nbsp;
                <a href={github} className="github-link"> <FaGithub size={20} /> &nbsp; Github </a>
            </div>
            <div className="project-header">
                <div className="technologies"> Technologies: {technologies} </div>
                {devpost ? (<a href={devpost} className="devpost-link"> <SiDevpost size={20} /> &nbsp; Devpost </a>) : null}
            </div>

            <div className="project-description">
                {description}
            </div>
        </div>
    );
}

export default ProjectMicroComponent;