import React from 'react'
import NavMR from './NavMR';
import mlogo from './mlogo.png'
import './AllSet.css';
import celebrate from './celebrate.png';
import { Link } from "react-router-dom";

function AllSet() {
    return (
        <>
        <NavMR />
        <div className="main" >
        <div className="mr_mentor-container">
            <div className="mentor-welcome-title">
                <img src={mlogo} alt="M logo" className="mlogo"/><span className="mentor-welcome"> Welcome Mike!</span>
            </div>
            <div><p className="all_set">You are all set! You’ll be notified once a student asks for your help.</p></div>
            <div className="img-holder">
                <img src={celebrate} alt="celebration" className="celebrate-pic" />
            </div>
            <div className="mr_button">
                <Link to="/profile"><button className="profile_btn">Go to My Profile Page</button></Link>
              
            </div>
            
        </div>
        </div>
        
    </>
    )
}

export default AllSet
