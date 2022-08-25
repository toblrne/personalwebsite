import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

import './Main.scss'


const Main = () => {

    const { mode } = useSelector((state) => state.toggleMode);

    return (
        <div className="homepagetext-container">
            <h1 className={`${"about-text"} ${mode}`}> About </h1>
            <div className={`${"main-text"} ${mode}`}>
                <p> Hello! </p>
                <p>
                    I'm a second year student studying computer science at the University of British Columbia in Vancouver, Canada.
                    I'm interested in web development and data science. Right now, I'm playing around with React and Java. When
                    I have spare time, I enjoy cooking the finest Polish cuisines.
                </p>
                <p> Feel free to take a look at some of my projects <Link to="/projects" className={`${"projects-links"} ${mode}`}> here </Link> </p>
            </div>
        </div>
    );
}

export default Main;
