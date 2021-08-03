import React from 'react'
import Nav from './Nav';
import mlogo from './mlogo.png'
import './AllSet.css';
import celebrate from './celebrate.png';
import { Link } from "react-router-dom";

function AllSet() {
    return (
        <>
        <Nav />
        <main>
        <div className="mentor-container">
            <div className="mentor-welcome-title">
                <img src={mlogo} alt="M logo" className="mlogo"/><span className="mentor-welcome"> Welcome Mike!</span>
            </div>
            <div><p className="all_set">You are all set! You’ll be notified once a student asks for your help.</p></div>
            <div className="img-holder">
                <img src={celebrate} alt="celebration" className="celebrate-pic" />
            </div>
            <div className="button">
                <Link to="/profile"><button className="profile_btn">Go to My Profile Page</button></Link>
            </div>
            
        </div>
        </main>
        
    </>
    )
}

export default AllSet
