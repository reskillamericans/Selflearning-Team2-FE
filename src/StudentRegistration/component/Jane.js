import React from "react";
import "./Nav.js";
import M from "./images/M.png";
import lethelp from"./images/lethelp.png";
import "./Jane.css";


export default function Jane() {
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
      <a href="#">Profile</a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="#">Sign In</a>
      </li>
    </ul>
  </nav>
      <body>
        <div className="welcome">
          <img src={M} alt="M" />
          <span>Welcome Jane!</span>
        </div>

        <main>
          <div className="stdnt-info">
            <p>Set your preferable channels for learning </p>
          </div>

          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <div>
                  <span className="Twitter">Twitter </span>
                  <input type="text" placeholder="@username" />
                  
                </div>
                <div>
                  <span className="email">E-mail</span>
                  <input type="text" placeholder="user@domain.com" />
                </div>
              </div>

              <div className="input-box">
                <div>
                  <span className="Whatsapp">Whatsapp</span>
                  <input type="text" placeholder="+1xxx xxx xxxx" />
                </div>

                <div>
                  <span className="E-mail(2)">E-mail(2)</span>
                  <input type="text" placeholder="user@domain.com" />
                </div>
              </div>
            </div>
            <div className="link">
              <a href="#"> + Add More Channels </a>
            </div>
            <br></br>
            <button className="btn">Next</button>
          </form>
        </main>
      </body>
    </>
  );
}
