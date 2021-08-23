import React from 'react'
import NavMR from './NavMR';
import mlogo from './mlogo.png'
import './SelectCourses.css';
import courses from './courses.png';
import { Link } from "react-router-dom";
import mobile_courses from './mobile_courses.png'
function SelectCourses() {
    return (
        <>
            <NavMR />
            <div className="main">
            <div className="mentor-container">
                <div className="mentor-welcome-title">
                    <img src={mlogo} alt="M logo" className="mlogo"/><span className="mentor-welcome"> Welcome Mike!</span>
                </div>
                <div><p className="select-course">Please, select the courses you are proficient in.</p></div>
                <div className="img-holder">
                    <img src={courses} alt="list of courses" className="courses-pic" /><img src={mobile_courses} alt="list of courses" className="mobile_courses-pic" />
                </div>
                <div className="mr_button">
                    <Link to="/mentor_subjects"><button className="select_courses_next-btn">Next</button></Link>
                </div>
                
            </div>
            </div>
            
        </>
    )
}

export default SelectCourses
