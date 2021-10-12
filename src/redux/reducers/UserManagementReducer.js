import * as ActionType from "./../constants/UserManagementConstants";
const initialState = {
  listUser: null,
  error: null,
  isLoading: false,
};

const userManagementReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.LIST_USER_REQUEST:
      state.listUser = payload;
      state.isLoading = true;
      state.error = null;

      return { ...state };

    case ActionType.LIST_USER_SUSSCESS:
      state.listUser = payload;
      state.isLoading = false;
      state.error = null;

      return { ...state };

    case ActionType.LIST_USER_FAILED:
      state.listUser = null;
      state.isLoading = false;
      state.error = payload;

      return { ...state };

    default:
      return state;
  }
};
export { userManagementReducer };
