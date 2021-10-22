import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./style";
export default function Pay() {
  const classes = useStyles();
  const { w7, w6, w5, w4, w3, dFlex, textRight, fontBold, colorGreen } =
    classes;

  return (
    <Box className={classes.pay}>
      <Box className={classes.payWrapper}>
        <Box className={classes.payItem}>
          <p className={`${classes.totalMoney} ${fontBold} ${colorGreen}`}>
            0 đ
          </p>
        </Box>
        <Box className={`${classes.payItem} ${fontBold}`}>
          Siêu Thú Cuồng Nộ
        </Box>
        <Box className={`${classes.payItem}`}>
          <Box className={`${dFlex}`}>
            <p className={`${w5}`}>Ngày giờ chiếu:</p>
            <p className={`${w5} ${textRight} ${fontBold}`}>
              01/01/2019 - 19:00
            </p>
          </Box>
        </Box>
        <Box className={`${classes.payItem}`}>
          <Box className={`${dFlex}`}>
            <p className={`${w3}`}>Cụm rạp:</p>
            <p className={`${w7} ${textRight} ${fontBold}`}>Tên cụm rạp</p>
          </Box>
        </Box>
        <Box className={`${classes.payItem}`}>
          <Box className={`${dFlex}`}>
            <p className={`${w5}`}>Rạp:</p>
            <p className={`${w5} ${textRight}`}>Rạp 10</p>
          </Box>
        </Box>
        <Box className={`${classes.payItem}`}>
          <Box className={`${dFlex}`}>
            <p className={`${w6}`}>Vui lòng chọn ghế</p>
            <p className={`${w4} ${textRight} ${fontBold} ${colorGreen}`}>
              0 đ
            </p>
          </Box>
        </Box>
      </Box>
      <Box className={`${classes.confirmItem}`}>
        <Box className={`${classes.btnConfirm}`}>Thanh Toán</Box>
      </Box>
    </Box>
  );
}
