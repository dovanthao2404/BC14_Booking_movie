import React from "react";
import { useStyles } from "./style";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

export default function NavTop() {
  const classes = useStyles();
  return (
    <Box className={classes.checkoutTop}>
      <Box className={classes.brandCheckout}>
        <NavLink to="/">
          <img
            src="https://tix.vn/app/assets/img/icons/web-logo.png"
            alt="https://tix.vn/app/assets/img/icons/web-logo.png"
            className={classes.imgBrand}
          />
        </NavLink>
      </Box>
      <Box className={classes.processTop}>Chọn ghế và thanh toán</Box>
      <Box className={classes.account}>
        <Box className={classes.accountContent}>
          <img
            className={classes.imgProfile}
            src="https://picsum.photos/200/200"
            alt=""
          />
          <span className={classes.nameProfile}>Đỗ Văn Thảo</span>
          <div className={classes.btnLogout + " btnLogoutCheckou"}>
            Đăng xuất
          </div>
        </Box>
      </Box>
    </Box>
  );
}
