import React from 'react'
import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../../redux/mode.js'

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

import { IconContext } from "react-icons"

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
            {mode === "dark" ?
                <button className={`${"mode-toggle"} ${mode}`} onClick={() => dispatch(toggle())}>
                    <IconContext.Provider value={{ color: "yellow" }}>
                        <BsFillSunFill />
                    </IconContext.Provider>  </button> :
                <button className={`${"mode-toggle"} ${mode}`} onClick={() => dispatch(toggle())}>
                    <BsFillMoonFill /> </button>}
        </nav> // 3
    );
}

export default Navbar;