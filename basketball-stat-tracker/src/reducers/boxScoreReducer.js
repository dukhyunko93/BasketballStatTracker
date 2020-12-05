import { SAVE_BOXSCORE } from "../action/actionType"

export default function boxScoreReducer(state = {}, action) {
    switch (action.type) {
        case SAVE_BOXSCORE:{
            return action.match
        }
        default:
            return state;
    }
}