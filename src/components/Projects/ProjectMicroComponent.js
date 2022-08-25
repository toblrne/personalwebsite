import React from 'react';
import { IconContext } from 'react-icons'
import { FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'

import { useSelector } from 'react-redux'
import './ProjectMicroComponent.scss'

const ProjectMicroComponent = ({ title, github, technologies, devpost, description, date }) => {

    const { mode } = useSelector((state) => state.toggleMode);

    return (
        <div className={`${"microcomponent-container"} ${mode}`}>
            <div className="project-title"> {title} &nbsp; <div className="date">{date} </div></div>
            <div className="project-header">
                <div className="technologies">{technologies} </div>
            </div>
            <div className="project-description">
                {description}
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