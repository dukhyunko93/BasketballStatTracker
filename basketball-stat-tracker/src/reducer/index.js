import { combineReducers } from 'redux';
import matchReducer from './matchReducer'
import navBarReducer from './navBarReducer'

export default combineReducers({
    matchReducer,
    navBarReducer
});
