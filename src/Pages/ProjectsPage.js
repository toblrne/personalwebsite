import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import ProjectMicroComponent from '../components/Projects/ProjectMicroComponent';
import Footer from '../components/Footer/Footer';

import { useSelector } from 'react-redux'

import "./ProjectsPage.scss"

const ProjectsPage = () => {

    const { mode } = useSelector((state) => state.toggleMode);

    return (
        <div className={`${"projectspage-container"} ${mode}`}>
            <div className={`${"secondaryprojectspage-container"} ${mode}`}>
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
        title: "This Day in History",
        github: "https://github.com/toblrne/wikidate",
        technologies: ["HTML", "SCSS", "JavaScript", "React.js", "Firebase"],
        description: "Web app that takes data from a Wikipedia API and randomly displays what event happened on a specific day.",
        demo: "https://wikidate.web.app/"

    },
    {
        title: "Personal Website",
        github: "https://github.com/toblrne/personalwebsite",
        technologies: ["HTML", "SCSS", "JavaScript", "React.js", "Redux", "Firebase"],
        description: "First iteration of my personal website. Implemented a light-dark mode toggle using Redux Toolkit. Deployed using Firebase. ",
        demo: "https://ryangao.dev"

    },
    {
        title: "Recipe Management System",
        technologies: ["Java", "Swing", "JUnit"],
        description: "CRUD application built using Java Swing. Allows users to view, add, vote on, save, and load recipes using a GUI."
    },
    {
        title: "Chat App",
        technologies: ["HTML", "CSS", "JavaScript", "React.js", "Firebase"],
        description: "Simple chat app that allows users to send and clear messages. Backend done with Firebase."
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
            demo={elem.demo}
        />
)


export default ProjectsPage;