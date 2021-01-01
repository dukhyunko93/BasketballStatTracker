import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import HomePage from './container/HomePage'
import NewMatchForm from './container/NewMatchForm'
import StatSheet from './container/StatSheet'
import ExportPage from './container/ExportPage'

const App = (props) => {
    console.log(props)
    return (
        <>
            <Navbar /> 
            <Router>
                <Route exact path="/" render={() => <HomePage />} />
                <Route exact path="/newmatchform" render={() => <NewMatchForm />} />
                <Route exact path="/statsheet" render={() => <StatSheet />} />
                <Route exact path="/exportpage" render={() => <ExportPage />} />
            </Router>
            <Footer />
        </>
    );
}

export default connect((state) => { return state })(App);