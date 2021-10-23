import { ticketmanagementServices } from "services/TicketManagementServices";
import { actSetCinemaClusterInformation } from "./CinemaManagementActions";

export const actCreateShowtimes = (infoShowtimes, setNotify, resetForm) => {
  return async (dispatch) => {
    try {
      await ticketmanagementServices.createShowtimesServices(infoShowtimes);
      await setNotify({
        type: "success",
        isOpen: true,
        message: "Bạn đã thêm lịch chiếu thành công",
      });
      resetForm();
      dispatch(actSetCinemaClusterInformation(null));
    } catch (error) {
      setNotify({
        type: "error",
        isOpen: true,
        message: error.response?.data.content,
      });
    }
  };
};

export const actGetListTicketRoomById = (id, history) => {
  return async (dispatch) => {
    try {
      const reuslt =
        await ticketmanagementServices.getListTicketRoomByIdServices(id);
    } catch (error) {
      // alert("Mã lịch chiếu hông hợp lệ")
      // history.push("/home")
    }
  };
};
