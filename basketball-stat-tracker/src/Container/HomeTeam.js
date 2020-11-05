import {Component} from 'react';
import Player from '../Component/Player'
import nextId from "react-id-generator";
import { FormControl, InputLabel, Input, FormHelperText, Button} from '@material-ui/core';

class HomeTeam extends Component {
    state = {
        homeTeam: "",
        homeTeamPlayers: [],
        playerComponent: [],
    }

    htmlId = nextId();

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    updatePlayerInfo = (id, info) => {
        this.setState(prevState => ({
            homeTeamPlayers: prevState.homeTeamPlayers.map(
              player => player.id === id ? { ...player, playerName: info.playerName, jerseyNumber: info.jerseyNumber, position: info.position } : player
            )
        }))
    }

    deletePlayer = (id) => {
        let players = this.state.homeTeamPlayers.filter(player => player.id !== id)
        let playerComponents = this.state.playerComponent.filter(component => component.props.id !== id)
        this.setState({
            homeTeamPlayers: players,
            playerComponent: playerComponents,
        })
    }

    addPlayers = (htmlId) => {
        this.setState({
            playerComponent: [...this.state.playerComponent, 
                <Player 
                    key={this.state.homeTeamPlayers.length} 
                    id={htmlId} 
                    updatePlayerInfo={this.updatePlayerInfo}
                    deletePlayer={this.deletePlayer}
                />
            ],
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
                {this.state.playerComponent}
                <Button id="add-player" onClick={this.addPlayers} >Add Player</Button>
            </>
        )
    }
}

export default HomeTeam;