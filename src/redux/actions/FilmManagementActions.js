import { filmManagementServices } from "services/FilmManagementServices";
import * as ActionType from "./../constants/FilmManagementConstants";
export const actGetListFilm = () => {
  return async dispatch => {
    dispatch(actListFilmRequest());
    try {
      const result = await filmManagementServices.getListFilmServices();
      dispatch(actListFilmSuccess(result.data.content));
    } catch (error) {
      actListFilmFailed(actListFilmFailed(error));
    }
  };
};

export const actListFilmRequest = () => ({ type: ActionType.LIST_FILM_REQUEST });
export const actListFilmSuccess = (listFim) => ({ type: ActionType.LIST_FILM_SUCCESS, payload: listFim });
export const actListFilmFailed = (error) => ({ type: ActionType.LIST_FILM_FAILED, payload: error });

export const actDeleteFilm = (maPhim, setNotify) => {

  return async dispatch => {
    try {

      await filmManagementServices.deleteFilmServices(maPhim);
      setNotify({ type: "success", isOpen: true, message: "Bạn đã xóa thành công" });
      dispatch(actGetListFilm());
    } catch (error) {
      console.log(error);
      if (!error.response) {
        setNotify({ type: "success", isOpen: true, message: "Bạn đã xóa thành công" });
        dispatch(actGetListFilm());

      } else {
        setNotify({ type: "error", isOpen: true, message: error.response?.data.content });
      }
    }
  };
};