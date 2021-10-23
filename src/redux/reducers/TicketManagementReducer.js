import * as ActionType from "./../constants/TicketManagementConstants";

const initialState = {
  listTicketRoom: null,
  error: null,
  isLoading: false,
};

export const ticketmanagementReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionType.TICKET_ROOM_REQUEST:
      state.listTicketRoom = null;
      state.error = null;
      state.isLoading = true;

      return { ...state };

    case ActionType.TICKET_ROOM_SUCCESS:
      state.listTicketRoom = payload;
      state.error = null;
      state.isLoading = false;

      return { ...state };
    case ActionType.TICKET_ROOM_FAILED:
      state.listTicketRoom = null;
      state.error = payload;
      state.isLoading = false;

      return { ...state };
    default:
      return state;
  }
};
