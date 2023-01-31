import charactersFetchApi from "../../helpers/charactersFetchApi";

export const REQUEST_IS_FETCHING = 'RESQUEST_IS_FETCHING';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const CHARACTER_NOT_FOUND = 'CHARACTER_NOT_FOUND';

const actionRequestIsFetching = () => ({
    type: REQUEST_IS_FETCHING
})

const actionRequestError = (error) => ({
    type: REQUEST_ERROR,
    payload: error
});

const actionNotFound = () => ({
    type: CHARACTER_NOT_FOUND
})

const actionRequestSuccessful = ({ 
    name,
    gender,
    culture,
    born,
    titles
 }) => ({
    type: REQUEST_SUCCESSFUL,
    payload: {
        name,
        gender,
        culture,
        born ,
        titles 
    }
})

export const requestCharactersApi = (charactername) => {
    return async (dispatch) => {
        dispatch(actionRequestIsFetching());
        try {
            const character = await charactersFetchApi(charactername);
            character.length !== 0 ? 
                dispatch(actionRequestSuccessful(character[0]))
                : dispatch(actionNotFound())

        } catch(error) {
            dispatch(actionRequestError(error.message));    
        }
    }
}