import React from "react";
import "./Mentor.css";
import M from "./images/M.png";
import Anna from "./images/Anna.png";
import Lisa from "./images/Lisa.png";
import Lana from "./images/Lana.png";
import Phillip from "./images/Phillip.png";
import Martin from "./images/Martin.png";
import Dorothy from "./images/Dorothy.png";
import Accept from "./images/Accept.png";
import Skip from "./images/Skip.png";

export default function Mentor() {
  return (
    <>
      <body>
        <div className="mentor">
          <img src={M} alt="M" />
          <span>Mentor Selection</span>
        </div>

        <br></br>
        <section>
          <div className="select">
            <p>Select a Mentor</p>
          </div>
        </section>

        <div className="mentor-profile">
          <ul>
            <ul className="mentor1">
              <img src={Anna} alt="Anna" />
              <div>
                <a href="#">
                  <img src={Accept} alt="Accept" />
                  Accept
                </a>
                <a href="#">
                  <img src={Skip} alt="Skip" />
                  Skip
                </a>
              </div>
            </ul>

            <ul className="mentor1">
              <img src={Lisa} alt="lisa" />
              <div>
                <a href="#">
                  <img src={Accept} alt="Accept" />
                  Accept
                </a>
                <a href="#">
                  <img src={Skip} alt="Skip" />
                  Skip
                </a>
              </div>
            </ul>

            <ul className="mentor1">
              <img src={Lana} alt="Lana" />
              <div>
                <a href="#">
                  <img src={Accept} alt="Accept" />
                  Accept
                </a>
                <a href="#">
                  <img src={Skip} alt="Skip" />
                  Skip
                </a>
              </div>
            </ul>

            <ul className="mentor1">
              <img src={Phillip} alt="Phillip" />
              <div>
                <a href="#">
                  <img src={Accept} alt="Accept" />
                  Accept
                </a>
                <a href="#">
                  <img src={Skip} alt="Skip" />
                  Skip
                </a>
              </div>
            </ul>

            <ul className="mentor1">
              <img src={Martin} alt="Martin" />
              <div>
                <a href="#">
                  <img src={Accept} alt="Accept" />
                  Accept
                </a>
                <a href="#">
                  <img src={Skip} alt="Skip" />
                  Skip
                </a>
              </div>
            </ul>

            <ul className="mentor1">
              <img src={Dorothy} alt="Dorothy" />
              <div>
                <a href="#">
                  <img src={Accept} alt="Accept" />
                  Accept
                </a>
                <a href="#">
                  <img src={Skip} alt="Skip" />
                  Skip
                </a>
              </div>
            </ul>
          </ul>
        </div>

        <br></br>
        <footer>
          <button className="btn">Next</button>
        </footer>
      </body>
    </>
  );
}
