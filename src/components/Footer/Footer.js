import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                &copy; 2022 Ryan Gao. Powered by ReactJS, design inspiration from 
                <a className="source-link" href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/"> Minimal Mistakes</a>.
            </div>
        </footer>
    );
}

export default Footer;