import { TOKEN, USER_LOGIN } from "utils/settings/config";
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
  infoUserEdit: null,
  infoAccount: null,
};

const userManagementReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.LIST_USER_REQUEST:
      state.listUser = payload;
      state.isLoading = true;
      state.error = null;

      return { ...state };

    case ActionType.LIST_USER_SUCCESS:
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

    case ActionType.LOGIN_SUCCESS:
      state.userLogin = payload;
      state.isLoading = false;
      state.errorLogin = null;

      return { ...state };

    case ActionType.LOGOUT:
      state.userLogin = null;
      state.infoUserEdit = null;
      state.infoAccount = null;

      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(TOKEN);
      return { ...state };

    case ActionType.INFO_USER_REQUEST:
      state.infoUserEdit = null;
      state.error = null;
      state.isLoading = true;
      return { ...state };

    case ActionType.INFO_USER_FAILED:
      state.infoUserEdit = null;
      state.error = payload;
      state.isLoading = false;
      return { ...state };

    case ActionType.INFO_USER_SUCCESS:
      state.infoUserEdit = payload;
      state.error = null;
      state.isLoading = false;

      return { ...state };

    case ActionType.INFO_ACCOUNT_REQUEST:
      state.infoAccount = null;
      state.error = null;
      state.isLoading = true;
      return { ...state };
    case ActionType.INFO_ACCOUNT_SUCCESS:
      state.infoAccount = payload;
      state.error = null;
      state.isLoading = false;
      return { ...state };
    case ActionType.INFO_ACCOUNT_FAILED:
      state.infoAccount = null;
      state.error = payload;
      state.isLoading = false;
      return { ...state };
    case ActionType.REGISTER_ACTION_FAILED:
      state.error = payload;

      return { ...state };
    default:
      return state;
  }
};

export { userManagementReducer };
