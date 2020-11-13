import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Player from '../Component/Player'
import nextId from "react-id-generator";
import { FormControl, InputLabel, Input, FormHelperText, Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
}));

function AwayTeam (props){
    const classes = useStyles();
    let htmlId = nextId();

    const addPlayer = () => {
        props.setAwayTeamPlayers([
            ...props.awayTeamPlayers,{
                id: htmlId,
                firstName: "",
                lastName: "",
                jerseyNumber: "",
                position: "",
            }
        ])
    }

    const renderPlayers = () => {
        return props.awayTeamPlayers.map(player => 
            <Player 
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
                <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                    <InputLabel>Away Team</InputLabel>
                    <Input id="away-team" name="awayTeam" value={props.awayTeamName} onChange={(e) => props.setAwayTeamName(e.target.value)} />
                    <FormHelperText>Type the team name.</FormHelperText>
                </FormControl>
            </div>
            {renderPlayers()}
            <Button id="add-player" onClick={addPlayer} >Add Player</Button>
        </>
    )
}

export default AwayTeam;