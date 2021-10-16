import { api } from "./baseApiServices";

class CinemaManagementServices {
  getCinemaSystemInformationServices = () =>
    api.get(`/api/QuanLyRap/LayThongTinHeThongRap`);

  getCinemaClusterInformationBySystemIdServices = (id) =>
    api.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`);
}

export const cinemaManagementServices = new CinemaManagementServices();
