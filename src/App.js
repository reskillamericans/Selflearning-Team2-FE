import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navigation from './RoleSwitch/Navigation.js';
import SignIn from './RoleSwitch/SignIn.js';
import Registration from './RoleSwitch/Registration.js';


import {
  BrowserRouter as Router, Route,
  Link,
  BrowserRouter,
  Switch
}
  from "react-router-dom";


function App() {
  return (
    <>
<Router>
      <div className="App">
        <div className="">
          <BrowserRouter>
            <Switch>
              
              <Route exact path="/registration" component={Registration}/>
              
              <Route exact path="/signIn" component={SignIn}/>
             
            </Switch>
          </BrowserRouter> 
        </div>
      </div>
      </Router>
    </>


  );
}

export default App;
