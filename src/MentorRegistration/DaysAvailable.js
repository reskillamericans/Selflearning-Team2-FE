import React from 'react'
import { Link } from "react-router-dom";
import Nav from './Nav';
import mlogo from './mlogo.png';
import days from './days.png';
import './DaysAvailable.css';
import mobile_days from './mobile_days.png';

function DaysAvailable() {
    return (
        <>
        <Nav />
        <main>
        <div className="mentor-container">
            <div className="mentor-welcome-title_days">
                <img src={mlogo} alt="M logo" className="mlogo"/><span className="mentor-welcome"> Welcome Mike!</span>
            </div>
            <div><p className="select-days">Select the days you are available to mentor.</p></div>
            <div className="img-holder">
                <img src={days} alt="calendar for days available" className="days-pic" /><img src={mobile_days} alt="calendar for days available" className="mobile_days-pic" />
            </div>
            <div className="button">
                <Link to="/channels"><button className="days_available_next-btn">Next</button></Link>
            </div>
            
        </div>
        </main>
        
    </>
    )
}

export default DaysAvailable
