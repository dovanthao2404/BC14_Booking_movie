import { GROUP_ID } from "utils/settings/config";

const { api } = require("./baseApiServices");

class FilmManagementServices {
  getListFilmServices = () => {
    return api.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  };

  deleteFilmServices = (maPhim) => {
    return api.delete(`/api/QuanLyPhim/XP?MaPhim=${maPhim}`);
  };
}

export const filmManagementServices = new FilmManagementServices();