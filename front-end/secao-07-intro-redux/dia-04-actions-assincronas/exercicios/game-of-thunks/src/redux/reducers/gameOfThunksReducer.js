import { 
    REQUEST_IS_FETCHING,
    REQUEST_ERROR,
    REQUEST_SUCCESSFUL,
    CHARACTER_NOT_FOUND
 } from "../actions";

const INITIAL_STATE = {
    name: '',
    gender: '',
    culture: '',
    born: '',
    titles: [],
    isFetching: false,
    notFound: false,
    error: ''
};

const gameOfThunksReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case REQUEST_IS_FETCHING:
            return {
                ...state,
                isFetching: true
            }
        
        case REQUEST_ERROR:
            return {
                ...INITIAL_STATE,
                error: payload,
                isFetching: false
            }
        
        case CHARACTER_NOT_FOUND:
            return {
                ...INITIAL_STATE,
                notFound: true,
                isFetching: false
            }   
        
        case REQUEST_SUCCESSFUL:
            const {
                name,
                gender,
                culture,
                born,
                titles
            } = payload
            return {
                ...state,
                name,
                gender,
                culture,
                born,
                titles,
                notFound: false,
                isFetching: false
            }
            
        default: 
            return state;
    }
}

export default gameOfThunksReducer;