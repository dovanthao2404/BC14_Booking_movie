import { api } from "./baseApiServices";

class TicketManagementServices {
  createShowtimesServices = (infoShowtime) => {
    return api.post(`/api/QuanLyDatVe/TaoLichChieu`, infoShowtime);
  };
}

export const ticketmanagementServices = new TicketManagementServices();
