import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import "./HomeTools.css";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { actGetInfoFilmShowtimesById } from "redux/actions/CinemaManagementActions";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { Box, Container } from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    fontSize: 16,
    outline: "none",
    border: "none",
    padding: "20px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      background: "#fff",
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  slectItem: {
    borderLeft: "1px solid rgba(238,238,238,0.88)",
  },
  btnBuyTicket: {
    width: "100%",
    height: "100%",
    padding: "10px 5px",
    border: "none",
    color: "#fff",
    fontSize: "14px",
    borderRadius: "4px",
    textTransform: "uppercase",
  },
  btnBuyTicketDisabled: {
    background: "#4a4a4a",
  },
  btnBuyTicketEnabled: {
    background: "#fb4226",
    cursor: "pointer",
    "&:hover": {
      background: "#d33e28",
    },
  },
}));

export default function HomeTools(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [showTimes, setShowTimes] = useState(null);
  const [infoHomeTool, setInfoHomeTool] = useState({
    film: "film",
    cinema: "cinema",
    showDate: "showDate",
    filmShowtimes: "filmShowtimes",
    showtimeId: null,
  });

  const { infoFilmShowtimes } = useSelector(
    (state) => state.cinemaManagementReducer
  );

  const { listFilmNowShowing } = props;

  useEffect(() => {
    if (infoHomeTool.cinema !== "cinema") {
      flatArrayShowtimesToObject(infoHomeTool.cinema.lichChieuPhim);
    }
  }, [infoHomeTool.cinema]);

  // Chuyển lịch chiếu thành {ngayChieu: [<Danh sách lịch chiếu của ngày chiếu>]}
  const flatArrayShowtimesToObject = (arr) => {
    const temp = {};
    for (let i = 0; i < arr.length; i++) {
      const date = moment(arr[i].ngayChieuGioChieu).format("DD/MM/YYYY");
      if (!Object.keys(temp).includes(date) || Object.keys(temp).length === 0) {
        temp[date] = [{ ...arr[i] }];
        for (let j = i + 1; j < arr.length; j++) {
          const calendarCurrent = { ...arr[j] };
          const dateCurrent = moment(arr[j].ngayChieuGioChieu).format(
            "DD/MM/YYYY"
          );
          dateCurrent === date && temp[date].push(calendarCurrent);
        }
      }
    }
    setShowTimes(temp);
  };

  const handleChangeFilm = (e) => {
    const { value } = e.target;
    dispatch(actGetInfoFilmShowtimesById(value));

    value &&
      setInfoHomeTool({
        film: value,
        cinema: "cinema",
        showDate: "showDate",
        filmShowtimes: "filmShowtimes",
        showtimeId: null,
      });
  };

  const handleChangeClusterInformation = (e) => {
    const { value } = e.target;
    value &&
      setInfoHomeTool({
        ...infoHomeTool,
        cinema: value,
        showDate: "showDate",
        filmShowtimes: "filmShowtimes",
        showtimeId: null,
      });
  };

  const handleChangeDate = (e) => {
    const { value } = e.target;
    value &&
      setInfoHomeTool({
        ...infoHomeTool,
        showDate: value,
        filmShowtimes: "filmShowtimes",
        showtimeId: null,
      });
  };

  const handleChangeFilmShowtime = (e) => {
    const { value } = e.target;
    value &&
      setInfoHomeTool({
        ...infoHomeTool,
        filmShowtimes: value,
        showtimeId: value,
      });
  };

  const renderOptionFilm = () => {
    return listFilmNowShowing?.map((film) => (
      <MenuItem key={film.maPhim} value={film.maPhim}>
        {film.tenPhim}
      </MenuItem>
    ));
  };

  const renderOptionCinema = () => {
    if (infoHomeTool.film !== "film" && infoFilmShowtimes) {
      const { heThongRapChieu } = infoFilmShowtimes;
      return heThongRapChieu?.map((heThongRap) =>
        heThongRap.cumRapChieu.map((rap) => (
          <MenuItem key={rap.maCumRap} value={rap}>
            {rap.tenCumRap}
          </MenuItem>
        ))
      );
    } else return <MenuItem>Vui lòng chọn phim</MenuItem>;
  };

  const renderOptionShowDate = () => {
    if (infoHomeTool.cinema !== "cinema" && showTimes) {
      const arrRender = [];
      for (let key in showTimes) {
        arrRender.push(
          <MenuItem key={key} value={key}>
            {key}
          </MenuItem>
        );
      }
      return arrRender;
    } else {
      return <MenuItem>Vui lòng chọn rạp</MenuItem>;
    }
  };

  const renderOptionFilmShowtimes = () => {
    if (infoHomeTool.showDate !== "showDate" && showTimes) {
      return showTimes[infoHomeTool.showDate].map((lich) => {
        return (
          <MenuItem key={lich.maLichChieu} value={lich.maLichChieu}>
            {moment(lich.ngayChieuGioChieu).format("mm:hh:ss")}
          </MenuItem>
        );
      });
    } else {
      return <MenuItem>Vui lòng chọn ngày chiếu</MenuItem>;
    }
  };

  return (
    <Container style={{ maxWidth: "940px", position: "relative" }}>
      <Box
        id="home-tool"
        sx={{
          display: "flex",
          height: "80px",
          alignItems: "center",
          boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
          borderRadius: "5px",
          position: "absolute",
          width: "100%",
          transform: "translate(-50%,-50%)",
          left: "50%",
          zIndex: 2,
          background: "#fff",
        }}
      >
        <Box sx={{ width: "30%" }}>
          <FormControl
            sx={{
              width: "100%",
            }}
          >
            <Select
              labelId="demo-customized-select-label"
              id="homeTool-film"
              value={infoHomeTool.film}
              onChange={handleChangeFilm}
              input={<BootstrapInput />}
              name="film"
            >
              <MenuItem sx={{ display: "none" }} value="film">
                Phim
              </MenuItem>
              {renderOptionFilm()}
            </Select>
          </FormControl>
        </Box>
        <Box style={{ width: "calc(70% / 4)" }}>
          <FormControl
            sx={{
              width: "100%",
            }}
          >
            <Select
              labelId="demo-customized-select-label"
              id="homeTool-cinema"
              value={infoHomeTool.cinema}
              onChange={handleChangeClusterInformation}
              input={<BootstrapInput />}
              className={classes.slectItem}
              name="cinema"
            >
              <MenuItem sx={{ display: "none" }} value="cinema">
                Rạp
              </MenuItem>
              {renderOptionCinema()}
            </Select>
          </FormControl>
        </Box>
        <Box style={{ width: "calc(70% / 4)" }}>
          <FormControl
            sx={{
              width: "100%",
            }}
          >
            <Select
              labelId="demo-customized-select-label"
              id="homeTool-date"
              value={infoHomeTool.showDate}
              onChange={handleChangeDate}
              input={<BootstrapInput />}
              defaultValue="NgayChieu"
              className={classes.slectItem}
            >
              <MenuItem sx={{ display: "none" }} value="showDate">
                Ngày Chiếu
              </MenuItem>
              {renderOptionShowDate()}
            </Select>
          </FormControl>
        </Box>
        <Box style={{ width: "calc(70% / 4)" }}>
          <FormControl
            sx={{
              width: "100%",
            }}
          >
            <Select
              labelId="demo-customized-select-label"
              id="homeTool-time"
              value={infoHomeTool.filmShowtimes}
              onChange={handleChangeFilmShowtime}
              input={<BootstrapInput />}
              defaultValue="GioChieu"
              className={classes.slectItem}
            >
              <MenuItem sx={{ display: "none" }} value="filmShowtimes">
                Giờ Chiếu
              </MenuItem>
              {renderOptionFilmShowtimes()}
            </Select>
          </FormControl>
        </Box>
        <Box style={{ width: "calc(70% / 4)" }} className={classes.slectItem}>
          <Box sx={{ padding: "10px 15px" }}>
            <button
              className={` ${classes.btnBuyTicket} ${
                !infoHomeTool.showtimeId
                  ? classes.btnBuyTicketDisabled
                  : classes.btnBuyTicketEnabled
              }`}
              onClick={() => {
                infoHomeTool.showtimeId &&
                  history.push(`/ticketroom/${infoHomeTool.showtimeId}`);
              }}
            >
              Mua vé ngay
            </button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
