import React from "react";
import "./Welldone.css"
import "./Nav.js";
import lethelp from"./images/lethelp.png";
import M from "./images/M.png";
import Done from "./images/Done.png";


export default function Welldone() {
  return (
    <>
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
      <body>
        <div className="done">
          <img src={M} alt="M" />
          <span>
          Well-done!
          </span>
        </div>
      
      <main>
        <div className="celebrate">
          <p>
            You are all set! You'll be notified in your profile page once a
            Mentor accepts your request.
          </p>
        </div>

        <div>
          <img src={Done} alt="Done" />
        </div>

        <button className="btn">Go to My Profile Page</button>
      </main>
      </body>
    </>
  );
}
