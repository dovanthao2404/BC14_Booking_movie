import thunk from "redux-thunk";

import { userManagementReducer } from "./reducers/UserManagementReducer";
import { filmManagementReducer } from "./reducers/FilmManagementReducer";
import { cinemaManagementReducer } from "./reducers/CinemaManagementReducer";
import { ticketManagementReducer } from "./reducers/TicketManagementReducer";
const { createStore, applyMiddleware, compose } = require("redux");
const { combineReducers } = require("redux");
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  userManagementReducer,
  filmManagementReducer,
  cinemaManagementReducer,
  ticketManagementReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
