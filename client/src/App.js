import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from './components/PanelsHomepage/Homepage';
import LinksLanding from './components/LandingPages/LinksLanding';
import Navbar from './components/Navbar/Navbar';
import MeetTheTeam from './components/LandingPages/meetTheTeam/meetTheTeam';
import ContactUs from './components/LandingPages/Contact/ContactUs';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App"
    >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
            <Footer/>
          </Route>
          <Route path="/aboutUs">
            <MeetTheTeam />
            <Footer/>
          </Route>
          <Route path="/contactUs">
            <ContactUs />
            <Footer/>
          </Route>
          <Route path="/quiz/question_1">
            {/* Cknow your strength comp herer */}
          </Route>
        
          {/* add more routes as pages become available  */}
        </Switch>

      </Router>
    </div>
  );
}

export default App;
