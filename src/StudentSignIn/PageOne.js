import React from "react";
import "./PageOne.css";
import logo1 from "./images/Logo.png";
import logo2 from "./images/Logo2.png";
import InButton from "./images/InButton.png";


function PageOne() {
    return (
        <img class="logo1" src="./images/Logo.png" alt="Logo"/>
            <nav>
                <h2>About Us</h2>
            </nav>
        <header>
            <img class="logo2" src="./images/Logo2.png" alt=""/>
            <h2>Student Sign-In</h2>
        </header>
        <section class="login">
            <h2>Please, provide your login credentials</h2>
        <form>
            <label for="email">E-mail*</label><br/>
            <input type="text" id="email" name="email"/><br/>
            <label for="password">Password*</label><br/>
            <input type="text" id="password" name="password"/>
        </form>
            <p>Forgot Password? Click here!</p>
        </section>
        <div class="button">
            <img class="btn" src="./images/InButton.png" alt=""/>
            <button>Sign-In</button>
        </div>
    );
}

export default PageOne;

