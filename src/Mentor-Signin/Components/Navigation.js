import React from "react";
import "./Navigation.css";
import logo from "../../RoleSwitch/logo2.png";


function Navigation() {
  return (
    <div className="nav-bar">
      <a href="/">
      <img src={logo} alt="logo" /></a>

      <ul>
        <a href="Profile"><li>Profile</li></a>
        <a href="/About"><li>About Us</li></a> {/*how to get to about page*/}
        <a href=""><li>Sign Out</li></a>
      </ul>
    </div>
  );
}

export default Navigation;
