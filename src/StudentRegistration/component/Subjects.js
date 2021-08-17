import React from "react";
import "./Subjects.css";
import "./Nav.js";
import lethelp from"./images/lethelp.png";
import M from "./images/M.png";

export default function Subjects() {
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
      <div className="sbjcts-selection">
        <img src={M} alt="M" />
        <span>Subjects Selection</span>
      </div>
      <section>
        <div className="subjects">
          <p>Now select the subjects that you need help with</p>
        </div>
      </section>
      <div className="container">
        <div className="hyper">
          <h4>HTML</h4>
          <br></br>
          <div className="syntax1">
            <div className="radiosyn">
              <h5>Syntax</h5>
              <input type="radio" id="Syntax" name="HTML" />
            </div>

            <div className="radio-tags">
              <h5>Tags</h5>
              <input type="radio" id="Tags" name="HTML" />
            </div>

            <div className="radio-forms">
              <h5>Forms</h5>
              <input type="radio" id="Forms" name="HTML" />
            </div>

            <div className="radio-seo">
              <h5>SEO</h5>
              <input type="radio" id="SEO" name="HTML" />
            </div>

            <div className="radio-svg">
              <h5>SVG</h5>
              <input type="radio" id="SVG" name="HTML" />
            </div>
          </div>
        </div>

        <div className="cascading">
          <h4>CSS</h4>
          <br></br>
          <div className="syntax2">
            <div className="radiotax">
              <h5>Syntax</h5>
              <input type="radio" id="Syntax" name="CSS" />
            </div>

            <div className="radio-selectors">
              <h5>Selectors</h5>
              <input type="radio" id="Selectors" name="CSS" />
            </div>

            <div className="radio-layout">
              <h5>Layout</h5>
              <input type="radio" id="Layout" name="CSS" />
            </div>

            <div className="radio-flex">
              <h5>Flex</h5>
              <input type="radio" id="Flex" name="CSS" />
            </div>

            <div className="radio-grid">
              <h5>Grid</h5>
              <input type="radio" id="Grid" name="CSS" />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <button className="btn">Next</button>
      </footer>
    </>
  );
}
