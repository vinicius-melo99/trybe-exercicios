import { REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions";

const INITIAL_STATE = {
    isFetching: false,
    cat: ''
}

const catReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case REQUEST_STARTED:
            return {
                ...state,
                isFetching: true
            }
        case REQUEST_SUCCESSFUL:
            return {
                isFetching: false,
                cat: payload
            }
        default:
            return state;
    }
};

export default catReducer; 