// import axios from "axios";
export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";

export const depositInMoney = (amount) => {
    return dispatch => {
        dispatch({
            type: DEPOSIT,
            payload: amount
        });

        // axios.post(`${data.apiDomain}/api/users/signup`, userSignupBodyInfo)
        //     .then(res => {
        //         dispatch({ type: ADD_JWT_TOKEN, payload: userSignupBodyInfo });
        //     }).catch(err => {
        //         console.log(err);
        //         dispatch({ type: REMOVE_JWT_TOKEN });
        //     })

    };
};

export const witdrawInMoney = (amount) => {
    return dispatch => {
        dispatch({
            type: WITHDRAW,
            payload: amount
        });
    };

};