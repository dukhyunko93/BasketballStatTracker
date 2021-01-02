import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router";
import { saveMatch } from "../action/matchAction";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './NewMatchForm.css';
import NewTeamForm from '../component/NewTeamForm';
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
        if (team === "Home"){
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
        if (team === "Home"){
            setHomeTeamPlayers(
                homeTeamPlayers.filter(player => player.id !== id)
            )
        } else {
            setAwayTeamPlayers(
                awayTeamPlayers.filter(player => player.id !== id)
            )
        }
    }

    // testing with repopulated data
    const [homeTeamName, setHomeTeamName] = useState(matchExample.homeTeam);
    const [homeTeamPlayers, setHomeTeamPlayers] = useState(matchExample.homeTeamPlayers);
    const [awayTeamName, setAwayTeamName] = useState(matchExample.awayTeam);
    const [awayTeamPlayers, setAwayTeamPlayers] = useState(matchExample.awayTeamPlayers);

    // empty data
    // const [homeTeamName, setHomeTeamName] = useState(localStorage.getItem("homeTeamName") || "");
    // const [homeTeamPlayers, setHomeTeamPlayers] = useState(JSON.parse(localStorage.getItem("homeTeamPlayers")) || [ INITIAL_PLAYER_STATE ]);
    // const [awayTeamName, setAwayTeamName] = useState(localStorage.getItem("awayTeamName") || "");
    // const [awayTeamPlayers, setAwayTeamPlayers] = useState(JSON.parse(localStorage.getItem("awayTeamPlayers")) || [ INITIAL_PLAYER_STATE ]);

    const [redirect, setRedirect] = useState(false);

    const submitHandler = (e) => {
        props.saveMatch({
            homeTeamName: homeTeamName,
            homeTeamPlayers: homeTeamPlayers,
            awayTeamName: awayTeamName,
            awayTeamPlayers: awayTeamPlayers,
        })
        setRedirect(true)
        e.preventDefault()
    }

    useEffect(() => {
        localStorage.setItem("homeTeamName", homeTeamName);
        localStorage.setItem("homeTeamPlayers", JSON.stringify(homeTeamPlayers));
        localStorage.setItem("awayTeamName", awayTeamName);
        localStorage.setItem("awayTeamPlayers", JSON.stringify(awayTeamPlayers));
    });
    
    if (redirect) {
      return <Redirect to="/statsheet"/>;
    }

    return (
        <form onSubmit={(e) => submitHandler(e)} className="new-match-form">
            <div>
                <div className="team-form-container">
                    <div className="team-form">
                        <NewTeamForm
                            team="Home"
                            teamName={homeTeamName} 
                            teamPlayers={homeTeamPlayers} 
                            setTeamName={setHomeTeamName} 
                            setTeamPlayers={setHomeTeamPlayers}
                            updatePlayerInfo={updatePlayerInfo} 
                            deletePlayer={deletePlayer}
                        />
                    </div>
                    <div className="team-form">
                        <NewTeamForm 
                            team="Away"
                            teamName={awayTeamName} 
                            teamPlayers={awayTeamPlayers} 
                            setTeamName={setAwayTeamName} 
                            setTeamPlayers={setAwayTeamPlayers}
                            updatePlayerInfo={updatePlayerInfo} 
                            deletePlayer={deletePlayer}
                        />
                    </div>
                </div>
            </div>
            <div id="submit-btn">
                <Button type="submit" >Submit Teams</Button>
            </div>
        </form>
    );
}

const mapDispatchToProps = dispatch => {
    const combinedActions = {
        saveMatch,
    }
    return bindActionCreators(combinedActions, dispatch);
}

export default connect(null, mapDispatchToProps)(NewMatchForm);