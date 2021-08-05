
import './App.css';
import Home from './LandingPage/Components/Home';
import Tutors from './LandingPage/Components/Tutors';
import Courses from './LandingPage/Components/Courses';
import About from './LandingPage/Components/AboutUs';
import Registration from './StudentRegistration/component/Registration';
import Jane from './StudentRegistration/component/Jane';
import Course from './StudentRegistration/component/Course';
import Subjects from './StudentRegistration/component/Subjects';
import Mentor from './StudentRegistration/component/Mentor';
import Welldone from './StudentRegistration/component/Welldone';
import PageOne from './StudentSignIn/component/PageOne';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
          <Route exact path="/PageOne" component={PageOne} />
     


        </Switch>
      </>
    </Router>
  );
}

export default App;
