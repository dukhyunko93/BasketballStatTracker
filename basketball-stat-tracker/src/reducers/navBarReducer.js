import{ HIDE_NAVBAR, SHOW_NAVBAR } from '../action/actionType'

const INITIAL_STATE = {
    visibility: true,
};

const navBarReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HIDE_NAVBAR: {  
            return { visibility: false };
        }
        case SHOW_NAVBAR:
            return { visibility: true };
        
        default:
            return state;
    }
}

export default navBarReducer