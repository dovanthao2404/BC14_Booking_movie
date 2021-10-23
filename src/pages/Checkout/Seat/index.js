import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import styles from "./Seat.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { actAddSeatSelected } from "redux/actions/TicketManagementActions";
import { useHistory } from "react-router-dom";
import DialogCheckout from "../DialogCheckout";
import { connection } from "index";

function secondsToTime(secs) {
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };
  return obj;
}

export default function Seat(props) {
  const [timeDown, setTimeDown] = useState(90);
  const history = useHistory();
  const [confirmDialog, setConfirmDialog] = useState({
    title: "",
    subTitle: "",
    isOpen: false,
    icon: (
      <ErrorOutlineOutlinedIcon sx={{ fontSize: "80px", color: "#f8bb86" }} />
    ),
  });

  const { screenWidth, setIsPayment, listTicketRoom, listSeatSelected, id } =
    props;

  const dispatch = useDispatch();
  const { listSeatRealtime } = useSelector(
    (state) => state.ticketManagementReducer
  );
  const { thongTinPhim: filmInfo, danhSachGhe: listSeat } = listTicketRoom
    ? listTicketRoom
    : { thongTinPhim: null, danhSachGhe: null };

  const classes = useStyles();

  // useEffect(() => {
  //   const countDow = setInterval(() => {
  //     setTimeDown(timeDown - 1);
  //   }, 1000);

  //   timeDown === 0 &&
  //     (clearInterval(countDow) ||
  //       setConfirmDialog({
  //         title: "Hết giờ",
  //         subTitle: "Bạn có muốn đặt vé lại không",
  //         isOpen: true,
  //         icon: (
  //           <ErrorOutlineOutlinedIcon
  //             sx={{ fontSize: "80px", color: "#f8bb86" }}
  //           />
  //         ),
  //         onConfirm: () => {
  //           window.location.reload();
  //         },
  //         onNotConfirm: () => {
  //           history.push("/");
  //         },
  //       }));

  //   return () => {
  //     clearInterval(countDow);
  //   };
  // }, [timeDown, history]);

  useEffect(() => {
    connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
      console.log(dsGheKhachDat);
    });
  }, []);

  const renderConfirm = () => {
    if (screenWidth < 767.98)
      return (
        <Box className={classes.confirm}>
          <Box className={classes.confirmWrapper}>
            <Box className={clsx(classes.btnSeat, classes.btnShowSeat)}>
              Vui lòng chọn ghế
            </Box>
            <Box
              className={clsx(classes.btnSeat, classes.btnGoNext)}
              onClick={() => {
                if (listSeatSelected?.length) {
                  setIsPayment(true);
                }
              }}
              sx={{
                opacity: listSeatSelected?.length ? "1" : "0.6",
                cursor: listSeatSelected?.length
                  ? "pointer"
                  : "default !important",
              }}
            >
              Tiếp Tục
            </Box>
          </Box>
        </Box>
      );
  };

  const renderLogoCinema = () => {
    if (filmInfo) {
      const listCinema = {
        bhd: "/assets/img/BHDStar_theater.jpg",
        cgv: "/assets/img/CGV_theater.jpg",
        cinestar: "/assets/img/CGV_theater.jpg",
        galaxy: "/assets/img/Galaxy_theater.jpg",
        lotte: "/assets/img/LotteCinima_theater.jpg",
        mega: "/assets/img/MegaGS_theater.jpg",
      };
      const tenRap = filmInfo.tenCumRap;
      let anhHeThong = "";
      for (let key in listCinema) {
        if (tenRap.toLowerCase().includes(key)) {
          anhHeThong = listCinema[key];
        }
      }
      return (
        <img className={classes.topLeftImg} src={anhHeThong} alt={anhHeThong} />
      );
    }
  };

  const renderSeatItem = (listChair) => {
    const listSeatItem = [];
    for (let i = 0; i < 16; i++) {
      const classVip = listChair[i].loaiGhe === "Vip" ? "seatVip" : "";
      const classOtherSelected = listChair[i].daDat ? "seatOtherSelected" : "";

      const isSeatSelected = listSeatSelected?.find(
        (seatSelected) => seatSelected.maGhe === listChair[i].maGhe
      );
      const classSeatSelected = isSeatSelected ? "seatSelected" : "";

      const isRealTime = listSeatRealtime?.find(
        (seat) => seat.maGhe === listChair[i].maGhe
      );
      const classSeatRealtime = isRealTime ? "seatRealtimeSelected" : "";
      listSeatItem.push(
        <span
          key={i}
          onClick={() => {
            if (!classOtherSelected || !classSeatRealtime)
              dispatch(actAddSeatSelected(listChair[i], id));
          }}
          className={clsx(
            styles.seat,
            styles[classVip],
            styles[classOtherSelected],
            styles[classSeatSelected],
            styles[classSeatRealtime]
          )}
        >
          {listChair[i]?.tenGhe}
        </span>
      );
    }
    return listSeatItem;
  };

  const renderListSeat = () => {
    if (listSeat) {
      const listSeatRender = [];
      for (let i = 0; i < listSeat.length; i += 16) {
        const cloneListSeat = [...listSeat];
        const listSeatSlice = cloneListSeat.slice(i, i + 16);
        listSeatRender.push(
          <div key={i} className={classes.seatRow}>
            {renderSeatItem(listSeatSlice)}
          </div>
        );
      }
      return listSeatRender;
    }
  };

  return (
    <>
      <Box className={classes.seatSection}>
        <Box className={classes.seatSectionTop}>
          <Box className={classes.topLeft}>
            {renderLogoCinema()}
            <div>
              <p className={classes.cinemaName}>{filmInfo?.tenCumRap}</p>
              <p className={classes.cinemaAddress}>{filmInfo?.diaChi}</p>
            </div>
          </Box>
          <Box className={classes.topRight}>
            <div className={classes.topRightContent}>
              <p>Thời gian giữ ghế</p>
              <span>
                {`${
                  secondsToTime(timeDown).m >= 10
                    ? secondsToTime(timeDown).m
                    : "0" + secondsToTime(timeDown).m
                }:${
                  secondsToTime(timeDown).s >= 10
                    ? secondsToTime(timeDown).s
                    : "0" + secondsToTime(timeDown).s
                }`}
              </span>
            </div>
          </Box>
        </Box>
        <div className={classes.screen}>
          <img src="/assets/img/screen.png" alt="" />
        </div>
        <Box className={classes.seatMap}>
          <div className={classes.listSeat}>{renderListSeat()}</div>
        </Box>
        <Box className={classes.noteSeat}>
          <div className={classes.noteSeatItem}>
            <span className={`${styles.seat}`}></span>
            <p className={classes.seatNoteSub}>Ghế thường</p>
          </div>
          <div className={classes.noteSeatItem}>
            <span className={` ${styles.seat} ${styles.seatVip}`}></span>
            <p className={classes.seatNoteSub}>Ghế vip</p>
          </div>
          <div className={classes.noteSeatItem}>
            <span className={`${styles.seatSelected} ${styles.seat}`}></span>
            <p className={classes.seatNoteSub}>Ghế đang chọn</p>
          </div>
          <div className={classes.noteSeatItem}>
            <span
              className={`${styles.seatOtherSelected} ${styles.seat}`}
            ></span>
            <p className={classes.seatNoteSub}>Ghế đã có người chọn</p>
          </div>
          <div className={classes.noteSeatItem}>
            <span
              className={`${styles.seatRealtimeSelected} ${styles.seat}`}
            ></span>
            <p className={classes.seatNoteSub}>Ghế đang đặt</p>
          </div>
        </Box>
      </Box>
      {renderConfirm()}
      <DialogCheckout
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}
