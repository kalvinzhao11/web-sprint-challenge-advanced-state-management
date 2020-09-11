export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = (smurf) => {
    return (dispatch) => { 
        console.log('hi')
        dispatch({
            type: ADD_SMURF,
            payload: smurf
        })
    };
  };