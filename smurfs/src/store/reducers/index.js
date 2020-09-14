import {
    FETCH_SMURF,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_ERROR,
    POST_SMURF_SUCCESS,
    POST_SMURF_ERROR,
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
                ...state, errorMessage: action.payload, loading: false
            }
        case POST_SMURF_SUCCESS:
            return {
                ...state, smurfData: [...state.smurfData, action.payload], loading: false
            }
        case POST_SMURF_ERROR:
            return {
                ...state, errorMessage: action.payload, loading: false
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