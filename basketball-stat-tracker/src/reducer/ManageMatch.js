export default function manageMatch(state = {
    match:{
        homeTeamName: "",
        awayTeamName: "",
        homeTeamPlayers:[],
        awayTeamPlayers:[],
    }
}, action) {
    console.log(action)
    switch (action.type) {
        case 'SAVE_MATCH':
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