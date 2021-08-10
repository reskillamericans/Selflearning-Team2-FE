import './Profile.css'
import Mike from './images/Mike.png';
import Navigation from './Navigation';
import Channel from './images/channel.svg';

import Slide from './Slide';




/*buttons to collapse the form*/
function Collapse1(){ 
    document.querySelector('.minimize1').style.display="none";
}

function Collapse2(){ 
    document.querySelector('.minimize2').style.display="none";
}
function Collapse3(){ 
    document.querySelector('.minimize3').style.display="none";
}
function Collapse4(){ 
    document.querySelector('.minimize4').style.display="none";
}



function Profile( ){ 
    return( 
        <>
            <Navigation/>
            <div className="profile-container"> 
                <div className="top">
                <h3>Your Profile</h3>
                <img src={Mike} alt="Mike"/><br/>
                <button>Change Photo</button>
                </div>

                <form className="profile-form" action=""> 
                    <div>
                    <label for="Name">Name</label><br/>
                    <input className="minimize1" id="Name" type="text" name="name" placeholder="Mike Ross"/> 
                    <button onClick={Collapse1}>-</button><br/>

                    <label for="email">E-mail</label><br/>
                    <input className="minimize2" id="email" type="email" name="email" placeholder="mikeross@gmail.com"/>
                    <button onClick={Collapse2}>-</button><br/>
                    </div>

                    <div>
                    <label for="telephone">Phone</label><br/>
                    <input className="minimize3" id="telephone" type="tel" name="phone" placeholder="+1XXX XXX XXXX"/>
                    <button onClick={Collapse3}>-</button><br/>

                    <label for="password">Password</label><br/>
                    <input className="minimize4"id="password" type="password" name="password" placeholder="********"/>
                    <button onClick={Collapse4}>-</button><br/>
                    </div>
                </form>

                <section className="links">
                <a href=""><i class="icon fas fa-book-open"></i>Change courses</a><br/>
                <a href=""><i class="icon far fa-calendar-alt"></i>Change days</a><br/>
                <a href=""><img className="icon" src={Channel} alt="channel link"/>Change channels</a><br/>
                <a href="HomePage"><i class="icon fas fa-user-check"></i>Help more students</a><br/>
                </section>

                <section className="bottom">
                    <h3>Students You helped</h3><br/>
                    
                        {/*this is where the student carousel goes
                        Not sure if I need to make the pics links???*/}
                    <Slide/>
                    
                    
                </section>
            </div>
        </>
    )
}

export default Profile;