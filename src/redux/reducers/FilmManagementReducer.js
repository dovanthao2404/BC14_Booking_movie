import * as ActionType from "./../constants/FilmManagementConstants";

const initialState = {
  listFilm: null,
  listFilmComingSoon: null,
  listFilmNowShowing: null,

  error: null,
  isLoading: false,
  infoFilmEdit: null,
  listBanner: null,
};

const filmManagementReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.LIST_FILM_REQUEST:
      state.listFilm = null;
      state.error = null;
      state.listFilmComingSoon = null;
      state.listFilmNowShowing = null;
      // state.listFilmDefault = null;
      state.isLoading = true;
      return { ...state };

    case ActionType.LIST_FILM_SUCCESS:
      state.listFilm = payload;
      state.listFilmDefault = payload;

      state.listFilmNowShowing = payload.filter(
        (film) => film.dangChieu === true
      );

      state.listFilmComingSoon = payload.filter(
        (film) => film.sapChieu === true
      );

      state.error = null;
      state.isLoading = false;

      return { ...state };

    case ActionType.LIST_FILM_FAILED:
      state.listFilm = null;
      state.error = payload;
      state.listFilmDefault = null;
      state.listFilmComingSoon = null;
      state.listFilmNowShowing = null;
      state.isLoading = false;
      return { ...state };

    case ActionType.INFO_FILM_REQUEST:
      state.infoFilmEdit = null;
      state.error = null;
      state.isLoading = true;

      return { ...state };

    case ActionType.INFO_FILM_SUCCCESS:
      state.infoFilmEdit = payload;
      state.error = null;
      state.isLoading = false;

      return { ...state };
    case ActionType.INFO_FILM_FAILED:
      state.infoFilmEdit = null;
      state.error = payload;
      state.isLoading = false;

      return { ...state };
    case ActionType.SET_LIST_BANNER:
      state.listBanner = payload;
      return { ...state };
    default:
      return state;
  }
};
export { filmManagementReducer };
