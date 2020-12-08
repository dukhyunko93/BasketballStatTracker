import React from 'react';
import styled from "styled-components";
import NewPlayer from './NewPlayer'
import { FormControl, InputLabel, Input, FormHelperText, Button} from '@material-ui/core';
import nextId from "react-id-generator";

const FormControlContainer = styled(FormControl)`
    margin: 8px;
    width: 25ch;
`

function HomeTeam (props){
    let htmlId = nextId();

    const addPlayer = () => {
        props.setHomeTeamPlayers([
            ...props.homeTeamPlayers,{
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
        ])
    }

    const renderPlayers = () => {
        return props.homeTeamPlayers.map(player => 
            <NewPlayer
                team="home"
                key={player.id}
                id={player.id}
                firstName={player.firstName}
                lastName={player.lastName}
                jerseyNumber={player.jerseyNumber}
                position={player.position}
                updatePlayerInfo={props.updatePlayerInfo}
                deletePlayer={props.deletePlayer}
            />
        );
    }

    return (
        <>
            <div>
                <h2>Home Team Roster</h2>
                <FormControlContainer>
                    <InputLabel>Home Team</InputLabel>
                    <Input id="home-team" name="homeTeam" value={props.homeTeamName} onChange={(e) => props.setHomeTeamName(e.target.value)} />
                    <FormHelperText>Type the team name.</FormHelperText>
                </FormControlContainer>
            </div>
            {renderPlayers()}
            <Button id="add-player" onClick={addPlayer} >Add Player</Button>
        </>
    )
}

export default HomeTeam;