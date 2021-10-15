import { USER_LOGIN } from "utils/settings/config";
import * as ActionType from "./../constants/UserManagementConstants";

let userLogin = null;
if (localStorage.getItem(USER_LOGIN)) {
  userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  listUser: null,
  error: null,
  isLoading: false,
  userLogin,
  errorLogin: null,
  infoEdit: null
};

const userManagementReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.LIST_USER_REQUEST:
      state.listUser = payload;
      state.isLoading = true;
      state.error = null;

      return { ...state };

    case ActionType.LIST_USER_SUCCCESS:
      state.listUser = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    case ActionType.LIST_USER_FAILED:
      state.listUser = null;
      state.isLoading = false;
      state.error = payload;

      return { ...state };

    case ActionType.LOGIN_REQUEST:
      state.userLogin = null;
      state.isLoading = true;
      state.errorLogin = null;

      return { ...state };

    case ActionType.LOGIN_FAILED:
      state.userLogin = null;
      state.isLoading = false;
      state.errorLogin = payload;

      return { ...state };

    case ActionType.LOGIN_SUCCCESS:
      state.userLogin = payload;
      state.isLoading = false;
      state.errorLogin = null;

      return { ...state };

    case ActionType.LOGOUT:
      state.userLogin = null;
      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(ActionType.LOGOUT);
      return { ...state };

    case ActionType.INFO_USER_REQUEST:
      state.infoEdit = null;
      state.error = null;
      state.isLoading = true;
      return { ...state };

    case ActionType.INFO_USER_FAILED:
      state.infoEdit = null;
      state.error = payload;
      state.isLoading = false;
      return { ...state };

    case ActionType.INFO_USER_SUCCCESS:
      state.infoEdit = payload;
      state.error = null;
      state.isLoading = false;

      return { ...state };
    default:
      return state;
  }
};

export { userManagementReducer };
