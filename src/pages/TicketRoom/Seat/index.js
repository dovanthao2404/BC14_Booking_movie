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
  const dispatch = useDispatch();
  const history = useHistory();

  const { screenWidth, setIsPayment, listTicketRoom, listSeatSelected } = props;

  const { thongTinPhim: filmInfo, danhSachGhe: listSeat } = listTicketRoom
    ? listTicketRoom
    : { thongTinPhim: null, danhSachGhe: null };

  const { userLogin } = useSelector((state) => state.userManagementReducer);

  const classes = useStyles();
  const [confirmDialog, setConfirmDialog] = useState({
    title: "",
    subTitle: "",
    isOpen: false,
    icon: (
      <ErrorOutlineOutlinedIcon sx={{ fontSize: "80px", color: "#f8bb86" }} />
    ),
  });

  useEffect(() => {
    const countDow = setInterval(() => {
      setTimeDown(timeDown - 1);
    }, 1000);

    timeDown === 0 &&
      (clearInterval(countDow) ||
        setConfirmDialog({
          title: "Hết giờ",
          subTitle: "Bạn có muốn đặt vé lại không",
          isOpen: true,
          icon: (
            <ErrorOutlineOutlinedIcon
              sx={{ fontSize: "80px", color: "#f8bb86" }}
            />
          ),
          onConfirm: () => {
            window.location.reload();
          },
          onNotConfirm: () => {
            history.push("/");
          },
        }));

    return () => {
      clearInterval(countDow);
    };
  }, [timeDown, history]);

  const renderConfirm = () => {
    if (screenWidth < 767.98)
      return (
        <Box className={classes.confirm}>
          <Box className={classes.confirmWrapper}>
            <Box className={clsx(classes.btnSeat, classes.btnShowSeat)}>
              {listSeatSelected?.length > 0
                ? listSeatSelected.reduce(
                    (listSeat, seatCurrent) =>
                      listSeat + seatCurrent.tenGhe + ", ",
                    ""
                  )
                : "Vui lòng chọn ghế"}
            </Box>
            <Box
              className={clsx(classes.btnSeat, classes.btnGoNext)}
              onClick={() => {
                if (listSeatSelected?.length) {
                  setIsPayment(true);
                }
              }}
              sx={{
                opacity: "1",
                background: listSeatSelected?.length
                  ? "#44c020"
                  : "#88d073 !important",
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
        cns: "/assets/img/CGV_theater.jpg",
        glx: "/assets/img/Galaxy_theater.jpg",
        lotte: "/assets/img/LotteCinima_theater.jpg",
        megags: "/assets/img/MegaGS_theater.jpg",
      };
      const tenRap = filmInfo.tenCumRap;
      let anhHeThong = "";
      for (let key in listCinema) {
        if (tenRap.toLowerCase().includes(key)) {
          anhHeThong = listCinema[key];
        }
      }
      if (!anhHeThong) {
        anhHeThong = "https://picsum.photos/50/50";
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

      const classMySeat =
        userLogin?.taiKhoan === listChair[i].taiKhoanNguoiDat ? "mySeat" : "";

      listSeatItem.push(
        <span
          key={i}
          onClick={() => {
            if (classOtherSelected || classMySeat) {
            } else {
              dispatch(actAddSeatSelected(listChair[i]));
            }
          }}
          className={clsx(
            styles.seat,
            styles[classVip],
            styles[classOtherSelected],
            styles[classSeatSelected],
            styles[classMySeat]
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
            <span className={`${styles.mySeat} ${styles.seat}`}></span>
            <p className={classes.seatNoteSub}>Ghế bạn đã đặt</p>
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
