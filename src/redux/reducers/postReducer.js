import { ALL_LIST, ERROR_LIST } from "../actions/type";

const initialState = {
    users: [],
    loading: true
};

/* <==========  Create postReducer  ==========> */
/* <==========================================> */
const postReducer = (state = initialState, action) => {    // reducer have 2 property ==>(state, action)
    console.log("Action Type =>", action.type);
    switch (action.type) {
        case ALL_LIST:                      // ALL_LIST Action
            return {
                ...state,                   // copy the all properties in state
                users: action.payload,      // pass payloard data  ==> users Array
                loading: false
            }
        case ERROR_LIST:                    // ERROR_LIST Action
            return {
                ...state,                   // copy the all properties in state
                users: [],                  // pass ==> empty users Array
                loading: false,
            }
        default:
            return state;
    }
}

export default postReducer;



// Most recomendered to cerate "Reducer" use  ==> switch & case,
// But can you create "Reducer" use  ==> if & else. 
// example given below

/* 
const postReducer = (state = initialState, action) => {
    if (action.type === ALL_LIST) {
        return {
            ...state,
            users: action.payload,
        };
    }
    else if (action.type === ERROR_LIST) {
        return {
            ...state,
            users: [],
        };
    }
    return state;
};

export default postReducer;
*/