import React from "react";
import "./Course.css";
import M from "./images/M.png";
import HTML from "./images/HTML.png";
import Algorithm from "./images/Algorithm.png";
import CSS from "./images/CSS.png";
import API from "./images/API.png";
import Security from "./images/Security.png";
import Audits from "./images/Audits.png";
import Testing from "./images/Testing.png";
import Javascript from "./images/Javascript.png";
import Component from "./images/Component.png";
import BuildTools from "./images/BuildTools.png";
import Frameworks from "./images/Frameworks.png";
import Collaboration from "./images/Collaboration.png";

export default function Course() {
  return (
    <>
      <div className="crs-selection">
        <img src={M} alt="M" />
        <span>Course Selection</span>
      </div>

      <br></br>
      <section>
        <div className="courses">
          <p>Please, select the courses that you are trying to learn</p>
        </div>
      </section>
      <br></br>

      <div className="container1">
        <div className="line1">
          <div className="html">
            <input type="checkbox" id="HTML"></input>
            <br></br>
            <img src={HTML} alt="HTML" />
            <h6>HTML</h6>
          </div>
          <div className="Algorithm">
            <input type="checkbox" id="Algorithm"></input>
            <br></br>
            <img src={Algorithm} alt="Algorithm" />
            <h6>Algorithm</h6>
          </div>

          <div className="CSS">
            <input type="checkbox" id="CSS"></input>
            <br></br>
            <img src={CSS} alt="CSS" />
            <h6>CSS</h6>
          </div>

          <div className="API">
            <input type="checkbox" id="API"></input>
            <br></br>
            <img src={API} alt="API" />
            <h6>API</h6>
          </div>

          <div className="Security">
            <input type="checkbox" id="Security"></input>
            <br></br>
            <img src={Security} alt="Security" />
            <h6>Security</h6>
          </div>

          <div className="Audits">
            <input type="checkbox" id="Audits"></input>
            <br></br>
            <img src={Audits} alt="Audits" />
            <h6>Audits</h6>
          </div>
        </div>

        <div className="line2">
          <div className="Testing">
            <input type="checkbox" id="Testing"></input>
            <br></br>
            <img src={Testing} alt="Testing" />
            <h6>Testing</h6>
          </div>

          <div className="Javascript">
            <input type="checkbox" id="Javascript"></input>
            <br></br>
            <img src={Javascript} alt="Javascript" />
            <h6>Javascript</h6>
          </div>

          <div className="Component">
            <input type="checkbox" id="Component"></input>
            <br></br>
            <img src={Component} alt="Component" />
            <h6>Component</h6>
          </div>

          <div className="BuildTools">
            <input type="checkbox" id="BuildTools"></input>
            <br></br>
            <img src={BuildTools} alt="BuildTools" />
            <h6>Build Tools</h6>
          </div>

          <div className="Frameworks">
            <input type="checkbox" id="Frameworks"></input>
            <br></br>
            <img src={Frameworks} alt="Frameworks" />
            <h6>Frameworks</h6>
          </div>
          <div className="Collaboration">
            <input type="checkbox" id="Collaboration"></input>
            <br></br>
            <img src={Collaboration} alt="Collaboration" />
            <h6>Collaboration</h6>
          </div>
        </div>
      </div>
      <footer>
        <button className="btn">Next</button>
      </footer>
    </>
  );
}
