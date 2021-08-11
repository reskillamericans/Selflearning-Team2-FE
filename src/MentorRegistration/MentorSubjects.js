import React from 'react'
import './Subjects.css';
import { Link } from "react-router-dom";
import Nav from './Nav';
import mlogo from './mlogo.png';
import subjects from './subjects.png';
import mobile_subjects from './mobile_subjects.png';

function MentorSubjects() {
    return (
        <>
        <Nav />
        <main>
        <div className="mentor-container">
            <div className="mentor-welcome-title">
                <img src={mlogo} alt="M logo" className="mlogo"/><span className="mentor-welcome"> Welcome Mike!</span>
            </div>
            <div><p className="select-subject">Now set your level of proficiency in the subjects for<br></br> 
                each chosen course.</p></div>
            <div className="img-holder">
                <img src={subjects} alt="list of subjects" className="subjects-pic" /><img src={mobile_subjects} alt="list of subjects" className="mobile_subjects" />
            </div>
            <div className="button">
                <Link to="/days_available"><button className="subject_next-btn">Next</button></Link>
            </div>
            
        </div>
        </main>
        
    </>
    )
}

export default MentorSubjects
