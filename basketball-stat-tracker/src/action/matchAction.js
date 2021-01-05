import{ SAVE_MATCH, GET_MATCH, SAVE_STAT } from './actionType'

export const saveMatch = match => ({ type: SAVE_MATCH, match });
export const getMatch = () => ({ type: GET_MATCH })
export const saveStat = match => ({type: SAVE_STAT, match})


// export const updatePlayerStat = (updatedPlayer, team, scoreDifference) => ({ type: UPDATE_PLAYER_STAT, updatedPlayer, team, scoreDifference });
// export const updateScoreBoard = (team, scoreDifference) => ({ type: UPDATE_SCORE_BOARD, team, scoreDifference });