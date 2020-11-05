import {Component} from 'react';
import { FormControl, InputLabel, Input, FormHelperText, TextField, Button} from '@material-ui/core';

function AwayTeam(props) {
    return (
        <div>
            <h1>Away Team Roster</h1>
            <FormControl>
                <InputLabel id="away-team">Away Team</InputLabel>
                <Input name="awayTeam" value={props.awayTeam} onChange={props.handleChange} />
                <FormHelperText>Type the team name.</FormHelperText>
            </FormControl>
        </div>
    )
}

export default AwayTeam;