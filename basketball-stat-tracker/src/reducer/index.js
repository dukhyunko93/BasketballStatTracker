import { combineReducers } from 'redux';

export default combineReducers({
    manageNavBar,
    manageMatch,
});

function manageNavBar(state = {
    visibility: true
}, action) {
    console.log(action)
    switch (action.type) {
        case 'HIDE_NAVBAR':
            return {
                visibility: false
            }

        case 'SHOW_NAVBAR':
            return {
                visibility: true
            }
        
        default:
            return state;
    }
}

function manageMatch(state = {
    match:{
        homeTeamName: "",
        awayTeamName: "",
        homeTeamPlayers:[],
        awayTeamPlayers:[],
    }
}, action) {
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