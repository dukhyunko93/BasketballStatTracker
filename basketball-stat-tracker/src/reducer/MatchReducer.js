import{ SAVE_MATCH, GET_MATCH } from '../action'

const INITIAL_STATE = {
        homeTeamScore: "",
        awayTeamScore: "",
        homeTeamInfo: {},
        awayTeamInfo:{},
};

const matchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_MATCH: {      
            console.log("save reducer hitting")    
            return {
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