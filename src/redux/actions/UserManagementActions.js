import { userManagementServices } from "services/UserManagementServices";
import { TICKET_ROOM_ID, TOKEN, USER_LOGIN } from "utils/settings/config";
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

export const actListUserRequest = () => ({
  type: ActionType.LIST_USER_REQUEST,
});

export const actListUserSuccess = (listUser) => ({
  type: ActionType.LIST_USER_SUCCESS,
  payload: listUser,
});

export const actListUserFailed = (error) => ({
  type: ActionType.LIST_USER_FAILED,
  payload: error,
});

export const actLoginAdmin = (infoLogin, history) => {
  return async (dispatch) => {
    dispatch(actLoginRequest());
    try {
      const result = await userManagementServices.loginServices(infoLogin);

      // Kiểm tra người dùng có phải là Quản trị hay không nếu không phải thì không cho đăng nhập
      const user = result.data.content;
      if (user.maLoaiNguoiDung === "QuanTri") {
        dispatch(actLoginSuccess(result.data.content));

        localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
        localStorage.setItem(TOKEN, result.data.content[TOKEN]);
        history.replace("/admin");
      } else {
        // Tạo lỗi
        const error = {
          response: {
            data: {
              content: "Tài khoản hoặc mật khẩu không đúng!",
            },
          },
        };

        dispatch(actLoginFailed(error));
      }
    } catch (error) {
      dispatch(actLoginFailed(error));
    }
  };
};

export const actLoginRequest = () => ({
  type: ActionType.LOGIN_REQUEST,
});

export const actLoginSuccess = (userLogin) => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: userLogin,
});

export const actLoginFailed = (error) => ({
  type: ActionType.LOGIN_FAILED,
  payload: error,
});

export const actDeleteUser = (taiKhoan, setNotify) => {
  return async (dispatch) => {
    try {
      await userManagementServices.deleteUserServices(taiKhoan);

      setNotify({
        type: "success",
        isOpen: true,
        message: "Bạn đã xóa thành công",
      });
      dispatch(actGetListUser());
    } catch (error) {
      setNotify({
        type: "error",
        isOpen: true,
        message: error.response.data.content,
      });
    }
  };
};

export const actUpdateInfoUser = (newInfo, setNotify) => {
  return async (dispatch) => {
    try {
      await userManagementServices.updateInfoUserServices(newInfo);

      setNotify({
        type: "success",
        isOpen: true,
        message: "Bạn đã cập nhật thành công",
      });
      dispatch(actGetInfoUser(newInfo.taiKhoan));
    } catch (error) {
      setNotify({
        type: "error",
        isOpen: true,
        message: error.response.data.content,
      });
    }
  };
};

export const actAddUser = (info, setNotify, resetForm) => {
  return async (dipatch) => {
    try {
      await userManagementServices.addUserServices(info);
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
        message: error.response.data.content,
      });
    }
  };
};

export const actGetInfoUser = (taiKhoan) => {
  return async (dispatch) => {
    dispatch(actInfoUserRequest());

    try {
      const result = await userManagementServices.getInfoUserServices(taiKhoan);
      dispatch(actInfoUserSuccess(result.data.content));
    } catch (error) {
      dispatch(actInfoUserFailed(error));
    }
  };
};

export const actInfoUserSuccess = (infoUser) => ({
  type: ActionType.INFO_USER_SUCCESS,
  payload: infoUser,
});

export const actInfoUserFailed = (error) => ({
  type: ActionType.INFO_USER_FAILED,
  payload: error,
});

export const actInfoUserRequest = () => ({
  type: ActionType.INFO_USER_REQUEST,
});

export const actHandleLogout = () => ({
  type: ActionType.LOGOUT,
});

export const actGetInfoAccount = () => {
  return async (dispatch) => {
    dispatch(actInfoAccountRequest());
    try {
      const reuslt = await userManagementServices.getInfoAccountServices();
      dispatch(actInfoAccountSuccess(reuslt.data.content));
    } catch (error) {
      dispatch(actInfoAccountFailed(error));
    }
  };
};
export const actInfoAccountRequest = () => ({
  type: ActionType.INFO_ACCOUNT_REQUEST,
});
export const actInfoAccountSuccess = (data) => ({
  type: ActionType.INFO_ACCOUNT_SUCCESS,
  payload: data,
});
export const actInfoAccountFailed = (error) => ({
  type: ActionType.INFO_ACCOUNT_FAILED,
  payload: error,
});

export const actUpdateInfoAccount = (data, setNotify) => {
  return async (dispatch) => {
    try {
      await userManagementServices.updateInfoAccountServices(data);
      setNotify({
        isOpen: true,
        message: "Bạn đã cập nhật thành công",
        type: "success",
      });
      dispatch(actInfoAccountSuccess(data));
    } catch (error) {
      setNotify({
        isOpen: true,
        message: error.response.data.content,
        type: "error",
      });
    }
  };
};

export const actUserLogin = (InfoLogin, history) => {
  return async (dispatch) => {
    dispatch(actLoginRequest());
    try {
      const result = await userManagementServices.loginServices(InfoLogin);

      const id = localStorage.getItem(TICKET_ROOM_ID);

      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
      localStorage.setItem(TOKEN, result.data.content[TOKEN]);
      await dispatch(actLoginSuccess(result.data.content));
      if (id) {
        history.replace(`/ticketroom/${id}`);
        localStorage.removeItem(TICKET_ROOM_ID);
      }
    } catch (error) {
      dispatch(actLoginFailed(error));
    }
  };
};

export const actUserRegister = (InfoRegister, history) => {
  return async (dispatch) => {
    try {
      await userManagementServices.registerServices(InfoRegister);
      dispatch(actUserLogin(InfoRegister, history));
    } catch (error) {
      dispatch({
        type: ActionType.REGISTER_ACTION_FAILED,
        InfoRegister: error,
      });
    }
  };
};
