import React from "react";
import "./NavbarLP.css";
import { Link } from "react-router-dom";

function NavbarLP() {
  return (
    <nav className="navbarLP">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </div>
    </nav>
  );
}

export default NavbarLP;
