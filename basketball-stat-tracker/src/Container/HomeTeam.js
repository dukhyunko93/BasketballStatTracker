import {Component} from 'react';
import Player from '../Component/Player'
import nextId from "react-id-generator";
import { FormControl, InputLabel, Input, FormHelperText, Button} from '@material-ui/core';

class HomeTeam extends Component {
    htmlId = nextId();
    state = {
        homeTeam: "",
        homeTeamPlayers: [],
        playerComponenet: [],
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    updatePlayerInfo = (id, info) => {
        this.setState(prevState => ({
            homeTeamPlayers: prevState.homeTeamPlayers.map(
              player => player.id === id? { ...player, playerName: info.playerName, jerseyNumber: info.jerseyNumber, position: info.position }: player
            )
          }), () => console.log(this.state.homeTeamPlayers))
    }

    addPlayers = (htmlId) => {
        this.setState({
            playerComponenet: [...this.state.playerComponenet, <Player key={this.state.homeTeamPlayers.length} id={htmlId} updatePlayerInfo={this.updatePlayerInfo} />],
            homeTeamPlayers: [...this.state.homeTeamPlayers, {
                id: htmlId, 
                playerName: "",
                jerseyNumber: "",
                position: "",
            }]
        })
    }

    render(){
        return (
            <>
                <div>
                    <h1>Home Team Roster</h1>
                    <FormControl>
                        <InputLabel>Home Team</InputLabel>
                        <Input id="home-team" name="homeTeam" value={this.state.homeTeam} onChange={this.handleChange} />
                        <FormHelperText>Type the team name.</FormHelperText>
                    </FormControl>
                </div>
                {this.state.playerComponenet}
                <Button id="add-player" onClick={this.addPlayers} >Add Player</Button>
            </>
        )
    }
}

export default HomeTeam;