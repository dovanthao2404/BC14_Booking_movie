import { GROUP_ID } from "utils/settings/config";
import { api } from "./baseApiServices";

class UserManagementServices {
  getListUserServices = () => {
    return api.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`
    );
  };
  loginServices = (infoLogin) => {
    return api.post(`/api/QuanLyNguoiDung/DangNhap`, infoLogin);
  };
  deleteUserServices = (taiKhoan) => {
    return api.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
  };
}

export const userManagementServices = new UserManagementServices();
