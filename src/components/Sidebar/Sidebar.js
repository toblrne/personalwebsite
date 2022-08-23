import React from 'react'
import { IconContext } from "react-icons"
import { MdLocationPin } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'
import { useSelector } from 'react-redux'

import './Sidebar.scss'

// #35363a



const Sidebar = () => {

    const { mode } = useSelector((state) => state.toggleMode);

    return (
        <div className={`${"sidebar-container"} ${mode} `}>
            <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                className='profile-picture'
            />
            <div className={`${"header-text"} ${mode} `}>
                <div className="name"> Ryan Gao </div>
                <div className="description"> Computer Science @ UBC </div>
            </div>
            <div className="icons">
                <div className="icon-container">
                    <MdLocationPin size={25} />
                    <MdLocationPin size={25} />
                    <IconContext.Provider value={{ color: "#0077b5" }}>
                        <FaLinkedin size={20} />
                    </IconContext.Provider>
                    <FaGithub size={20} />
                    <IconContext.Provider value={{ color: "#003e54" }}>
                        <SiDevpost size={20} />
                    </IconContext.Provider>
                </div>
                <div className={`${"icon-text"} ${mode} `}>
                    <div>Vancouver, BC</div>
                    <div>UBC</div>
                    <a href="https://www.linkedin.com/in/ryangao01/" className="icon-link">Linkedin</a>
                    <a href="https://github.com/toblrne" className="icon-link">Github</a>
                    <a href="https://devpost.com/toblrne" className="icon-link">Devpost</a>
                </div>
            </div>
        </div >
    );
}

export default Sidebar;