import * as ActionType from "./../constants/TicketManagementConstants";

const initialState = {
  listTicketRoom: null,
  error: null,
  isLoading: false,
  listSeatSelected: null,
};

export const ticketManagementReducer = (
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

    case ActionType.ADD_SEAT_SELECTED:
      let listFilmClone = [];
      if (state.listSeatSelected) {
        listFilmClone = [...state.listSeatSelected];
      }
      const index = listFilmClone.findIndex(
        (seat) => payload.maGhe === seat.maGhe
      );

      if (index !== -1) {
        listFilmClone.splice(index, 1);
      } else {
        listFilmClone.push(payload);
      }

      state.listSeatSelected = listFilmClone;
      return { ...state };
    case ActionType.RESET_SEAT_SELECTED:
      state.listSeatSelected = null;

      return { ...state };
    default:
      return state;
  }
};
