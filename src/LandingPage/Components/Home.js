import React from "react";
import "./Home.css";
import "./Navbar.js";
import logo from "./pics/logo.png";
import logo2 from "./pics/logo2.png";
import Navbar from "./Navbar.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_container">
      <div className="home-left-side">
        <div className="top-left-text">Struggling with Self-Learning?</div>
      </div>
      <div className="home-right-side">
        <Navbar />

        <main className="content">
          Hold our App and
          <img src={logo} className="logo1" alt="m logo" />
          <img src={logo2} alt="m logo" className="logo2" />
          <Link to="/SignUp">
            <button className="btn">Sign Up</button>
          </Link>
          <div className="registered">
            <Link to="/signin">Already Registered? Sign In</Link>
          </div>
          <div className="tutors">
            <Link to="/tutors">Show me tutors and courses</Link>
          </div>
          <div className="about-link">
            <Link to="/about">Learn more about us</Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
