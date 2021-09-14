import { ALL_LIST, ERROR_LIST } from "../actions/postAction";

// const initialState = { List: [] };

// const postReducer = (state = initialState, action) => {
//     if (action.type === ALL_LIST) {
//         return {
//             ...state,
//             List: action.payload
//         };
//     }
// };

//export default postReducer;

const initialState = { users: [], loading: true };

const postReducer = (state = initialState, action) => {
    console.log("action.type=>", action.type);
    switch (action.type) {
        case ALL_LIST:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case ERROR_LIST:
            return {
                ...state,
                users: [],
                loading: false,
            }
        default:
            return state;
    }
}

export default postReducer;