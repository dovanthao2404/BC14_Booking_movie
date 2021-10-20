import { cinemaManagementServices } from "services/CinemaMagagementServices";
import * as ActionType from "./../constants/CinemaManagementConstants";

export const actGetCinemaSystemInformation = () => {
  return async (dispatch) => {
    dispatch(actCinemaSystemInformationRequest());
    try {
      const result =
        await cinemaManagementServices.getCinemaSystemInformationServices();
      dispatch(actCinemaSystemInformationSuccess(result.data.content));
    } catch (error) {
      dispatch(actCinemaSystemInformationFailed(error));
    }
  };
};

export const actCinemaSystemInformationRequest = () => ({
  type: ActionType.CINEMA_SYSTEM_INFORMATION_REQUEST,
});

export const actCinemaSystemInformationSuccess = (data) => ({
  type: ActionType.CINEMA_SYSTEM_INFORMATION_SUCCESS,
  payload: data,
});

export const actCinemaSystemInformationFailed = (errror) => ({
  type: ActionType.CINEMA_SYSTEM_INFORMATION_FAILED,
  payload: errror,
});

export const actGetCinemaClusterInformationBySystemId = (id) => {
  return async (dispatch) => {
    try {
      const result =
        await cinemaManagementServices.getCinemaClusterInformationBySystemIdServices(
          id
        );
      dispatch(actSetCinemaClusterInformation(result.data.content));
    } catch (error) {}
  };
};

export const actSetCinemaClusterInformation = (data) => ({
  type: ActionType.SET_CINEMA_CLUSTER_INFORMATION,
  payload: data,
});

export const actGetInfoFilmShowtimesById = (maPhim) => {
  return async (dispatch) => {
    try {
      const result =
        await cinemaManagementServices.getInfoFilmShowtimesByIdServices(maPhim);
      dispatch(actSetInfoFilmShowtimes(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };
};
export const actSetInfoFilmShowtimes = (data) => ({
  type: ActionType.SET_INFO_FILM_SHOWTIMES,
  payload: data,
});

export const actGetInfoShowtimesCinemaSystem = () => {
  return async (dispatch) => {
    try {
      const result =
        await cinemaManagementServices.getInfoShowtimesCinemaSystemServices();
      dispatch(actSetInfoShowimesCinemaSystem(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };
};

export const actSetInfoShowimesCinemaSystem = (data) => ({
  type: ActionType.SET_INFO_SHOWTIMES_CINEMA_SYSTEM,
  payload: data,
});
