import React, { useEffect } from "react";
import { Button, Box, Container } from "@mui/material";
import { AccessAlarm } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { actGetListUser } from "redux/actions/UserManagementActions";
import _ from "lodash";
import moment from "moment";
// Custom arrow react-slick
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function HomgPage() {
  const dispatch = useDispatch();
  const { listUser } = useSelector((state) => state.userManagementReducer);
  useEffect(() => {
    dispatch(actGetListUser());
  }, []);

  // settings cho carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const renderListUser = () => {
    return listUser?.slice(0, 6).map((user, index) => {
      return <p key={index}>{user.hoTen}</p>;
    });
  };

  return (
    <div>
      <Container>
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

        <Box
          component="img"
          src="https://lh3.googleusercontent.com/tVDIfPuxP47wd3irYeyVdfFpMP1ZnVKojMSuXuoBSWBUSh2aFChFnII9m1_d9-Ec2xkQbhhm7pTU2xLDjjujvV9vAE2R2wKKYrDEG9TTlIzz2HQM7XaYdlP5SAvDMDgR9eW-dVIVjT2CmpCaEc4wEgAKusSNpqhbDpvCrg5EAYQTNwF3h-XseNZz5djH5CMbfIzOnL6p6Fy2i-Lr4pVBSlRJaGY4zZvlk45_nCOtPms13mfoEv8cR71CqBWXBlxudGpfvuIzKfVTwDI6IPiq2qD0qbVDcj35OVlWzjkxNfYYGRpwJJuVXy_bzD19euk5pjtInFyhO1eVBEDZcwpB7PqrM3IhbnkkDzq74w0UIRSIDbdsJ5l5z9aK6juj4dufPNOwVWzejWTB9GYmWaye_8rouAuxw6-ea5UTZSKDYwszfCR7jC3JV_2_a-kIE_IaR6DBh3pcg3_6f7mlwthyqxoTnuB6tjMIAmNuvtG2ijh8nUWQAtOLzgSfwMmI6xJtI309hbOv8XrTtQgYBGaM4ACTN2cMOSQpkp3exGXEemlZM4iWcA3vgtPXTAKrhbbz0DoyKyDc0Jm07efIYzuwmqshnTYi1NGHXeEQ1R2oRFPAOWoY3_fAa_vDFV8b_fCjJ5acBzWKR0VmA_7ETYDcyzeklI6Jbr_7l8RVgPNCQG67MCkbXmbMoq9r4jqLgI-7ZFWZNEhghkooW-ttrhZ002lZ=w500-h375-no?authuser=0"
          alt=""
        />
        <Box>
          <h1>Demo icon</h1>
          <AccessAlarm />
          <DeleteIcon />
          <AccessAlarm style={{ color: "red" }} />
        </Box>
        <div>
          <h2>Demo react-slick</h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
}
