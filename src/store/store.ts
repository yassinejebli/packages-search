import {createStore, applyMiddleware, combineReducers} from 'redux';
import moduleReducer from "../reducers/moduleReducer";
import thunk from "redux-thunk";
import paginationReducer from "../reducers/paginationReducer";

export const store = createStore(
    combineReducers({
        moduleState: moduleReducer,
        paginationState: paginationReducer
    }),
    applyMiddleware(thunk)
);
