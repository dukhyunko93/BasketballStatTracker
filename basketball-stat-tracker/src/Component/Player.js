import {Component} from 'react';
import Player from '../Component/Player'
import { Box, FormControl, InputLabel, Input, MenuItem, Select, Button} from '@material-ui/core';
import HighlightOff from '@material-ui/icons/HighlightOff';

class HomeTeam extends Component {
    state = {
        playerName: "",
        jerseyNumber: "",
        position: "",
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value}, () => {
            this.props.updatePlayerInfo(this.props.id, this.state)
        })
    }

    deletePlayer = e => {
        this.props.deletePlayer(this.props.id)
    }

    render(){
        return (
            <>
                <Box display="flex">
                    <FormControl>
                        <InputLabel>Player Name</InputLabel>
                        <Input id="player-name" name="playerName" value={this.state.playerName} onChange={this.handleChange} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Jersey Number</InputLabel>
                        <Input name="jerseyNumber" value={this.state.jerseyNumber} onChange={this.handleChange} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Position</InputLabel>
                        <Select style={{width: "80px"}} name="position" value={this.state.position} onChange={this.handleChange}>
                            <MenuItem value={"PG"}>PG</MenuItem>
                            <MenuItem value={"SG"}>SG</MenuItem>
                            <MenuItem value={"SF"}>SF</MenuItem>
                            <MenuItem value={"PF"}>PF</MenuItem>
                            <MenuItem value={"C"}>C</MenuItem>
                        </Select>
                    </FormControl>
                    <Button style={{minWidth: 10, position: "relative", marginTop: 15}} onClick={this.deletePlayer}>
                        <HighlightOff style={{color:"#ff6961"}} />
                    </Button>
                </Box>
            </>
        )
    }
}

export default HomeTeam;