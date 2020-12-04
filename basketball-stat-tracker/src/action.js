export const HIDE_NAVBAR = 'HIDE_NAVBAR';
export const SHOW_NAVBAR = 'SHOW_NAVBAR';
export const SAVE_MATCH = 'SAVE_MATCH';
export const GET_MATCH  = 'GET_MATCH';
export const SAVE_BOXSCORE = 'SAVE_BOXSCORE';

// export const hideNavBar = () => {
//     dispatch({ type: HIDE_NAVBAR })
// };

export const showNavBar = () => ({ type: SHOW_NAVBAR });

export const saveMatch = match => ({ type: SAVE_MATCH, match });
export const getMatch = () => ({ type: GET_MATCH })

export const saveBoxscore = match => ({ type: SAVE_BOXSCORE, match });