import {Component} from 'react';
import Player from '../Component/Player'
import { FormControl, InputLabel, Input, MenuItem, Select} from '@material-ui/core';

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

    render(){
        return (
            <>
                <div>
                    <FormControl>
                        <InputLabel>Player Name</InputLabel>
                        <Input name="playerName" value={this.state.playerName} onChange={this.handleChange} />
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
                </div>
            </>
        )
    }
}

export default HomeTeam;