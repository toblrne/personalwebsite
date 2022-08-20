import React from 'react';
import { IconContext } from 'react-icons'
import { FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'


import './ProjectMicroComponent.scss'

const ProjectMicroComponent = ({ title, github, technologies, devpost, description, date }) => {
    const descriptionList = description.map(elem => <li style={{marginBottom: '5px'}}>{elem}</li>)

    return (
        <div className='microcomponent-container'>
            <div className="project-title"> {title} &nbsp; <div className="date">{date} </div></div>
            <div className="project-header">
                <div className="technologies">{technologies} </div>
            </div>
            <div className="project-description">
                <ul class="description-list">{descriptionList}</ul>
            </div>
            <div className="combined-links">
                {github ? <a href={github} className="single-link"> <FaGithub size={20} /> &nbsp; Github </a> : null} &nbsp; &nbsp;
                {devpost ? (<a href={devpost} className="single-link">
                    <IconContext.Provider value={{ color: "#003e54" }}>
                        <SiDevpost size={20} />
                    </IconContext.Provider>&nbsp; Devpost </a>) : null}
            </div>
        </div>
    );
}

export default ProjectMicroComponent;