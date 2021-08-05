import React from "react";
import "./PageTwo.css";
import logo1 from "./images/Logo.png";
import logo2 from "./images/Logo2.png";
import sparkle from "./images/sparkle.png";

function PageTwo() {
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
                <h2>Welcome Jane</h2>
                <a href="#">Complete your profile info</a>
             </header>

            <section class="message">
                <h2>Mentor Mike has just accepted to help you!</h2>

                <img src="./images/sparkle.png" alt=""/>

                    <div class="button">
                        <button>Check Mike's Profile</button>
                        <p>Go to my Profile</p>
                    </div>
            </section>
            
    );
}

export default PageTwo;



