import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Homepage from './components/PanelsHomepage/Homepage';
import LinksLanding from './components/LandingPages/LinksLanding';
import Navbar from './components/Navbar/Navbar';
// import meetTheTeam from './components/LandingPages/meetTheTeam'
import MeetTheTeam from './components/LandingPages/meetTheTeam';


function App() {
  return (
    <div className="App"
    >
    
      <Router>
 
         <Navbar />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/about">
            <MeetTheTeam />
          </Route>
        </Switch>

      </Router>
     
  
    </div>
  );
}

export default App;
