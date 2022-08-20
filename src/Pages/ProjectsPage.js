import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import ProjectMicroComponent from '../components/Projects/ProjectMicroComponent';
import Footer from '../components/Footer/Footer';

import "./ProjectsPage.scss"

const ProjectsPage = () => {
    return (
        <div className="projectspage-container">
            <div>
                <Navbar />
                <div className="projectstext-container">
                    {mappedProjects}
                </div>
            </div>
            <Footer />
        </div>
    );
}

const projectInformation = [
    {
        title: "Personal Website",
        github: "https://github.com/toblrne/personalwebsite",
        technologies: "HTML, SASS/SCSS, React",
        devpost: "test",
        description: "Hello this is a project",
        date: "August 2022"
    },
    {
        title: "Recipe Management System (CPSC 210 Project)",
        technologies: "Java, Swing, JUnit",
        description: "dsalkdnas;klfmsld.kmgnf;lskdgmlksdmng"
    },
    {
        title: "Chat App",
        technologies: "HTML, CSS, React, Firebase",
        description: "dsalkdnas;klfmsld.kmgnf;lskdgmlksdmng"
    },
    {
        title: "Statistical Analysis of Socioeconomic Factors on Income (DSCI 100 Project)",
        technologies: "R, ggplot",
        description: "dsalkdnas;klfmsld.kmgnf;lskdgmlksdmng"
    },
    
]

const mappedProjects = projectInformation.map(
    elem =>
        <ProjectMicroComponent
            key={elem.title}
            title={elem.title}
            github={elem.github}
            technologies={elem.technologies}
            devpost={elem.devpost}
            description={elem.description}
            date={elem.date}
        />
)


export default ProjectsPage;