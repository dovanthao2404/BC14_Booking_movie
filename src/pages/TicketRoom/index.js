import { Box } from "@mui/system";
import Loading from "components/Loading";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actGetListTicketRoomById,
  actResetSeatSelected,
} from "redux/actions/TicketManagementActions";
import NavTop from "./NavTop";
import Pay from "./Pay";
import Seat from "./Seat";
import { useParams, Redirect } from "react-router-dom";
import { TICKET_ROOM_ID } from "utils/settings/config";
export default function Checkout(props) {
  const dispatch = useDispatch();
  const [isPayment, setIsPayment] = useState(false);
  const { screenWidth } = props;
  const { listTicketRoom, isLoading, error, listSeatSelected } = useSelector(
    (state) => state.ticketManagementReducer
  );

  const { userLogin } = useSelector((state) => state.userManagementReducer);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actGetListTicketRoomById(id));
  }, [dispatch, id]);

  useEffect(() => {
    screenWidth < 767.98 ? setIsPayment(false) : setIsPayment(false);
    if (isPayment && screenWidth >= 768) {
      setIsPayment(false);
    } else {
      setIsPayment(isPayment);
    }
  }, [screenWidth, isPayment]);

  useEffect(() => {
    return () => {
      dispatch(actResetSeatSelected());
    };
  }, [dispatch]);

  if (!userLogin && !localStorage.setItem(TICKET_ROOM_ID, id)) {
    localStorage.setItem(TICKET_ROOM_ID, id);
    return <Redirect to="/login" />;
  } else if (!userLogin) {
    localStorage.removeItem(TICKET_ROOM_ID);
    return <Redirect to="/login" />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error.response.data.content}</p>;
  }

  return (
    <>
      <NavTop
        isPayment={isPayment}
        setIsPayment={setIsPayment}
        screenWidth={screenWidth}
      />
      <Box sx={{ marginTop: "60px" }}>
        <Seat
          listTicketRoom={listTicketRoom}
          isPayment={isPayment}
          setIsPayment={setIsPayment}
          screenWidth={screenWidth}
          listSeatSelected={listSeatSelected}
        />
        <Pay
          listTicketRoom={listTicketRoom}
          isPayment={isPayment}
          setIsPayment={setIsPayment}
          screenWidth={screenWidth}
          listSeatSelected={listSeatSelected}
          id={id}
        />
      </Box>
    </>
  );
}
