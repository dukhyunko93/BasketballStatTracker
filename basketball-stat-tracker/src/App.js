import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { connect } from 'react-redux';
import Navbar from './container/Navbar'
// import Footer from './container/Footer'
import HomePage from './container/HomePage'
import NewMatchForm from './container/NewMatchForm'
import StatSheet from './container/StatSheet'

function App(props){
    const { manageMatch } = props
    return (
        <>
            <Navbar /> 
            {/* {props.manageNavBar.visibility ? <Navbar /> : null} */}
            <Router>
                <Route exact path="/" render={() => <HomePage />} />
                <Route exact path="/newmatchform" render={() => <NewMatchForm />} />
                <Route exact path="/statsheet" render={() => <StatSheet match={manageMatch} />} />
                {/* <Route exact path="/statsheet" render={() => <StatSheet match={props.manageMatch.match} visibility={props.manageNavBar.visibility}/>} /> */}
                {/* <Footer /> */}
            </Router>
        </>
    );
}
export default App;
