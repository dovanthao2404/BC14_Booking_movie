import thunk from "redux-thunk";

import { userManagementReducer } from "./reducers/UserManagementReducer";

const { createStore, applyMiddleware } = require("redux");
const { combineReducers } = require("redux");

export const rootReducer = combineReducers({ userManagementReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
