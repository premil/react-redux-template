import { DEPOSIT, WITHDRAW } from "./type";

export const depositInMoney = (amount) => {     // depositinMoney function ==> action creator
    return dispatch => {
        dispatch({
            type: DEPOSIT,                  // Action (description)
            payload: amount                 // pass the payloard data
        });
    }
};

export const witdrawInMoney = (amount) => {
    return dispatch => {
        dispatch({
            type: WITHDRAW,
            payload: amount
        });
    }
};