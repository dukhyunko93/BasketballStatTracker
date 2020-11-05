import {Component} from 'react';
import AwayTeam from './AwayTeam'
import HomeTeam from './HomeTeam'
import {Button} from '@material-ui/core';

class InputForm extends Component{
  state = {
    homeTeam: "",
    homeTeamPlayer: [],
    awayTeam: "",
    awayTeamPlayer: [],
    date: "",
  }
  
  render(){
    return (
        <>
          <h1>Welcome to Free Basketball Stat Tracker</h1>
          <h3>Please enter team information to begin</h3>
          <div className="team-form">
            <div className="home-team-form">
                <HomeTeam homeTeam={this.state.homeTeam} handleChange={this.handleChange} />
            </div>
            <div className="away-team-form">
                <AwayTeam awayTeam={this.state.awayTeam} handleChange={this.handleChange} />
            </div>
          <Button id="submit-btn">Submit</Button>
          </div>
        </>
    );
  }
}

export default InputForm;
