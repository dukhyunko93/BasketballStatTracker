import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Navbar from './component/Navbar'
// import Footer from './container/Footer'
import HomePage from './container/HomePage'
import NewMatchForm from './container/NewMatchForm'
import StatSheet from './container/StatSheet'

function App(props){
    const { matchReducer, navBarReducer } = props
    return (
        <>
            <Navbar /> 
            <Router>
                <Route exact path="/" render={() => <HomePage />} />
                <Route exact path="/newmatchform" render={() => <NewMatchForm />} />
                <Route exact path="/statsheet" render={() => <StatSheet />} />
                {/* <Footer /> */}
            </Router>
        </>
    );
}
// export default App;

export default connect((state) => { return state })(App);