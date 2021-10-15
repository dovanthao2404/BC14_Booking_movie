import thunk from "redux-thunk";

import { userManagementReducer } from "./reducers/UserManagementReducer";
import { filmManagementReducer } from "./reducers/FilmManagementReducer";
const { createStore, applyMiddleware } = require("redux");
const { combineReducers } = require("redux");

export const rootReducer = combineReducers({ userManagementReducer, filmManagementReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
