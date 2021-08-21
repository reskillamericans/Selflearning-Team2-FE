import './HomePage.css';
import Navigation from './Navigation';
import Anna from './images/Anna.png';
import Dorothy from './images/Dorothy.png';
import Lisa from './images/Lisa.png';
import Lana from './images/Lana.png';
import Phillip from './images/Phillip.png';
import Martin from './images/Martin.png';
import Jennifer from './images/Jennifer.jpg';
import Thomas from './images/Thomas.jpg';
import Kim from './images/Kim.jpg';
import logo from '../../RoleSwitch/logo1.png';
import Menu from './Menu';


function HomePage(){ 
    return( 
        <>
            <div className="main-nav-bar">
                    <Navigation />
            </div>

            <div className="home-container">
                <header className="head"> 
                    <div className="title">
                        <img src={logo} alt="logo"/>
                        <div>
                            <p>Welcome Mike!</p>
                            <a className="profile-info" href="/Profile"><small>Complete your profile info</small></a>
                        </div>
                    </div>
                    <p className="info">These are students seeking your help. Accept to send them a cofirmation with your contact</p>
                </header>

                <div className="grid-container">
                    <section>
                        <div className="box box1">
                        <div className="left">
                            <img src={Anna} alt="Anna"/>
                            <figcaption>Anna</figcaption>
                        </div>
                        <div>
                            <h4>HTML</h4>
                            <p>Needs help with:<br/> Syntax and forms</p><br/>
                        </div>
                        </div>
                        <div className="option">
                            <Menu/>
                        </div>
                    </section>
                    

                    <section>
                        <div className="box box2">
                        <div className="left">
                            <img src={Lisa} alt="Lisa"/>
                            <figcaption>Lisa</figcaption>
                        </div>
                        <div>
                            <h4>HTML</h4>
                            <p>Needs help with:<br/> Syntax and forms</p><br/>
                        </div>
                        </div>
                        <div className="option">
                            <Menu/>
                        </div>
                    </section>
                    

                    <section >
                        <div className="box box3">
                        <div className="left">
                            <img src={Lana} alt="Lana"/>
                            <figcaption>Lana</figcaption>
                        </div>
                        <div>
                            <h4>HTML</h4>
                            <p>Needs help with:<br/> Syntax and forms</p><br/>
                        </div>
                        </div>
                        <div className="option">
                             <Menu/>
                        </div>
                    </section>
                    

                    <section >
                        <div className="box box4">
                        <div className="left">
                            <img src={Phillip} alt="Phillip"/>
                            <figcaption>Phillip</figcaption>
                        </div>
                        <div >
                            <h4>CSS</h4>
                            <p>Needs help with:<br/> Selectors and Colors</p><br/>
                        </div>
                        </div>
                        <div className="option">
                            <Menu/>
                        </div>
                    </section>
                    

                    <section >
                        <div className="box box5">
                        <div className="left">
                            <img src={Martin} alt="Martin"/>
                            <figcaption>Martin</figcaption>
                        </div>
                        <div >
                            <h4>CSS</h4>
                            <p>Needs help with:<br/> Selectors and Colors</p><br/>
                        </div>
                        </div>
                        <div className="option">
                            <Menu/>
                        </div>
                    </section>
                    

                    <section >
                        <div className="box box6">
                        <div className="left">
                            <img src={Dorothy} alt="Dorothy"/>
                            <figcaption>Dorothy</figcaption>
                        </div>
                        <div >
                            <h4>CSS</h4>
                            <p>Needs help with:<br/> Selectors and Colors</p><br/>
                        </div>
                        </div>
                        <div className="option">
                            <Menu/>
                        </div>
                    </section>
                    

                    <section >
                        <div className="box box7">
                        <div className="left">
                            <img className="headshot" src={Jennifer} alt="Jennifer"/>
                            <figcaption>Jennifer</figcaption>
                        </div>
                        <div>
                            <h4>CSS</h4>
                            <p>Needs help with:<br/> Selectors and Colors</p><br/>
                        </div>
                        </div>
                        <div className="option">
                            <Menu/> 
                        </div>
                    </section>
                   

                    <section >
                        <div className="box box8">
                        <div className="left">
                            <img className="headshot" src={Thomas} alt="Thomas"/>
                            <figcaption>Thomas</figcaption>
                        </div>
                        <div >
                            <h4>CSS</h4>
                            <p>Needs help with:<br/> Selectors and Colors</p><br/>
                        </div>
                        </div>
                        <div className="option">
                            <Menu/>
                        </div>
                    </section>
                    

                    <section >
                        <div className="box box9">
                        <div className="left">
                            <img className="headshot" src={Kim} alt="Kim"/>
                            <figcaption>Kim</figcaption>
                        </div>
                        <div>
                            <h4>CSS</h4>
                            <p>Needs help with:<br/> Selectors and Colors</p><br/>
                        </div>
                        </div>
                        <div className="option">
                            <Menu/>
                        </div>
                    </section>
                    

                </div>

                <a href="/Profile"><button className="next">Next</button></a>
                {/*need to figure out how to make a link*/}

            </div>
        </>
    )
}

export default HomePage;