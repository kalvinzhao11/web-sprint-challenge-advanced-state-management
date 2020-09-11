import axios from 'axios'

export const FETCH_SMURF = "FETCH_SMURF";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_ERROR = "POST_SMURF_ERROR";
export const ADD_SMURF = "ADD_SMURF";

export const fetchSMURF = () => {
    return (dispatch) => {
        dispatch({type: FETCH_SMURF})
        axios.get('http://localhost:3333/smurfs')
            .then(response => {
                console.log(response)
                dispatch({type: FETCH_SMURF_SUCCESS, payload: response.data})
            })
            .catch(error => {
                console.error(error)
                dispatch({type: FETCH_SMURF_ERROR, payload: 'An Error has occur'})
            })
    }
}

export const postSMURF = actions =>{
        axios.post('http://localhost:3333/smurfs', actions)
            .then(response => {
                console.log(response)
                // dispatch({type: POST_SMURF_SUCCESS, payload: actions})
            })
            .catch(error => {
                console.error(error)
                // dispatch({type: POST_SMURF_ERROR, payload: 'An Error has occur'})
            })
}

export const addSmurf = (smurf) => {
    return (dispatch) => { 
        dispatch({
            type: ADD_SMURF,
            payload: smurf
        })
    };
  };