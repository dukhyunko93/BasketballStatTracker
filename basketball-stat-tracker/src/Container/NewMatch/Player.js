import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, FormControl, InputLabel, Input, MenuItem, Select, Button} from '@material-ui/core';
import HighlightOff from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(0),
    },
    inputField: {
        width: "120px",
    }
}));
function Player (props){
    const classes = useStyles();
    
    const onChange = (e) => {
        props.updatePlayerInfo(props.id, e.target, props.team)
    }

    return (
        <>
            <Box display="flex">
                <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                    <InputLabel>First Name</InputLabel>
                    <Input name="firstName" value={props.firstName} onChange={onChange} />
                </FormControl>                                
                <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                    <InputLabel>Last Name</InputLabel>
                    <Input name="lastName" value={props.lastName} onChange={onChange} />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                    <InputLabel>Jersey #</InputLabel>
                    <Input alue={props.jerseyNumber} onChange={onChange} />
                </FormControl>
                <FormControl className={clsx(classes.withoutLabel, classes.inputField)}>
                    <InputLabel>Position</InputLabel>
                    <Select name="position" value={props.position} onChange={onChange}>
                        <MenuItem value={"PG"}>PG</MenuItem>
                        <MenuItem value={"SG"}>SG</MenuItem>
                        <MenuItem value={"SF"}>SF</MenuItem>
                        <MenuItem value={"PF"}>PF</MenuItem>
                        <MenuItem value={"C"}>C</MenuItem>
                    </Select>
                </FormControl>
                <Button style={{minWidth: 10, position: "relative", marginTop: 30}} onClick={() => props.deletePlayer(props.id, props.team)}>
                    <HighlightOff style={{color:"#ff6961"}} />
                </Button>
            </Box>
        </>
    )
}

export default Player;