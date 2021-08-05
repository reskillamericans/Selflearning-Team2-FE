
import React from "react";
import "./PageFour.css";
import logo1 from "./images/Logo.png";
import logo2 from "./images/Logo2.png";
import courses from "./images/courses.png";


function PageFour() {
    return (
        <img class="logo1" src="./images/Logo.png" alt="Logo"/>
            <nav>
                <ul class="navbar">
                    <li>Profile</li>
                    <li>Abouts Us</li>
                    <li>Sign Out</li>
                </ul>
            </nav>

            <header>
                <img class="logo2" src="./images/Logo2.png" alt=""/>
                <h2>Welcome Jane!</h2>
            </header>

            <section class="message">
                <h2>Please, select the courses you are trying to learn.</h2>

                <img src="./images/courses.png" alt=""/>

                <div class="button">
                    <button>Next</button>
                </div>
            </section>
  
    );
}

export default PageFour;
    
    
    