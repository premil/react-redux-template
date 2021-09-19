import { combineReducers } from "redux";

import bankReducer from "./bankAccountReducer";
import postReducer from "./postReducer";

/* <==========  Create rootReducer  ==========> */
/* <==========================================> */
const rootreducer = combineReducers({
                                        // import all reducers in rootReducer                                    
    account: bankReducer,               // you can given any kind of names for "account, postlist"
    postlist: postReducer,
});

export default rootreducer;