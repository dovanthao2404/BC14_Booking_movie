import { api } from "./baseApiServices";

class CinemaManagementServices {
  getCinemaSystemInformationServices = () =>
    api.get(`/api/QuanLyRap/LayThongTinHeThongRap`);

  getCinemaClusterInformationBySystemIdServices = (id) =>
    api.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`);

  getInfoFilmShowtimesByIdServices = (id) =>
    api.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
}

export const cinemaManagementServices = new CinemaManagementServices();
