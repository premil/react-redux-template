import { combineReducers } from "redux";
import bankReducer from "./bankAccountReducer";
import postReducer from "./postReducer";

const rootreducer = combineReducers({
    account: bankReducer,
    postlist: postReducer,
})

export default rootreducer