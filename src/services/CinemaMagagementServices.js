import { GROUP_ID } from "utils/settings/config";
import { api } from "./baseApiServices";

class CinemaManagementServices {
  getCinemaSystemInformationServices = () =>
    api.get(`/api/QuanLyRap/LayThongTinHeThongRap`);

  getCinemaClusterInformationBySystemIdServices = (id) =>
    api.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`);

  getInfoFilmShowtimesByIdServices = (id) =>
    api.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);

  getInfoShowtimesCinemaSystemServices = () =>
    api.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
}

export const cinemaManagementServices = new CinemaManagementServices();
