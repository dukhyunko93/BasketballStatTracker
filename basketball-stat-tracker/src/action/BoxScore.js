export const saveMatch = match => {
    return {
      type: 'SAVE_BOXSCORE',
      match
    };
};