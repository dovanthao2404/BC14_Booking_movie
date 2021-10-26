import { GROUP_ID } from "utils/settings/config";

const { api } = require("./baseApiServices");

class FilmManagementServices {
  getListFilmServices = () => {
    return api.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  };

  getInfoFilmByIdServices = (maPhim) => {
    return api.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };

  getListBannerServices = () => {
    return api.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  deleteFilmByIdServices = (maPhim) => {
    return api.delete(`/api/QuanLyPhim/XP?MaPhim=${maPhim}`, maPhim);
  };

  addNewFilmServices = (formData) => {
    return api.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };

  updateFilmServices = (formData) => {
    return api.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };


}

export const filmManagementServices = new FilmManagementServices();
