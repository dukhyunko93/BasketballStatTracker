import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './container/Navbar'
import HomePage from './container/HomePage'
import NewMatchForm from './container/NewMatchForm'
import StatSheet from './container/StatSheet'

function App(){
    return (
      <Router>
        <Navbar />
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/newmatchform" render={() => <NewMatchForm />} />
        <Route exact path="/statsheet" render={() => <StatSheet />} />
      </Router>
    );
}

export default App;
