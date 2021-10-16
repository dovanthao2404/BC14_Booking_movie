import thunk from "redux-thunk";

import { userManagementReducer } from "./reducers/UserManagementReducer";
import { filmManagementReducer } from "./reducers/FilmManagementReducer";
import { cinemaManagementReducer } from "./reducers/CinemaManagementReducer";

const { createStore, applyMiddleware } = require("redux");
const { combineReducers } = require("redux");

export const rootReducer = combineReducers({
  userManagementReducer,
  filmManagementReducer,
  cinemaManagementReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
