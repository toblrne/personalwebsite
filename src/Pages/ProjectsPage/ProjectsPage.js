import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Projects from '../../components/Projects/Projects'

import '../Pages.scss'

const ProjectsPage = () => {
    return (
        <div className="main-container">
            <Navbar />
            <div className="main-content-container">
                <Sidebar />
                <Projects />
            </div>
        </div>
    );
}

export default ProjectsPage;