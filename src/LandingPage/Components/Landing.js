import React from "react";
import "./Landing.css";
import "./NavbarLP.js";
import logo from "./pics/logo.png";
import logo2 from "./pics/logo2.png";
import NavbarLP from "./NavbarLP.js";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="lp_home_container">
      <div className="home-left-side">
        <div className="top-left-text">Struggling with Self-Learning?</div>
      </div>
      <div className="home-right-side">
        <NavbarLP />
        <div className="lp_content">
          <p className="hold-text">Hold our App and</p>
          <img src={logo} className="lp_logo1" alt="m logo" />
          <img src={logo2} alt="m logo" className="lp_logo2" />
          <Link to="/SignUp">
            <button className="lp_btn">Sign Up</button>
          </Link>
          <div className="lp_registered">
            <Link to="/signin">Already Registered? Sign In</Link>
          </div>
          <div className="tutors">
            <Link to="/tutors">Show me tutors and courses</Link>
          </div>
          <div className="about-link">
            <Link to="/about">Learn more about us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
