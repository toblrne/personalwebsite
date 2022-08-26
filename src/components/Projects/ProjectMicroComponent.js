import React from 'react';
import { IconContext } from 'react-icons'
import { FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'
import { CgWebsite } from 'react-icons/cg'

import { useSelector } from 'react-redux'
import './ProjectMicroComponent.scss'
import TechnologyIcon from './TechnologyIcon';

const ProjectMicroComponent = ({ title, github, technologies, devpost, description, date, demo }) => {

    const { mode } = useSelector((state) => state.toggleMode);

    const mappedTechnologies = technologies.map(elem => <TechnologyIcon elem={elem} />)

    return (
        <div className={`${"microcomponent-container"} ${mode}`}>
            <div className="project-title"> {title} &nbsp; <div className="date">{date} </div></div>
            <div className="project-header">
                <div className="technologies">{mappedTechnologies} </div>
            </div>
            <div className="project-description">
                {description}
            </div>
            <div className="combined-links">
                {github ? <a href={github} className={`${"single-link"} ${mode}`}> <FaGithub size={20} /> &nbsp; Github </a> : null} &nbsp; 
                {devpost ? (<a href={devpost} className={`${"single-link"} ${mode}`}>
                    <IconContext.Provider value={{ color: "#003e54" }}>
                        <SiDevpost size={20} />
                    </IconContext.Provider>&nbsp; Devpost </a>) : null} &nbsp; 
                {demo ? <a href={demo} className={`${"single-link"} ${mode}`}> <CgWebsite size={20} /> &nbsp;  Live Demo </a> : null}
            </div>
        </div>
    );
}

export default ProjectMicroComponent;