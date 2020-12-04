const INITIAL_STATE = {
    match:{
        homeTeamScore: "",
        awayTeamScore: "",
        homeTeamInfo: {},
        awayTeamInfo:{},
    }
};

export default function manageMatch(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SAVE_MATCH':
            return {
                homeTeamName: action.match.homeTeamScore,
                awayTeamName: action.match.awayTeamScore,
                homeTeamPlayers: action.match.homeTeamInfo,
                awayTeamPlayers: action.match.awayTeamInfo,
            }
        
        default:
            return state;
    }
}