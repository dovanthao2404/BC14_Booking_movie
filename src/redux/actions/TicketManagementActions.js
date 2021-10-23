import * as ActionType from "./../constants/TicketManagementConstants";
import { ticketManagementServices } from "services/TicketManagementServices";
import { actSetCinemaClusterInformation } from "./CinemaManagementActions";

export const actCreateShowtimes = (infoShowtimes, setNotify, resetForm) => {
  return async (dispatch) => {
    try {
      await ticketManagementServices.createShowtimesServices(infoShowtimes);
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
    dispatch(actListTicketRoomRequest());
    try {
      const reuslt =
        await ticketManagementServices.getListTicketRoomByIdServices(id);
      dispatch(actListTicketRoomSuccess(reuslt.data.content));
    } catch (error) {
      dispatch(actListTicketRoomFailed(error));
    }
  };
};
export const actListTicketRoomRequest = () => ({
  type: ActionType.TICKET_ROOM_REQUEST,
});
export const actListTicketRoomSuccess = (data) => ({
  type: ActionType.TICKET_ROOM_SUCCESS,
  payload: data,
});
export const actListTicketRoomFailed = (error) => ({
  type: ActionType.TICKET_ROOM_FAILED,
  payload: error,
});

export const actAddSeatSelected = (seat) => ({
  type: ActionType.ADD_SEAT_SELECTED,
  payload: seat,
});
export const actResetSeatSelected = () => ({
  type: ActionType.RESET_SEAT_SELECTED,
});

export const actBookTickets = (
  data,
  history,
  setConfirmDialog,
  IconError,
  IconSuccess
) => {
  return async (dispatch) => {
    try {
      const result = await ticketManagementServices.bookTicketsServices(data);

      setConfirmDialog({
        title: result.data.message,
        subTitle: "",
        isOpen: true,
        onlyOne: true,
        icon: <IconSuccess sx={{ fontSize: "80px", color: "#a5dc86" }} />,
        onConfirm: () => {
          history.push("/");
        },
      });
    } catch (error) {
      setConfirmDialog({
        title: error.response?.data.message,
        subTitle: "",
        isOpen: true,
        onlyOne: true,
        icon: <IconError sx={{ fontSize: "80px", color: "#fbbb86" }} />,
        onConfirm: () => {
          history.push("/");
        },
      });
    }
  };
};
