import './App.css';
import Home from './LandingPage/Components/Home';
import Tutors from './LandingPage/Components/Tutors';
import Courses from './LandingPage/Components/Courses';
import About from './LandingPage/Components/AboutUs';
import Registration from './StudentRegistration/component/Registration'
import Jane from './StudentRegistration/component/Jane'
import Course from './StudentRegistration/component/Course'
import Subjects from './StudentRegistration/component/Subjects'
import Mentor from './StudentRegistration/component/Mentor'
import Welldone from './StudentRegistration/component/Welldone'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MentorRegistration from './MentorRegistration/MentorRegistration'
import SelectCourses from './MentorRegistration/SelectCourses';
import DaysAvailable from './MentorRegistration/DaysAvailable';
import AllSet from './MentorRegistration/AllSet';
import Channels from './MentorRegistration/Channels';
import MentorSignIn from './Mentor-Signin/Components/MentorSignIn';
import HomePage from './Mentor-Signin/Components/HomePage';
import Profile from './Mentor-Signin/Components/Profile';
import Student from './Mentor-Signin/Components/Student';
import SignIn from './RoleSwitch/SignIn'; 



function App() {
  return (
    
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Registration"  component={Registration} /> 
          <Route exact path="/Jane"  component={Jane} />
          <Route exact path="/Course"  component={Course} />
          <Route exact path="/Subjects"  component={Subjects} />
          <Route exact path="/Mentor"  component={Mentor} />
          <Route exact path="/Welldone"  component={Welldone} />
          <Route exact path="/tutors"  component={Tutors} />
          <Route exact path="/courses"  component={Courses} />
          <Route exact path="/about"  component={About} />
          <Route exact path="/mentor_registration" component={MentorRegistration} />
          <Route exact path="/selectcourses" component={SelectCourses} />
          <Route exact path="/subjects" component={Subjects} />
          <Route exact path="/days_available" component={DaysAvailable} />
          <Route exact path="/all_set" component={AllSet} /> 
          <Route exact path="/channels" component={Channels} /> 
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

export default App;/*
import './App.css';
import Home from './LandingPage/Components/Home';
import Tutors from './LandingPage/Components/Tutors';
import Courses from './LandingPage/Components/Courses';
import About from './LandingPage/Components/AboutUs';
import Registration from './StudentRegistration/component/Registration'
import Jane from './StudentRegistration/component/Jane'
import Course from './StudentRegistration/component/Course'
import Subjects from './StudentRegistration/component/Subjects'
import Mentor from './StudentRegistration/component/Mentor'
import Welldone from './StudentRegistration/component/Welldone'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MentorRegistration from './MentorRegistration/MentorRegistration'
import SelectCourses from './MentorRegistration/SelectCourses';
import DaysAvailable from './MentorRegistration/DaysAvailable';
import AllSet from './MentorRegistration/AllSet';
import Channels from './MentorRegistration/Channels';
import MentorSignIn from './Mentor-Signin/Components/MentorSignIn';
import HomePage from './Mentor-Signin/Components/HomePage';
import Profile from './Mentor-Signin/Components/Profile';
import Student from './Mentor-Signin/Components/Student';
import SignIn from './RoleSwitch/SignIn'; 




function App() {
  return (
    
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Registration"  component={Registration} /> 
          <Route exact path="/Jane"  component={Jane} />
          <Route exact path="/Course"  component={Course} />
          <Route exact path="/Subjects"  component={Subjects} />
          <Route exact path="/Mentor"  component={Mentor} />
          <Route exact path="/Welldone"  component={Welldone} />
          <Route exact path="/tutors"  component={Tutors} />
          <Route exact path="/courses"  component={Courses} />
          <Route exact path="/about"  component={About} />
          <Route exact path="/mentor_registration" component={MentorRegistration} />
          <Route exact path="/selectcourses" component={SelectCourses} />
          <Route exact path="/subjects" component={Subjects} />
          <Route exact path="/days_available" component={DaysAvailable} />
          <Route exact path="/all_set" component={AllSet} /> 
          <Route exact path="/channels" component={Channels} /> 
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

export default App;*/
