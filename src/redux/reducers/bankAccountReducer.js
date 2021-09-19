import { DEPOSIT,WITHDRAW } from "../actions/type";

const initialState = 0;

/* <==========  Create bankReducer  ==========> */
/* <==========================================> */
const bankReducer = ( state = initialState, action) => {
    switch (action.type) {
        case DEPOSIT:                           // DEPOSIT Action
            return state + action.payload;
        case WITHDRAW:                          // WITHDRAW Action
            return state - action.payload
        default:
            return state
    }
};

export default bankReducer;