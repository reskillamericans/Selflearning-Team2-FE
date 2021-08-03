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
        <main>
            <div className="container">
                <div className="title_container">
                    <img src={mlogo} alt="M logo" className="mlogo"/><span className="mentor-title"> Mentor Registration</span>
                </div>
                <p className="provide-info">Please, provide the information below.</p>
                <form action="#">
                    <div className="mentor-details">
                        <div className="input-box">
                            <span className="details">Full Name*</span>
                            <input type="text" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">Email*</span>
                            <input type="email" required/>
                        </div>
                        <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input type="tel" />
                        </div>
                        <div className="input-box">
                            <span className="details">Password*</span>
                            <input type="password" required/>
                        </div>
                    </div>
                    <div className="button">
                    <Link to="/selectcourses"><button className="register-btn" ><img src={user_icon } className="user_icon" /> Register</button></Link>
                    </div>
                    
                </form>
                <div className="already-registered">
                    <Link to="/signin">Already Registered? Sign In></Link>
                    </div>
                
                    
                
            </div>
            
        </main>
        </>
    )
}

export default MentorRegistration
