export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';

const requestStarted = () => ({
    type: REQUEST_STARTED,
});

const requestSuccesfull = (cat) => ({
    type: REQUEST_SUCCESSFUL,
    payload: cat
});

export function requestCatApi() {
    return (dispatch) => {
        dispatch(requestStarted());
        fetch('https://aws.random.cat/meow')
            .then((response) => response.json())
            .then(({ file }) => dispatch(requestSuccesfull(file)))
            .catch((error) => console.log(error));       
    }
} 
