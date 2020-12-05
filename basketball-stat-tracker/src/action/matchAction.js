import{ SAVE_MATCH, GET_MATCH } from './actionType'

export const saveMatch = match => ({ type: SAVE_MATCH, match });
export const getMatch = () => ({ type: GET_MATCH })