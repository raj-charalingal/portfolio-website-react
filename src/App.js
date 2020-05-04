import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './contents/Home/Home';
import Skills from './contents/Skills/Skills';
import WorkHistory from './contents/Work-History/WorkHistory';
import Education from './contents/Education/Education';
import About from './contents/About/About';
import Contact from './contents/Contact/Contact';




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/portfolio-website-react/">
          <Home />
        </Route>
         <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/Education">
          <Education/>
        </Route>
        <Route path="/Skills">
          <Skills />
        </Route>
        <Route path="/WorkHistory">
          <WorkHistory/>
        </Route>
        <Route path="/Contact">
          <Contact/>
        </Route>
      </div>
    </Router>
    );
  }
  
  export default App;
  
