export const HIDE_NAVBAR = 'HIDE_NAVBAR';
export const SHOW_NAVBAR = 'SHOW_NAVBAR';
export const SAVE_MATCH = 'SAVE_MATCH';
export const SAVE_BOXSCORE = 'SAVE_BOXSCORE';

export const hideNavBar = () => ({ type: HIDE_NAVBAR });

export const showNavBar = () => ({ type: SHOW_NAVBAR });

export const saveMatch = match => ({ type: SAVE_MATCH, match });

export const saveMatch = match => ({ type: SAVE_BOXSCORE, match });