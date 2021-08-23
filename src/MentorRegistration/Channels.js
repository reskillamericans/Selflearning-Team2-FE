import React from 'react'
import './Channels.css';
import NavMR from './NavMR';
import mlogo from './mlogo.png';
import { Link } from "react-router-dom";
import minusCircle from './minusCircle.png';

function Channels() {
    return (
        <>
        <NavMR />
        <div className="main">
        <div className="mr_mentor-container">
                <div className="mentor-welcome-title">
                    <img src={mlogo} alt="M logo" className="mlogo"/><span className="mentor-welcome_mike"> Welcome Mike!</span><span className="prefer_channels_text">Preferable Channels</span>
                </div>
                <p className="channels_text">Finally, set your preferable channels for teaching.</p>
                <form className="mr_form">
                    <div className="mentor-details">
                        <div className="Channels_input-box">
                            <span className="details">Twitter</span>
                            <input type="text" placeholder="@username" required/><img src={minusCircle} alt="small circle icon"  className="minuscircle" />
                        </div>
                        <div className="Channels_input-box">
                            <span className="details">Whatsapp</span>
                            <input type="tel" placeholder="+1 XXX XXX XXXX" required/><img src={minusCircle} alt="small circle icon"  className="minuscircle" />
                        </div>
                        <div className="Channels_input-box">
                            <span className="details">Email</span>
                            <input type="email" placeholder="user@domain.com" required /><img src={minusCircle} alt="small circle icon"  className="minuscircle" />
                        </div>
                        <div className="Channels_input-box">
                            <span className="details">Email(2)</span>
                            <input type="email" placeholder="user@domain.com" required/><img src={minusCircle} alt="small circle icon" className="minuscircle" />
                        </div>
                    </div>
                    <div className="more_channels">+ Add More Channels</div>
                    <div className="mr_button">
                    <Link to="/all_set"><button className="conclude-btn">Conclude</button></Link>
                    </div>
                    
                </form>
                
                
                    
                
            </div>
            
        </div>
        </>
    )
}

export default Channels
