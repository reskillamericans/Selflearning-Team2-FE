
import './App.css';
import Home from './LandingPage/Components/Home';
import Tutors from './LandingPage/Components/Tutors';
import Courses from './LandingPage/Components/Courses';
import About from './LandingPage/Components/AboutUs';
import MentorSignIn from './Mentor-Signin/Components/MentorSignIn';
import HomePage from './Mentor-Signin/Components/HomePage';
import Profile from './Mentor-Signin/Components/Profile';
import Student from './Mentor-Signin/Components/Student';
import SignIn from './RoleSwitch/SignIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <>
        
        <Switch>

          <Route exact path="/" component={Home} />    
          <Route exact path="/tutors"  component={Tutors} />
          <Route exact path="/courses"  component={Courses} />
          <Route exact path="/about"  component={About} />
          <Route exact path="/MentorSignIn"  component={MentorSignIn} />
          <Route exact path="/HomePage"  component={HomePage} />
          <Route exact path="/Profile"  component={Profile} />
          <Route exact path="/Student"  component={Student} />
          <Route exact path="/SignIn"  component={SignIn} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
