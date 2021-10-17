import { filmManagementServices } from "services/FilmManagementServices";
import * as ActionType from "./../constants/FilmManagementConstants";
export const actGetListFilm = () => {
  return async (dispatch) => {
    dispatch(actListFilmRequest());
    try {
      const result = await filmManagementServices.getListFilmServices();
      dispatch(actListFilmSuccess(result.data.content));
    } catch (error) {
      actListFilmFailed(actListFilmFailed(error));
    }
  };
};

export const actListFilmRequest = () => ({
  type: ActionType.LIST_FILM_REQUEST,
});

export const actListFilmSuccess = (listFim) => ({
  type: ActionType.LIST_FILM_SUCCESS,
  payload: listFim,
});

export const actListFilmFailed = (error) => ({
  type: ActionType.LIST_FILM_FAILED,
  payload: error,
});

export const actDeleteFilm = (maPhim, setNotify) => {
  return async (dispatch) => {
    try {
      await filmManagementServices.deleteFilmServices(maPhim);
      setNotify({
        type: "success",
        isOpen: true,
        message: "Bạn đã xóa thành công",
      });
      dispatch(actGetListFilm());
    } catch (error) {
      if (!error.response) {
        setNotify({
          type: "success",
          isOpen: true,
          message: "Bạn đã xóa thành công",
        });
        dispatch(actGetListFilm());
        console.log(
          "%c Đây không phải là bug đây là một tính năng!!",
          "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); padding: 20px 20px 40px;"
        );
      } else {
        setNotify({
          type: "error",
          isOpen: true,
          message: error.response?.data.content,
        });
      }
    }
  };
};

export const actAddNewFilm = (formData, setNotify, resetForm) => {
  return async (dispatch) => {
    try {
      await filmManagementServices.addNewFilmServices(formData);
      setNotify({
        type: "success",
        isOpen: true,
        message: "Bạn đã thêm thành công",
      });
      resetForm();
    } catch (error) {
      setNotify({
        type: "error",
        isOpen: true,
        message: error.response?.data.content,
      });
    }
  };
};

export const atcGetInfoFilm = (maPhim) => {
  return async (dispatch) => {
    dispatch(actInfoFilmRequest());
    try {
      const result = await filmManagementServices.getInfoFilm(maPhim);
      dispatch(actInfoFilmSuccess(result.data.content));
    } catch (error) {
      dispatch(actInfoFilmFailed(error));
    }
  };
};

export const actInfoFilmRequest = () => ({
  type: ActionType.INFO_FILM_REQUEST,
});

export const actInfoFilmSuccess = (data) => ({
  type: ActionType.INFO_FILM_SUCCCESS,
  payload: data,
});

export const actInfoFilmFailed = (error) => ({
  type: ActionType.INFO_FILM_FAILED,
  payload: error,
});

export const actUpdateFilm = (formData, setNotify, setSrcImg) => {
  return async (dispatch) => {
    try {
      await filmManagementServices.updateFilmServices(formData);
      await setNotify({
        type: "success",
        isOpen: true,
        message: "Bạn đã cập nhật thành công",
      });
      await atcGetInfoFilm(parseInt(formData.get("maPhim")));
    } catch (error) {
      setNotify({
        type: "error",
        isOpen: true,
        message: error.response?.data.content,
      });
    }
  };
};
