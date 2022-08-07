import React from 'react'
import { Link } from "react-router-dom"

import './Navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="nav-element"> Home </Link>
            <Link to="/temp" className="nav-element"> Temporary </Link>
        </nav>
    );
}

export default Navbar;