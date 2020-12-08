import{ SAVE_MATCH, GET_MATCH, UPDATE_PLAYER_STAT, UPDATE_SCORE_BOARD } from './actionType'

export const saveMatch = match => ({ type: SAVE_MATCH, match });
export const getMatch = () => ({ type: GET_MATCH })
export const updatePlayerStat = (updatedPlayer, team, scoreDifference) => ({ type: UPDATE_PLAYER_STAT, updatedPlayer, team, scoreDifference });
export const updateScoreBoard = (team, scoreDifference) => ({ type: UPDATE_SCORE_BOARD, team, scoreDifference });