import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/"> Home</NavLink>
            </li>
            <li>
                <NavLink to="/about"> about</NavLink>
            </li>
            <li>
                <NavLink to="/contact"> contact</NavLink>
            </li>
            <li>
                <NavLink to="/user"> users</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar