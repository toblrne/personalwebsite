import React from 'react';
import { MdLocationPin } from 'react-icons/md'

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
                <div className="name"> Ryan Gao</div>
                <div className="description"> Second-year computer science student at the University of British Columbia </div>
            </div>
            <div className="icons">
                <div className="location">
                    <MdLocationPin size={25} /> Vancouver, BC
                </div>
                <div className="school">
                    <MdLocationPin size={25} /> UBC
                </div>
                <div className="school">
                    <MdLocationPin size={25} /> Linkedin
                </div>

                <div className="school">
                    <MdLocationPin size={25} /> Github
                </div>
                <div className="school">
                    <MdLocationPin size={25} /> Devpost
                </div>



            </div>



        </div>

    );
}

export default Sidebar;