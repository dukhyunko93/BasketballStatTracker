import {Component} from 'react';
import './App.css';
import { FormControl, InputLabel, Input, FormHelperText, TextField, Button} from '@material-ui/core';

class App extends Component{
  state = {
    homeTeam: "",
    awayTeam: "",
    date: "",
  }
  
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return (
      <div className="App">
        <h1>Welcome to Free Basketball Stat Tracker</h1>
        <form className="initial-input" autoComplete="off">
          <FormControl>
            <InputLabel id="home-team">Home Team</InputLabel>
            <Input name="homeTeam" value={this.state.homeTeam} onChange={this.handleChange} />
            <FormHelperText>Type the team name.</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel id="away-team">Away Team</InputLabel>
            <Input name="awayTeam" value={this.state.awayTeam} onChange={this.handleChange}/>
            <FormHelperText>Type the team name.</FormHelperText>
          </FormControl>     
          <FormControl>
            <TextField
            className="date"
            label="Match Date"
            name="date"
            type="date"
            value={this.state.date}
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            />
            <FormHelperText>Choose the match date.</FormHelperText>
          </FormControl> 
          <Button>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default App;
