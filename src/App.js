import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About/About';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Course from './components/Course/Course';
import NotFound from './components/NotFound/NotFound';
import { useEffect, useState } from 'react';
import Faq from './components/Faq/Faq';

function App() {
  const [services, setServices] = useState([])
  const [courses, setCourse] = useState([])
  useEffect(() => {
      fetch('/course.json')
          .then(res => res.json())
          .then(data => setCourse(data))
  }, [])
  useEffect(() => {
      fetch('/services.json')
          .then(res => res.json())
          .then(data => setServices(data))
  }, [])

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/service">
          <Services services={services} />
        </Route>
        <Route exact path="/course">
          <Course courses={courses} />
        </Route>
        <Route exact path="/faq">
          <Faq></Faq>
        </Route>
        <Route exact path="/">
          <Home courses={courses} services={services} />
        </Route>
        <Route  path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
