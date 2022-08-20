import React from 'react';
import { IconContext } from 'react-icons'
import { FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'


import './Projects.scss'

const ProjectMicroComponent = ({ title, github, technologies, devpost, description, date }) => {
    return (
        <div className='microcomponent-container'>
            <div className="project-title"> {title} &nbsp;
                <div className="combined-links">
                    {github ? <a href={github} className="single-link"> <FaGithub size={20} /> &nbsp; Github </a> : null} &nbsp; &nbsp;
                    {devpost ? (<a href={devpost} className="single-link">
                        <IconContext.Provider value={{ color: "#003e54" }}>
                            <SiDevpost size={20} />
                        </IconContext.Provider>&nbsp; Devpost </a>) : null}
                </div>
            </div >
            <div className="project-header">
                <div className="technologies"> Technologies: {technologies} </div> <div className="date">{date} </div>

            </div>

            <div className="project-description">
                {description}
            </div>
        </div >
    );
}

export default ProjectMicroComponent;