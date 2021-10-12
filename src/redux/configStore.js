import thunk from "redux-thunk";
const { createStore, applyMiddleware } = require("redux");
const { combineReducers } = require("redux");

export const rootReducer = combineReducers({});

export const store = createStore(rootReducer, applyMiddleware(thunk));
