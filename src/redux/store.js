
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";                                    // asynchronus action handler (API call)
import rootreducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";     // redux developer tools


const initialState = {};

/* <==========  Create Store  ==========> */
/* <====================================> */
const store = createStore(
    rootreducer,                                // can access to store, only to rootreducer
    initialState,                               // initialState  ==>  empty object
    composeWithDevTools(applyMiddleware(thunk),
    
        // if not need to below DEVTOOLs code, used to "devtools extension" 
        /*   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   */
    )
);

export default store;