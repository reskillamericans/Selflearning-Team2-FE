import React from 'react'
import './MentorSubjects.css';
import { Link } from "react-router-dom";
import NavMR from './NavMR';
import mlogo from './mlogo.png';
import subjects from './subjects.png';
import mobile_subjects from './mobile_subjects.png';

function MentorSubjects() {
    return (
        <>
        <NavMR />
        <div className="main"> 
        <div className="mr_mentor-container">
            <div className="mentor-welcome-title">
                <img src={mlogo} alt="M logo" className="mlogo"/><span className="mentor-welcome"> Welcome Mike!</span>
            </div>
            <div><p className="select-subject">Now set your level of proficiency in the subjects for<br></br> 
                each chosen course.</p></div>
            <div className="img-holder">
                <img src={subjects} alt="list of subjects" className="subjects-pic" /><img src={mobile_subjects} alt="list of subjects" className="mobile_subjects" />
            </div>
            <div className="mr_button">
                <Link to="/days_available"><button className="subject_next-btn">Next</button></Link>
            </div>
            
        </div>
        </div>
        
    </>
    )
}

export default MentorSubjects
