  export default function manageMatch(state = {
    homeTeam: "",
    awayTeam: "",
    homeTeamPlayers:[],
    awayTeamPlayers:[],
  }, action) {
    switch (action.type) {
      
      case 'SAVE_MATCH':
        return {
          homeTeam: action.homeTeam,
          awayTeam: action.awayTeam,
          homeTeamPlayers:[action.homeTeamPlayers],
          awayTeamPlayers:[action.awayTeamPlayers],
        }
      
  
      default:
        return state;
    }
  }