
import './App.css';
import Landing from './LandingPage/Components/Landing';
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
import MentorSubjects from './MentorRegistration/MentorSubjects';




function App() {
  return (
    
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Landing} />
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
          <Route exact path="/mentor_subjects" component={MentorSubjects} />
          <Route exact path="/days_available" component={DaysAvailable} />
          <Route exact path="/all_set" component={AllSet} /> 
          <Route exact path="/channels" component={Channels} /> 
          
        </Switch>
      </>
    </Router>
  );
}

export default App;
