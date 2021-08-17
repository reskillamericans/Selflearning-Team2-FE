import React from "react";
import lethelp from "./images/lethelp.png";
import "./Nav.css";
import M from './images/M.png'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li className='desktop-logo'>
          <img src={lethelp} alt="lethelp" />
        </li>
        <li className="mobile-logo">
        <img src={M} alt='M' />
        </li>
        <li>
        <a href="/">Profile</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Sign In</a>
        </li>
      </ul>
    </nav>
  );
}
