import React from 'react'
import './NavMR.css';
import logo1 from './logo1.png'
import { Link } from "react-router-dom";
import mlogo from './mlogo.png';

function NavMR() {
    return (
        <>
            <nav className="mentor-navbar">
            <Link to="/"><img src={logo1} alt="logo" className="mr_logo1"/><span className="mobile"><img src={mlogo} alt="logo" className="mr_mobile_logo"/></span></Link>
                <div className="nav-links">
                    <Link to="/signout">Sign Out</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/profile">Profile</Link>
                    

                </div>
            </nav>
            
        </>
    )
}

export default NavMR
