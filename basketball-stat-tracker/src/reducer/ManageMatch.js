export default function manageMatch(state = {
  homeTeamName: "",
  awayTeamName: "",
  homeTeamPlayers:[],
  awayTeamPlayers:[],
}, action) {
    switch (action.type) {
        case 'SAVE_MATCH':
            console.log(action)
            return {
                homeTeamName: action.match.homeTeamName,
                awayTeamName: action.match.awayTeamName,
                homeTeamPlayers: action.match.homeTeamPlayers,
                awayTeamPlayers: action.match.awayTeamPlayers,
            }
        
        default:
            return state;
    }
}