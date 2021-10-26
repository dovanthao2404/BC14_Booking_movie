import * as ActionType from "../constants/CinemaManagementConstants";
const initialState = {
  cinemaSystemInformation: null,
  error: null,
  isLoading: false,
  cinemaClusterInformation: null,
  infoFilmShowtimes: null,
  infoShowtimesCinemaSystem: null,
};

const cinemaManagementReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.CINEMA_SYSTEM_INFORMATION_REQUEST:
      state.error = null;
      state.cinemaSystemInformation = null;
      state.isLoading = true;

      return { ...state };
    case ActionType.CINEMA_SYSTEM_INFORMATION_SUCCESS:
      state.error = null;
      state.cinemaSystemInformation = payload;
      state.isLoading = false;

      return { ...state };
    case ActionType.CINEMA_SYSTEM_INFORMATION_FAILED:
      state.error = payload;
      state.cinemaSystemInformation = null;
      state.isLoading = false;

      return { ...state };
    case ActionType.SET_CINEMA_CLUSTER_INFORMATION:
      state.cinemaClusterInformation = payload;
      return { ...state };

    case ActionType.INFO_FILM_SHOWTIMES_REQUEST:
      state.error = null;
      state.infoFilmShowtimes = null;
      state.isLoading = true;
      return { ...state };

    case ActionType.INFO_FILM_SHOWTIMES_SUCCESS:
      state.error = null;
      state.infoFilmShowtimes = payload;
      state.isLoading = false;
      return { ...state };

    case ActionType.INFO_FILM_SHOWTIMES_FAILED:
      state.error = payload;
      state.infoFilmShowtimes = null;
      state.isLoading = false;
      return { ...state };

    case ActionType.SET_INFO_SHOWTIMES_CINEMA_SYSTEM:
      state.infoShowtimesCinemaSystem = payload;
      return { ...state };
    default:
      return state;
  }
};

export { cinemaManagementReducer };
