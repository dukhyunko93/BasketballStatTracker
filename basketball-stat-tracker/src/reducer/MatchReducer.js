import{ SAVE_MATCH, GET_MATCH } from '../action/actionType'

const INITIAL_STATE = {
        homeTeamScore: 0,
        awayTeamScore: 0,
        homeTeamName: "",
        awayTeamName: "",
        homeTeamPlayers: [],
        awayTeamPlayers: [],
};

const matchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_MATCH: {  
            console.log("[[ match reducer ]]", action.match)
            return {
                ...state,
                homeTeamName: action.match.homeTeamName,
                awayTeamName: action.match.awayTeamName,
                homeTeamPlayers: action.match.homeTeamPlayers,
                awayTeamPlayers: action.match.awayTeamPlayers,
            }
        }
        case GET_MATCH:
            return state;
        
        default:
            return state;
    }
}

export default matchReducer