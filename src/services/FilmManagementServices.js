import { GROUP_ID } from "utils/settings/config";

const { api } = require("./baseApiServices");

class FilmManagementServices {
  getListFilmServices = () => {
    return api.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  };

  deleteFilmServices = (maPhim) => {
    return api.delete(`/api/QuanLyPhim/XP?MaPhim=${maPhim}`);
  };

  addNewFilmServices = (formData) => {
    return api.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };

  getInfoFilm = (maPhim) => {
    return api.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };

  updateFilmServices = (formData) => {
    return api.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };
}

export const filmManagementServices = new FilmManagementServices();
