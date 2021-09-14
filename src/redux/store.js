  
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./reducers/rootReducer";

const store = createStore(
    rootreducer,
    {},
    compose(
        applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;