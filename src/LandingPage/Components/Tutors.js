import React from "react";
import "./Navbar.js";
import "./Tutors.css";
import logo from "./pics/logo.png";
import Navbar from "./Navbar.js";
import group from "./pics/group.png";
import { Link } from "react-router-dom";

function Tutors() {
  return (
    <>
      <div className="tutors_container">
        <div className="tutors-left-side">
          <div className="top-left-text">Struggling with Self-Learning?</div>
        </div>
        <div className="tutors-right-side">
          <Navbar />
          <div>
            <Link to="/courses">
              <img
                src={group}
                alt=" profile pic,courses icons"
                className="group"
              />
            </Link>
          </div>

          <img src={logo} alt="logo" className="logo3" />
          <div className="sign">
            <Link to="/signup" className="signup">
              Sign Up
            </Link>
            <Link to="/signin" className="signin">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tutors;
