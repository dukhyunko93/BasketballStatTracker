import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Player from '../Component/Player'
import { FormControl, InputLabel, Input, FormHelperText, Button} from '@material-ui/core';
import nextId from "react-id-generator";

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

function HomeTeam (props){
    const classes = useStyles();
    let htmlId = nextId();

    const addPlayer = () => {
        props.setHomeTeamPlayers([
            ...props.homeTeamPlayers,{
                id: htmlId,
                firstName: "",
                lastName: "",
                jerseyNumber: "",
                position: "",
            }
        ])
    }

    const renderPlayers = () => {
        return props.homeTeamPlayers.map(player => 
            <Player
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
                <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                    <InputLabel>Home Team</InputLabel>
                    <Input id="home-team" name="homeTeam" value={props.homeTeamName} onChange={(e) => props.setHomeTeamName(e.target.value)} />
                    <FormHelperText>Type the team name.</FormHelperText>
                </FormControl>
            </div>
            {renderPlayers()}
            <Button id="add-player" onClick={addPlayer} >Add Player</Button>
        </>
    )
}

export default HomeTeam;