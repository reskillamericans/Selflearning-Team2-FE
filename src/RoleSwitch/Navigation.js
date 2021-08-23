import React from "react";
import "./Navigation.css";
import logo from "./logo2.png";

function Navigation() {
  return (
    <div className="nav-bar">
      <img src={logo} alt="logo" />

      <ul className="ul">
        <li>Home</li>
        <li>About Us</li>
      </ul>
    </div>
  );
}

export default Navigation;
