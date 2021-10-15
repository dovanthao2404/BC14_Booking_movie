import * as ActionType from "./../constants/FilmManagementConstants";

const initialState = {
  listFilm: null,
  error: null,
  isLoading: false
};

const filmManagementReducer = (state = initialState, { type, payload }) => {
  switch (type) {


    case ActionType.LIST_FILM_REQUEST:
      state.listFilm = null;
      state.error = null;
      state.isLoading = true;
      return { ...state };

    case ActionType.LIST_FILM_SUCCESS:
      state.listFilm = payload;
      state.error = null;
      state.isLoading = false;
      return { ...state };

    case ActionType.LIST_FILM_FAILED:
      state.listFilm = null;
      state.error = payload;
      state.isLoading = false;
      return { ...state };
    default:
      return state;
  }
};
export { filmManagementReducer };