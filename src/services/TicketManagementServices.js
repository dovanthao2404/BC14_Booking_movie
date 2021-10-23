import { api } from "./baseApiServices";

class TicketManagementServices {
  createShowtimesServices = (infoShowtime) =>
    api.post(`/api/QuanLyDatVe/TaoLichChieu`, infoShowtime);

  getListTicketRoomByIdServices = (id) =>
    api.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);

  bookTicketsServices = (data) => api.post(`/api/QuanLyDatVe/DatVe`, data);
}

export const ticketManagementServices = new TicketManagementServices();
