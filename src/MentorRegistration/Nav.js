import React from 'react'
import './Nav.css';
import logo1 from './logo1.png'
import { Link } from "react-router-dom";
import mlogo from './mlogo.png';

function Nav() {
    return (
        <>
            <nav className="mentor-navbar">
                <img src={logo1} alt="logo" className="logo1"/><span className="mobile"><img src={mlogo} alt="logo" className="mobile_logo"/></span>
                <div className="nav-links">
                    <Link to="/signout">Sign Out</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/profile">Profile</Link>
                    

                </div>
            </nav>
            
        </>
    )
}

export default Nav
