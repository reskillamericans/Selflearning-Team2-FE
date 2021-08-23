import React from 'react';
import './MentorRegistration.css';
import Navbar1 from './Navbar1';
import mlogo from './mlogo.png';
import user_icon from './user-plus.png'
import { Link } from "react-router-dom";

function MentorRegistration() {
    return (
        <>
        <Navbar1 />
        <div className="main">
            <div className="mr_container">
                <div className="mr_title_container">
                    <img src={mlogo} alt="M logo" className="mlogo"/><span className="mr_mentor-title"> Mentor Registration</span>
                </div>
                <p className="provide-info">Please, provide the information below.</p>
                <form action="#">
                    <div className="mr_mentor-details">
                        <div className="mr_input-box">
                            <span className="details">Full Name*</span>
                            <input type="text" required/>
                        </div>
                        <div className="mr_input-box">
                            <span className="details">Email*</span>
                            <input type="email" required/>
                        </div>
                        <div className="mr_input-box">
                            <span className="details">Phone Number</span>
                            <input type="tel" />
                        </div>
                        <div className="mr_input-box">
                            <span className="details">Password*</span>
                            <input type="password" required/>
                        </div>
                    </div>
                    <div className="mr_button">
                    <Link to="/selectcourses"><button className="mr_register-btn" ><img src={user_icon } alt="small user icon"  className="user_icon" /> Register</button></Link>
                    </div>
                    
                </form>
                <div className="already-registered">
                    <Link to="/signin">Already Registered? Sign In></Link>
                    </div>
                
                    
                
            </div>
            
        </div>
        </>
    )
}

export default MentorRegistration
