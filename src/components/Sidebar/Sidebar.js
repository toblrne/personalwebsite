import React from 'react';
import { MdLocationPin } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'

import './Sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                className='profile-picture'
            />
            <div className="header-text">
                <div className="name"> Ryan Gao </div>
                <div className="description"> Second-year computer science student at the University of British Columbia </div>
            </div>
            <div className="icons">
                <div className="icon-container">
                    <MdLocationPin size={25} />
                    <MdLocationPin size={25}/>
                    <FaLinkedin size={20} /> 
                    <FaGithub size={20} />
                    <SiDevpost size={20}/>
                </div>
                <div className="icon-text">
                    <div>Vancouver, BC</div>
                    <div>UBC</div>
                    <div>Linkedin</div>
                    <div>Github</div>
                    <div>Devpost</div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;