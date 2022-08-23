import React from 'react';
import './Footer.scss';

import { useSelector } from 'react-redux'

const Footer = () => {

    const { mode } = useSelector((state) => state.toggleMode);

    return (
        <footer className={mode}>
            <div className={`${"footer-container"} ${mode}`}>
                &copy; 2022 Ryan Gao. Powered by ReactJS, design inspiration from 
                <a className="source-link" href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/"> Minimal Mistakes</a>.
            </div>
        </footer>
    );
}

export default Footer;