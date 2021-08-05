import React from "react";
import "./PageThree.css";
import logo1 from "./images/Logo.png";
import profilepic from "./images/profilepic.png";
import star from "./images/star.png";
import arrow1 from "./images/arrow1.png";
import arrow2 from "./images/arrow2.png";
import X from "./images/X.png";
import close from "./images/close.png";
import AddNew from "./images/AddNew.png";
import pic1 from "./images/pice1.png";





function PageThree() {
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
                <h2>Your Profile</h2>
                <img class="logo2" src="./images/profilepic.png" alt=""/>
                <p>Change Photo</p>
            </header>

        <section class="info">

            <form class="section1">
                <label for="name">Name</label><br/>
                <input type="text" id="name" name="name" value=" Jane Latifa"/><br/>
                <img class="x1" src="./images/X.png" alt=""/>
                <img class="close1" src="./images/close.png" alt=""/>

                <label class="email" for="email">E-mail</label><br/>
                <input type="text" id="email" name="email" value="  jan_latifa@hotmail.com"/><br/>
                <img class="x2" src="./images/X.png" alt=""/>
                <img class="close2" src="./images/close.png" alt=""/>
            </form>

            <form class="section2">
                <label for="phone">Phone</label><br/>
                <input type="text" id="phone" name="phone" value=" +1 753 2341 3123"/><br/>
                <img class="x3" src="./images/X.png" alt=""/>
                <img class="close3" src="./images/close.png" alt=""/>

                <label class="password" for="password">Password*</label><br/>
                <input type="text" id="password" name="password" value=" ***************************"/>
                <img class="x4" src="./images/X.png" alt=""/>
                <img class="close4" src="./images/close.png" alt=""/>
            </form>
        </section >

   

        <div class="change">
                <div class="book">
                    <img src="./images/book.png" alt=""/>
                    <p>Change courses</p>
                </div>

                <div class="channels">
                    <img src="./images/channels.png" alt=""/>
                    <p>Change Channels</p>
                </div>
        </div>
        

    <section class="footer">
        <h2>Mentors helping you</h2>
                <ul class="mentors">
                    <li><img class="arrow1" src="./images/arrow1.png" alt=""/></li>
                    <li><img class="add" src="./images/AddNew.png" alt=""/></li>
                    <li><img src="./images/pic1.png" alt=""/></li>
                    <li><img src="./images/pic1.png" alt=""/></li>
                    <li><img src="./images/pic1.png" alt=""/></li>
                    <li><img class="star" src="./images/star.png" alt=""/></li>
                    <li><img class="arrow2" src="./images/arrow2.png" alt=""/></li>
                </ul>

                <ul class="names">
                    <li class="add" >Add New</li>
                    <li class="terry" >Terry</li>
                    <li class="nataly" >Nataly</li>
                    <li class="mike" >Mike</li>
                </ul>
    </section>
    );
}

export default PageThree;


    