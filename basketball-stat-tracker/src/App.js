import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import HomePage from './container/HomePage'
import NewMatchForm from './container/NewMatchForm'
import StatSheet from './container/StatSheet'
import ExportPage from './container/ExportPage'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar /> 
            <Switch>
                <Route exact path="/" render={() => <HomePage />} />
                <Route exact path="/newmatchform" render={() => <NewMatchForm />} />
                <Route exact path="/statsheet" render={() => <StatSheet new/>} />
                <Route exact path="/exportpage" render={() => <ExportPage />} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default connect((state) => { return state })(App);