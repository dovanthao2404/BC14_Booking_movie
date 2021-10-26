import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Top from "./Top";
import Complex from "./Complex";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { actGetInfoFilmShowtimesById } from "redux/actions/CinemaManagementActions";
import Loading from "components/Loading";
import moment from "moment";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  complexDetail: { background: "rgb(10, 32, 41)", color: "white" },
  dFlex: {
    display: "flex",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
  },
  w35: { width: "30%" },
  w60: { width: "60%" },
  w50: { width: "50%" },
});

export default function Detail(props) {
  const [isShowTime, setIsShowTime] = useState(true);
  const { screenWidth } = props;
  const { id } = useParams();
  const classes = useStyles();

  const dispatch = useDispatch();
  const { infoFilmShowtimes, isLoading, error } = useSelector(
    (state) => state.cinemaManagementReducer
  );
  useEffect(() => {
    dispatch(actGetInfoFilmShowtimesById(id, true));
  }, [dispatch, id]);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>{error.response.data.content}</p>;
  }
  const renderInfo = () => {
    return (
      <Box className={classes.flexCenter} sx={{ padding: "20px 0  40px" }}>
        <div className={classes.w50}>
          <div className={classes.dFlex}>
            <p className={classes.w35}>Tên phim</p>
            <p className={classes.w60}>{infoFilmShowtimes.tenPhim}</p>
          </div>
          <div className={classes.dFlex}>
            <p className={classes.w35}>Ngày công chiếu</p>
            <p className={classes.w60}>
              {moment(infoFilmShowtimes.ngayKhoiChieu).format("DD/MM/YYYY")}
            </p>
          </div>
        </div>
        <div className={classes.w50}>
          <div>Nội dung</div>
          <p>{infoFilmShowtimes.moTa}</p>
        </div>
      </Box>
    );
  };
  return (
    <Box sx={{ paddingTop: "64px" }}>
      <Top infoFilm={infoFilmShowtimes} screenWidth={screenWidth} />
      <Box className={classes.complexDetail}>
        <Container style={{ maxWidth: "940px" }}>
          <div className={classes.flexCenter}>
            <ul className={"tab-header"}>
              <li
                onClick={() => {
                  setIsShowTime(true);
                }}
                className={`tab-header__child  ${isShowTime ? `active` : ""}`}
              >
                Lịch chiếu
              </li>
              <li
                onClick={() => {
                  setIsShowTime(false);
                }}
                className={`tab-header__child ${!isShowTime ? `active` : ""}`}
              >
                Thông tin
              </li>
            </ul>
          </div>
          <div id="complex">
            {isShowTime ? (
              <Box sx={{ padding: "0 0 40px" }}>
                <Complex
                  infoFilmShowtimes={infoFilmShowtimes}
                  screenWidth={screenWidth}
                />
              </Box>
            ) : (
              renderInfo()
            )}
          </div>
        </Container>
      </Box>
    </Box>
  );
}
