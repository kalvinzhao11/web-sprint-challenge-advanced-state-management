import {
    FETCH_SMURF,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_ERROR,
    ADD_SMURF,
} from '../actions';

const initialState = {
    smurfData: [],
    loading: true,
    errorMessage: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURF:
            return {
                ...state, loading: true
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state, smurfData: action.payload, errorMessage: '', loading: false
            }
        case FETCH_SMURF_ERROR:
            return {
                ...state, smurfData: [], errorMessage: action.payload, loading: true
            }
        case ADD_SMURF:
            return {
                ...state, smurfData: [...state.smurfData, action.payload]
            }
        default:
            return state
    }
}

// export const postDate = (state = initialState, action) => {
//     switch(action.type){
//         case FETCH_SMURF_SUCCESS:
//             return {
//                 ...state, smurfData: action.payload, errorMessage: ''
//             }
//         case FETCH_SMURF_ERROR:
//             return {
//                 ...state, errorMessage: action.payload, loading: true
//             }
//         default:
//             return state
//     }
// }