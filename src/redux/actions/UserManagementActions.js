import { userManagementServices } from "services/UserManagementServices";
import { TOKEN, USER_LOGIN } from "utils/settings/config";
import * as ActionType from "./../constants/UserManagementConstants";

export const actGetListUser = () => {
  return async (dispatch) => {
    dispatch(actListUserRequest());
    try {
      const result = await userManagementServices.getListUserServices();

      const listUser = result.data.content;
      dispatch(actListUserSuccess(listUser));

    } catch (error) {
      dispatch(actListUserFailed(error));
    }
  };
};

export const actLoginAdmin = (infoLogin, history) => {
  return async (dispatch) => {
    dispatch(actLoginRequest());
    try {
      const result = await userManagementServices.loginServices(infoLogin);

      // Kiểm tra người dùng có phải là Quản trị hay không nếu không phải thì không cho đăng nhập
      const user = result.data.content;
      console.log(user.maLoaiNguoiDung);
      if (user.maLoaiNguoiDung === "QuanTri") {
        dispatch(actLoginSuccess(result.data.content));

        localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
        localStorage.setItem(TOKEN, result.data.content[TOKEN]);
        history.replace("/admin/dashboard");
      } else {
        // Tạo lỗi
        const error = {
          response: {
            data: {
              content: "Tài khoản hoặc mật khẩu không đúng!"
            }
          }
        };

        dispatch(actLoginFailed(error));

      }
    } catch (error) {
      dispatch(actLoginFailed(error));

    }
  };
};

export const actDeleteUser = (taiKhoan, setNotify) => {
  return async dispatch => {
    try {
      await userManagementServices.deleteUserServices(taiKhoan);

      setNotify({ type: "success", isOpen: true, message: "Bạn đã xóa thành công" });
      dispatch(actGetListUser());

    } catch (error) {

      setNotify({ type: "error", isOpen: true, message: error.response.data.content });

    }
  };
};

export const actAddUser = (info) => {
  return async dipatch => {
    try {
      const result = await userManagementServices.addUserServices(info);
      console.log(result.data.content);
    } catch (error) {

      console.log(error);
    }
  };
};

export const actHandleLogout = () => {
  return {
    type: ActionType.LOGOUT
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

export const actLoginRequest = () => {
  return {
    type: ActionType.LOGIN_REQUEST
  };
};

export const actLoginSuccess = (userLogin) => {
  return {
    type: ActionType.LOGIN_SUSSCESS,
    payload: userLogin
  };
};

export const actLoginFailed = (error) => {
  return {
    type: ActionType.LOGIN_FAILED,
    payload: error
  };
};


