import React from "react";
import './Registration.css';
import logoone from './logo1.png';
import logo from './logo2.png';
import {
    BrowserRouter,
    Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import SignIn from './SignIn';
import Navigation from './Navigation';



function Registration() {

    return (
        <>
            <div className="main-nav-bar">
                <Navigation />
            </div>
            <div className="body-container">
                <div className="container">
                    <div className="photo-main">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="photo">
                        <img src={logoone} alt="logo" />
                    </div>


                    <div className="h1">What do you wish to register for?</div>

                    <div className="button-div">
                        <button>Register as Mentor</button>
                        <button>Register as Student</button>
                    </div>
                    <div className="sign-in">
                        <p>Already Registered?
                            <Link to="/signin">Sign In </Link>
                        </p>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Registration;