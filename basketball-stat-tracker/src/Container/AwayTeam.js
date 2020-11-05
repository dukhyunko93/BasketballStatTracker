import {Component} from 'react';
import Player from '../Component/Player'
import nextId from "react-id-generator";
import { FormControl, InputLabel, Input, FormHelperText, Button} from '@material-ui/core';

class AwayTeam extends Component {
    state = {
        awayTeam: "",
        awayTeamPlayers: [],
        playerComponent: [],
    }

    htmlId = nextId();

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    updatePlayerInfo = (id, info) => {
        this.setState(prevState => ({
            awayTeamPlayers: prevState.awayTeamPlayers.map(
              player => player.id === id ? { ...player, playerName: info.playerName, jerseyNumber: info.jerseyNumber, position: info.position } : player
            )
          }), () => console.log(this.state.awayTeamPlayers))
    }

    deletePlayer = (id) => {
        let players = this.state.awayTeamPlayers.filter(player => player.id !== id)
        let playerComponents = this.state.playerComponent.filter(component => component.props.id !== id)
        this.setState({
            awayTeamPlayers: players,
            playerComponent: playerComponents,
        })
    }

    addPlayers = (htmlId) => {
        this.setState({
            playerComponent: [...this.state.playerComponent, 
                <Player 
                    key={this.state.awayTeamPlayers.length} 
                    id={htmlId} 
                    updatePlayerInfo={this.updatePlayerInfo}
                    deletePlayer={this.deletePlayer}
                />
            ],
            awayTeamPlayers: [...this.state.awayTeamPlayers, {
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
                    <h1>Away Team Roster</h1>
                    <FormControl>
                        <InputLabel>Away Team</InputLabel>
                        <Input id="away-team" name="awayTeam" value={this.state.awayTeam} onChange={this.handleChange} />
                        <FormHelperText>Type the team name.</FormHelperText>
                    </FormControl>
                </div>
                {this.state.playerComponent}
                <Button id="add-player" onClick={this.addPlayers} >Add Player</Button>
            </>
        )
    }
}

export default AwayTeam;