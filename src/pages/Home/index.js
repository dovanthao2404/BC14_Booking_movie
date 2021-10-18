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

export default function HomgPage() {
  const dispatch = useDispatch();
  const { listUser } = useSelector((state) => state.userManagementReducer);
  useEffect(() => {
    dispatch(actGetListUser());
  }, []);

  const renderListUser = () => {
    return listUser?.slice(0, 6).map((user, index) => {
      return <p key={index}>{user.hoTen}</p>;
    });
  };

  return (
    <Box sx={{ marginTop: "64px" }}>
      <Carousel />
      <Container style={{ maxWidth: "940px", position: "relative" }}>
        <HomeTools />
        <Box component="h1" sx={{ color: "red" }}>
          Này đọc cho dui, đọc xong xóa. Trang này ở HomePage
        </Box>
        <h3>Test lấy dữ liệu</h3>
        {renderListUser()}

        <h3>Lodash sort theo tên ưu tiên bản chữ cái</h3>
        {/* Sort theo tên nhưng mà chữ ưu tiên */}
        {listUser
          ? _.orderBy(listUser, ["hoTen"], ["desc"])
              .slice(0, 6)
              .map((user, key) => {
                return <p key={key}>{user.hoTen}</p>;
              })
          : ""}
        <h3>Lodash sort theo tên </h3>

        {/* Sort theo tên nhưn mà sort số trước, bỏ ["asc"] cũng vậy e mới search stackoverflow xong */}
        {listUser
          ? _.orderBy(listUser, ["hoTen"], ["asc"])
              .slice(0, 6)
              .map((user, key) => {
                return <p key={key}>{user.hoTen}</p>;
              })
          : ""}

        <Button variant="contained">Contained</Button>
        <Box component="p" sx={{ bgcolor: "#444" }}>
          Hello world!
        </Box>
        <Box component="h1">Chị code đi nha </Box>
        {/* { Demo moment nhớ import thư viện */}
        <h3>Demo moment</h3>
        <p> {moment("2020-12-17T16:00:00").format("DD/MM/YYYY")}</p>
        <p> {moment("2020-12-17T16:00:00").format("DD/MM/YYYY - hh:mm:ss ")}</p>
        <p> {moment("2020-12-17T16:00:00").format("hh:mm:ss A")}</p>

        <Box>
          <h1>Demo icon</h1>
          <AccessAlarm />
          <DeleteIcon />
          <AccessAlarm style={{ color: "red" }} />
        </Box>
      </Container>
    </Box>
  );
}
