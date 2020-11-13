import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './container/Navbar'
import HomePage from './container/HomePage'
import NewMatchForm from './container/NewMatchForm'

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
