import './SignIn.css';
import logoone from './logo1.png';
import logo from './logo2.png';
import {
    BrowserRouter,
    Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import Registration from './Registration';
import Navigation from './Navigation';



function SignIn() {

    return (
        <>
            <div className="main-nav-bar">
                <Navigation />
            </div>
            <div className="signin-body-container">
                <div className="signin-container">
                    <div className="photo-main">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="photo">
                        <img src={logoone} alt="logo" />
                    </div>


                    <div className="h1">How do you wish to Sign In?</div>

                    <div className="button-div">
                        <a href="/MentorSignIn"><button className="signin-button">Sign-In as Mentor</button></a>
                        <button className="signin-button">Sign-In as Student</button>
                    </div>
                    <div className="sign-in">
                        <p>Already Registered?
                            
                            <Link to="/registration">Sign Up</Link>
                            
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;