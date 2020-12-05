import React, { useState } from 'react';
import { Redirect } from "react-router";
import { saveMatch } from "../action/matchAction";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './NewMatchForm.css';
import AwayTeamForm from '../component/AwayTeamForm';
import HomeTeamForm from '../component/HomeTeamForm';
import {Button} from '@material-ui/core';
import nextId from "react-id-generator";
import matchExample from "../component/TeamExample";

let htmlId = nextId();

const INITIAL_PLAYER_STATE = {
    id: htmlId,
    firstName: "",
    lastName: "",
    jerseyNumber: "",
    position: "",
    stats: {
        FGA: 0,
        FGM: 0,
        TPA: 0,
        TPM: 0,
        FTA: 0,
        FTM: 0,
        REB: 0,
        AST: 0,
        STL: 0,
        BLK: 0,
        TO: 0,
        PF: 0,
        PTS: 0,
    }
}

function NewMatchForm(props){
    const updatePlayerInfo = (id, info, team) => {
        if (team === "home"){
            setHomeTeamPlayers(
                homeTeamPlayers.map(
                    player => player.id === id 
                    ? { ...player, [info.name]: info.value}
                    : player
                )
            )
        } else {
            setAwayTeamPlayers(
                awayTeamPlayers.map(
                    player => player.id === id 
                    ? { ...player, [info.name]: info.value}
                    : player
                )
            )
        }
    }
    
    const deletePlayer = (id, team) => {
        if (team === "home"){
            setHomeTeamPlayers(
                homeTeamPlayers.filter(player => player.id !== id)
            )
        } else {
            setAwayTeamPlayers(
                awayTeamPlayers.filter(player => player.id !== id)
            )
        }
    }

    const [homeTeamName, setHomeTeamName] = useState(matchExample.homeTeam);
    const [homeTeamPlayers, setHomeTeamPlayers] = useState(matchExample.homeTeamPlayers);
    const [awayTeamName, setAwayTeamName] = useState(matchExample.awayTeam);
    const [awayTeamPlayers, setAwayTeamPlayers] = useState(matchExample.awayTeamPlayers);

    // const [homeTeamName, setHomeTeamName] = useState("");
    // const [homeTeamPlayers, setHomeTeamPlayers] = useState([ INITIAL_PLAYER_STATE ]);
    // const [awayTeamName, setAwayTeamName] = useState("");
    // const [awayTeamPlayers, setAwayTeamPlayers] = useState([ INITIAL_PLAYER_STATE ]);


    const [redirect, setRedirect] = useState(false);
    const submitHandler = () => {
        props.saveMatch({
            homeTeamName: homeTeamName,
            homeTeamPlayers: homeTeamPlayers,
            awayTeamName: awayTeamName,
            awayTeamPlayers: awayTeamPlayers,
        })
        setRedirect(true)
    }

    if (redirect) {
      return <Redirect to="/statsheet"/>;
    }

    return (
        <div className="new-match-form">
            <div>
                <div className="team-form-container">
                    <div className="team-form">
                        <HomeTeamForm 
                          homeTeamName={homeTeamName} 
                          homeTeamPlayers={homeTeamPlayers} 
                          setHomeTeamName={setHomeTeamName} 
                          setHomeTeamPlayers={setHomeTeamPlayers}
                          updatePlayerInfo={updatePlayerInfo} 
                          deletePlayer={deletePlayer}
                        />
                    </div>
                    <div className="team-form">
                        <AwayTeamForm 
                          awayTeamName={awayTeamName} 
                          awayTeamPlayers={awayTeamPlayers} 
                          setAwayTeamName={setAwayTeamName} 
                          setAwayTeamPlayers={setAwayTeamPlayers}
                          updatePlayerInfo={updatePlayerInfo} 
                          deletePlayer={deletePlayer}
                        />
                    </div>
                </div>
            </div>
            <div id="submit-btn">
                <Button onClick={submitHandler}>Submit Teams</Button>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    const combinedActions = {
        saveMatch,
    }
    return bindActionCreators(combinedActions, dispatch);
}

export default connect(null, mapDispatchToProps)(NewMatchForm);