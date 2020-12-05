import{ SAVE_MATCH, GET_MATCH, UPDATE_PLAYER_STAT } from './actionType'

export const saveMatch = match => ({ type: SAVE_MATCH, match });
export const getMatch = () => ({ type: GET_MATCH })
export const updatePlayerStat = (updatedPlayer, team) => ({ type: UPDATE_PLAYER_STAT, updatedPlayer, team });