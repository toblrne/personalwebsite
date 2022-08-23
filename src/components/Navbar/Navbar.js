import React from 'react'
import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../../redux/mode.js'

import './Navbar.scss'

const Navbar = () => {

    const { mode } = useSelector((state) => state.toggleMode); // 2
    const dispatch = useDispatch()

    return (
        <nav className={mode}>
            <div className="nav-elements" >
                <Link to="/" className={`${"nav-element"} ${mode}`}> Home </Link>
                <Link to="/projects" className={`${"nav-element"} ${mode}`}> Projects  </Link>
            </div>
            <button className="mode-toggle" onClick={() => dispatch(toggle())}> Toggle {mode}</button>
        </nav> // 3
    );
}

export default Navbar;