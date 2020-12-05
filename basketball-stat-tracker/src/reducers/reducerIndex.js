import { combineReducers } from 'redux';
import matchReducer from './matchReducer'
import navBarReducer from './navBarReducer'
import boxScoreReducer from './boxScoreReducer'

export default combineReducers({
    matchReducer,
    navBarReducer,
    boxScoreReducer
});
