import React from 'react'
import { Link } from "react-router-dom"

import './Navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-elements">
                <Link to="/" className="nav-element"> Home </Link>
                <Link to="/temp" className="nav-element"> Temporary </Link>
            </div>
        </nav>
    );
}

export default Navbar;