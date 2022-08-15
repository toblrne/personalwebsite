import React from 'react';
import { FaGithub } from 'react-icons/fa'
import './Projects.scss'

const ProjectMicroComponent = () => {
    return (
        <div className='microcomponent-container'>

            <div className="project-title"> Personal Website </div>


            <div className="project-header">
                <a href="https://github.com/toblrne" className="github-link"> <FaGithub size={20} /> </a>
                <div className="technologies"> React, Firebase</div>
            </div>




        </div>

    );
}

export default ProjectMicroComponent;