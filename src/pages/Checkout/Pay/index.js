import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actBookTickets } from "redux/actions/TicketManagementActions";
import DialogCheckout from "../DialogCheckout";
import { useStyles } from "./style";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import WarningIcon from "@mui/icons-material/Warning";
import { useHistory } from "react-router-dom";

export default function Pay(props) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [confirmDialog, setConfirmDialog] = useState({
    title: "",
    subTitle: "",
    isOpen: false,
    icon: (
      <ErrorOutlineOutlinedIcon sx={{ fontSize: "80px", color: "#fbbb86" }} />
    ),
  });

  const { isPayment, screenWidth, listTicketRoom, listSeatSelected, id } =
    props;

  const { w7, w6, w5, w4, w3, dFlex, textRight, fontBold, colorGreen } =
    classes;

  const { thongTinPhim: filmInfo } = listTicketRoom
    ? listTicketRoom
    : { thongTinPhim: null, danhSachGhe: null };

  const handleBookTicket = () => {
    const data = {};
    data.maLichChieu = id;
    data.danhSachVe = listSeatSelected;
    const iconError = WarningIcon;
    const iconSuccess = CheckCircleOutlineIcon;
    dispatch(
      actBookTickets(
        data,
        history,
        confirmDialog,
        setConfirmDialog,
        iconError,
        iconSuccess
      )
    );
  };

  return (
    <>
      <Box
        className={classes.pay}
        sx={{
          display:
            isPayment && screenWidth < 767.98
              ? "block"
              : screenWidth < 767.98
              ? "none"
              : "block",
        }}
      >
        <Box className={classes.payWrapper}>
          <Box className={classes.payItem}>
            <p className={`${classes.totalMoney} ${fontBold} ${colorGreen}`}>
              {listSeatSelected?.reduce(
                (total, seat) => total + seat.giaVe,
                0
              ) || "0"}{" "}
              đ
            </p>
          </Box>
          <Box className={`${classes.payItem} ${fontBold}`}>
            {filmInfo?.tenPhim}
          </Box>
          <Box className={`${classes.payItem}`}>
            <Box className={`${dFlex}`}>
              <p className={`${w5}`}>Ngày giờ chiếu:</p>
              <p className={`${w5} ${textRight} ${fontBold}`}>
                {`${filmInfo?.ngayChieu} - ${filmInfo?.gioChieu}`}
              </p>
            </Box>
          </Box>
          <Box className={`${classes.payItem}`}>
            <Box className={`${dFlex}`}>
              <p className={`${w3}`}>Cụm rạp:</p>
              <p className={`${w7} ${textRight} ${fontBold}`}>
                {filmInfo?.tenCumRap}
              </p>
            </Box>
          </Box>
          <Box className={`${classes.payItem}`}>
            <Box className={`${dFlex}`}>
              <p className={`${w5}`}>Rạp:</p>
              <p className={`${w5} ${textRight}`}>{filmInfo?.tenRap}</p>
            </Box>
          </Box>
          <Box className={`${classes.payItem}`}>
            <Box className={`${dFlex}`}>
              <p className={`${w6}`}>
                {listSeatSelected?.length
                  ? listSeatSelected.reduce(
                      (listChair, chair) => listChair + chair.tenGhe + ", ",
                      "Ghế "
                    )
                  : "Vui lòng chọn ghế"}
              </p>
              <p className={`${w4} ${textRight} ${fontBold} ${colorGreen}`}>
                {listSeatSelected?.reduce(
                  (total, seat) => total + seat.giaVe,
                  0
                ) || "0"}{" "}
                đ
              </p>
            </Box>
          </Box>
        </Box>
        <Box className={`${classes.confirmItem}`}>
          <Box
            onClick={() => {
              if (listSeatSelected?.length) {
                setConfirmDialog({
                  title: "Thông tin đặt vé sẽ được gửi qua email",
                  subTitle: "Hãy kiểm tra thông tin trước khi xác nhận!",
                  isOpen: true,
                  icon: (
                    <ErrorOutlineOutlinedIcon
                      sx={{ fontSize: "80px", color: "#3fc3ee" }}
                    />
                  ),
                  onConfirm: handleBookTicket,
                });
              }
            }}
            className={`${classes.btnConfirm} ${
              listSeatSelected?.length ? "" : classes.btnConfirmDisabled
            }`}
          >
            Thanh Toán
          </Box>
        </Box>
      </Box>
      <DialogCheckout
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}
