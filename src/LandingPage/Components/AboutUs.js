import React from 'react'
import './AboutUs.css';
import './Navbar.js';
import hands from './pics/hands.png';
import Navbar from './Navbar.js';
import logo from './pics/logo.png'
import text from './pics/text.png';
import team from './pics/team.png';


function AboutUs() {
    return (
        <div className ="container">
            <div className="about-left-side">
                <img src ={hands} className = "hands" alt ="hands stacked on top of each other" />
            </div>
            <div className="about-right-side">
                <Navbar />
                <img src={logo} alt="logo" className="logo5"/>   
                <img src={text} alt="about us " className="text"/>
                <img src={team} alt="names of devs" className="team"/>
                
            

            </div>
           
        </div>        
    )
};

export default AboutUs
