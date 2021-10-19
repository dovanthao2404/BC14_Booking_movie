import * as ActionType from "../constants/CinemaManagementConstants";
const initialState = {
  cinemaSystemInformation: null,
  error: null,
  isLoading: false,
  cinemaClusterInformation: null,
  infoFilmShowtimes: null,
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

    case ActionType.SET_INFO_FILM_SHOWTIMES:
      state.infoFilmShowtimes = payload;
      return { ...state };

    default:
      return state;
  }
};

export { cinemaManagementReducer };
