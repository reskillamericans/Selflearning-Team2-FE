
import React from "react";
import "./PageFive.css";
import logo1 from "./images/Logo.png";
import logo2 from "./images/Logo2.png";
import hat from "./images/hat.png"

function PageFive() {
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
                <h2>Well done!</h2>
            </header>

            <section class="message">
                <h2>You are all set! You'll be notified in your profile page <br/>
                <h>once a Mentor accepts your request.</h>

                <br/></h2>

                <img src="./images/hat.png" alt=""/>

                <div class="button">
                    <button>Go to My Profile Page</button>
                </div>
    </section>
  
    );
}

export default PageFive;




    