import { GROUP_ID } from "utils/settings/config";
import { api } from "./baseApiServices";

class UserManagementServices {
  getListUserServices = () => {
    return api.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`
    );
  };
}

export const userManagementServices = new UserManagementServices();
