import React, { useState } from 'react';
import { connect } from "react-redux";
import './NewMatchForm.css';
import AwayTeam from '../component/AwayTeam';
import HomeTeam from '../component/HomeTeam';
import {Button} from '@material-ui/core';
import nextId from "react-id-generator";

function NewMatchForm(){
    let htmlId = nextId();

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

    const [homeTeamName, setHomeTeamName] = useState("");
    const [homeTeamPlayers, setHomeTeamPlayers] = useState([
        {
            id: htmlId,
            firstName: "",
            lastName: "",
            jerseyNumber: "",
            position: "",
        },
    ]);
    const [awayTeamName, setAwayTeamName] = useState("");
    const [awayTeamPlayers, setAwayTeamPlayers] = useState([
        {
            id: htmlId,
            firstName: "",
            lastName: "",
            jerseyNumber: "",
            position: "",
        },
    ]);

    const submitHandler = (e) => {
        console.log(homeTeamName, homeTeamPlayers)
    }

    return (
        <div className="new-match-form">
            <div>
                <div className="team-form-container">
                    <div className="team-form">
                        <HomeTeam 
                          homeTeamName={homeTeamName} 
                          homeTeamPlayers={homeTeamPlayers} 
                          setHomeTeamName={setHomeTeamName} 
                          setHomeTeamPlayers={setHomeTeamPlayers}
                          updatePlayerInfo={updatePlayerInfo} 
                          deletePlayer={deletePlayer}
                        />
                    </div>
                    <div className="team-form">
                        <AwayTeam 
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

export default NewMatchForm;
