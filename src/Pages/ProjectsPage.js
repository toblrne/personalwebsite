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
        technologies: "HTML, SASS/SCSS, JavaScript, React",
        description: ["Hello this is a project Hello this is a project Hello this is a projectHello this is a project Hello this is a project Hello this is a project Hello this is a project Hello this is a project Hello this is a project Hello this is a project", "Hello"],
        date: "August 2022"

    },
    {
        title: "Recipe Management System (CPSC 210 Project)",
        technologies: "Java, Swing, JUnit",
        description: ["Hello this is a project", "Hello"]
    },
    {
        title: "Chat App",
        technologies: "HTML, CSS, JavaScript",
        description: ["Hello this is a project", "Hello"]
    },
    {
        title: "Statistical Analysis of Socioeconomic Factors on Income (DSCI 100 Project)",
        technologies: "R",
        description: ["Hello this is a project", "Hello"]
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
            image={elem.image}
        />
)


export default ProjectsPage;