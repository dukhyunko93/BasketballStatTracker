import React from 'react';
import styled from "styled-components";
import NewPlayer from './NewPlayer'
import { FormControl, InputLabel, Input, FormHelperText, Button} from '@material-ui/core';
import nextId from "react-id-generator";

const FormControlContainer = styled(FormControl)`
    margin: 8px;
    width: 25ch;
`

function AwayTeam (props){
    let htmlId = nextId();

    const addPlayer = () => {
        props.setAwayTeamPlayers([
            ...props.awayTeamPlayers,{
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
        return props.awayTeamPlayers.map(player => 
            <NewPlayer 
                team="away"
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
                <h2>Away Team Roster</h2>
                <FormControlContainer>
                    <InputLabel>Away Team</InputLabel>
                    <Input id="away-team" name="awayTeam" value={props.awayTeamName} onChange={(e) => props.setAwayTeamName(e.target.value)} />
                    <FormHelperText>Type the team name.</FormHelperText>
                </FormControlContainer>
            </div>
            {renderPlayers()}
            <Button id="add-player" onClick={addPlayer} >Add Player</Button>
        </>
    )
}

export default AwayTeam;