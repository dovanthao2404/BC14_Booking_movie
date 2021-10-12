import { userManagementServices } from "services/UserManagementServices";
import * as ActionType from "./../constants/UserManagementConstants";

export const actGetListUser = () => {
  return async (dispatch) => {
    dispatch(actListUserRequest());
    try {
      const result = await userManagementServices.getListUserServices();

      const listUser = result.data.content;
      dispatch(actListUserSuccess(listUser));
    } catch (error) {
      console.log(error);
      dispatch(actListUserFailed(error));
    }
  };
};

export const actListUserRequest = () => {
  return {
    type: ActionType.LIST_USER_REQUEST,
  };
};

export const actListUserSuccess = (listUser) => {
  return {
    type: ActionType.LIST_USER_SUSSCESS,
    payload: listUser,
  };
};

export const actListUserFailed = (error) => {
  return {
    type: ActionType.LIST_USER_FAILED,
    payload: error,
  };
};
