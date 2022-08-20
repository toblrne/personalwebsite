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
        technologies: "HTML, SCSS, JavaScript, React.js, Redux, Firebase",
        description: "First iteration of my personal website. Implemented a light-dark mode toggle using Redux. Deployed using Firebase. ",

    },
    {
        title: "Recipe Management System",
        technologies: "Java, Swing, JUnit",
        description: "CRUD application built using Java Swing. Allows users to view, add, vote on, save, and load recipes."
    },
    {
        title: "Chat App",
        technologies: "HTML, CSS, JavaScript, React.js, Firebase",
        description: "Simple chat app that allows users to send and clear messages. Deployed using Firebase."
    } 
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