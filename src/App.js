import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './contents/Home';
import Skills from './contents/Skills';
import Work_history from './contents/Work_histoy';





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
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/Work_history">
          <Work_history/>
        </Route>
      </div>
    </Router>
    );
  }
  
  export default App;
  
