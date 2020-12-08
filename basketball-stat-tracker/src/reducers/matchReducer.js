import{ SAVE_MATCH, GET_MATCH, UPDATE_PLAYER_STAT, UPDATE_SCORE_BOARD } from '../action/actionType'

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
        
        case UPDATE_PLAYER_STAT:{
            if (action.team === "home"){
                let filteredPlayers = state.homeTeamPlayers.filter(player => player.id !== action.updatedPlayer.id)
                return{
                    ...state,
                    homeTeamPlayers: [...filteredPlayers, action.updatedPlayer]
                }
            } else {
                let filteredPlayers = state.awayTeamPlayers.filter(player => player.id !== action.updatedPlayer.id)
                return{
                    ...state,
                    awayTeamPlayers:[...filteredPlayers, action.updatedPlayer]
                }
            }
        }

        case UPDATE_SCORE_BOARD:{
            if (action.team === "home"){
                return{
                    ...state,
                    homeTeamScore: state.homeTeamScore + action.scoreDifference
                }
            } else {
                return{
                    ...state,
                    awayTeamScore: state.awayTeamScore + action.scoreDifference
                }
            }
        }

        default:
            return state;
    }
}

export default matchReducer