
import './Navbar1.css'
import logo1 from './logo1.png'
import { Link } from "react-router-dom";
import React from 'react'
import mlogo from './mlogo.png';
function Navbar1() {
    return (
        <>
        <nav className="navbar1">
        <Link to="/"><img src={logo1} alt="logo" className="logo1"/><span className="mobile"><img src={mlogo} alt="logo" className="mobile_logo"/></span></Link>
           <Link to="/about">About Us</Link>
        </nav>
       </>
    )
}

export default Navbar1;
