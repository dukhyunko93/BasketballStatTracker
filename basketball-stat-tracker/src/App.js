import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Container/Navbar'
import HomePage from './Container/HomePage'
import NewMatchForm from './Container/NewMatch/NewMatchForm'

function App(){
    return (
      <Router>
        <Navbar />
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/newmatchform" render={() => <NewMatchForm />} />
      </Router>
    );
}

export default App;
