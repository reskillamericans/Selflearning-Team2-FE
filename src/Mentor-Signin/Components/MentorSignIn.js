import './signin.css';
import logo from '../../RoleSwitch/logo1.png';
import longlogo from "../../RoleSwitch/logo2.png";


function MentorSignIn(){ 
    return( 
        <> 
            <nav className="nav-bar">
                <a href="/">
                <img src={longlogo} alt="logo" /></a>
                <ul>
                    <a href="/About"><li className="li">About Us</li></a> {/*how to get to about page*/}
                </ul>
            </nav>
            {/*using the styling in navigation file*/}

            <div className="mentor-container">
               
                <header className="signin-title">
                    <img src={logo} alt="logo"/>
                <h3>Mentor Sign-In</h3>
                </header>

                <div className="interactive">
                    <p>Please, enter your sign-in information</p>
                    <div className="fill-in">
                        <form action="">
                            <label for="email">E-mail*</label><br/>
                            <input id="email" type="email" name="email"/><br/>
                        
                            <label for="password">Password*</label><br/>
                            <input id="password" type="password" name="password"/>
                        </form>

                        <a className="no-password" href="./home-page.js">Forgot Password?/Click here!</a><br/>
                        {/*Don't forget the link*/}
                        <a href="/HomePage"><button className='mentor-sign-in'><i class=" fas fa-sign-in-alt"></i>Sign-In</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MentorSignIn;