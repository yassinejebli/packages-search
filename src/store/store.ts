import {createStore, applyMiddleware} from 'redux';
import moduleReducer from "../reducers/moduleReducer";
import thunk from "redux-thunk";

export const store = createStore(
    moduleReducer,
    applyMiddleware(thunk)
);
