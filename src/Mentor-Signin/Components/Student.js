import './Student.css'
import Jane from './images/Jane.png';
import Algorithim from './images/algorithim.png';
import Html from './images/html.png';
import CSS from './images/css.png';
import Security from './images/security.png';
import Navigation from './Navigation';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';




function Student(){ 
    return( 
        <>
        <Navigation/>
        <div className="student-container">
            <section className="student-top">
                <h3>Janes Profile</h3>
                    <img src={Jane} alt="Jane"/>
                    <figcaption>Jane</figcaption>
            </section>

            <form className="student-form" action="">
                <label for="name">Name</label><br/>
                <input id="name" type="text" name="name" placeholder="Jane Latifa"/><br/>

                <label for="telephone">Phone</label><br/>
                <input id="telephone" type="tel" name="phone" placeholder="+134533413345"/>
            </form>  

            <div className="social">
                <a href="https://www.twitter.com"><i class="fab fa-twitter"></i></a>
                <a href="https://www.gmail.com"><i class="far fa-envelope"></i></a>
                <a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
            </div>

            {/*you need to put the icons*/} 

            <section className="student-bottom">
                <h3>Courses Jane is Taking With You</h3>
                
                    <Carousel>
                
                        <div className="pic">
                        <img src={Html} alt="html"className="background"/>
                        <figcaption>HTML</figcaption>
                        </div>

                        <div >
                            <img src={Algorithim} alt="Algorithim"className="background"/>
                            <figcaption>Algorithim</figcaption>
                        </div>

                        <div >
                        <img src={CSS} alt="CSS"className="background"/>
                        <figcaption>CSS</figcaption>
                        </div>

                        <div >
                        <img src={Security} alt="security"className="background"/>
                        <figcaption>Security</figcaption>
                        </div>
                    </Carousel>
                    
               

            <a href="Profile"><button>Back to Profile</button></a>
        
        </section>
        </div>
        </>
    )
}

export default Student;