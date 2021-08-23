import React from "react";
import "./AboutUs.css";
import "./NavbarLP.js";
import hands from "./pics/hands.png";
import Navbar from "./NavbarLP.js";
import logo from "./pics/logo.png";
import text from "./pics/text.png";
import team from "./pics/team.png";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about_container">
      <div className="about-left-side">
        <img
          src={hands}
          className="hands"
          alt="hands stacked on top of each other"
        />
      </div>
      <div className="about-right-side">
        <Navbar />
        <img src={logo} alt="logo" className="logo5" />
        <img src={text} alt="about us " className="text" />
        <img src={team} alt="names of devs" className="team" />
        <div className="back-to-homepage">
        <Link to="/">Back to Homepage</Link>
        </div>
      </div>
      
    </div>
  );
}

export default AboutUs;
