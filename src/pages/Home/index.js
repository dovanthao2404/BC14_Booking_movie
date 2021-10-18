import React, { useEffect } from "react";
import { Button, Box, Container } from "@mui/material";
import { AccessAlarm } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { actGetListUser } from "redux/actions/UserManagementActions";
import _ from "lodash";
import moment from "moment";
import Carousel from "./Carousel";
import HomeTools from "./HomeTools";
import { actGetListBanner } from "redux/actions/FilmManagementActions";

export default function HomgPage() {
  const dispatch = useDispatch();
  const { listUser } = useSelector((state) => state.userManagementReducer);
  const { listBanner } = useSelector((state) => state.filmManagementReducer);

  useEffect(() => {
    dispatch(actGetListUser());
    dispatch(actGetListBanner());
  }, []);

  const renderListUser = () => {
    return listUser?.slice(0, 6).map((user, index) => {
      return <p key={index}>{user.hoTen}</p>;
    });
  };

  return (
    <Box sx={{ marginTop: "64px" }}>
      <Carousel listBanner={listBanner} />
      <Container style={{ maxWidth: "940px", position: "relative" }}>
        <HomeTools />
      </Container>
    </Box>
  );
}
