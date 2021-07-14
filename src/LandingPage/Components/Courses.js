import React from 'react'
import './Courses.css';
import './Navbar.js';
import Navbar from './Navbar.js';
import {Link} from 'react-router-dom';
import coursesgroup from './pics/coursesgroup.png'
import logo from'./pics/logo.png';
function Courses() {
    return (
        <>
            <div className ="container">
            <div className="courses-left-side">
                <div className="top-left-text">Struggling with Self-Learning?</div>
                
            </div>
            <div className="courses-right-side">
                <Navbar />
            <div>
            <img src={coursesgroup} alt=" profile pic,courses icons" className="coursesgroup"/> 
           
            </div>
            
            <img src={logo} alt="logo" className="logo4"/>
            <div className="sign">
                <Link to="/signup"className="signup">Sign Up ></Link>
                <Link to="/signin"className="signin">Sign In ></Link>
            </div>

            </div>
            </div>
        </>
    )
};

export default Courses
