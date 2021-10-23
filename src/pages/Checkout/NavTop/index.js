import React from "react";
import { useStyles } from "./style";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useDispatch } from "react-redux";
import { actHandleLogout } from "redux/actions/UserManagementActions";

export default function NavTop(props) {
  const { isPayment, setIsPayment, screenWidth } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("logout");
    dispatch(actHandleLogout());
  };

  return (
    <Box className={classes.checkoutTop}>
      <Box className={classes.brandCheckout}>
        {!isPayment ? (
          <NavLink to="/" onClick={() => setIsPayment(false)}>
            <img
              src="https://tix.vn/app/assets/img/icons/web-logo.png"
              alt="https://tix.vn/app/assets/img/icons/web-logo.png"
              className={classes.imgBrand}
            />
          </NavLink>
        ) : (
          <div onClick={() => setIsPayment(false)}>
            <ArrowBackIosNewIcon />
          </div>
        )}
      </Box>
      <Box className={classes.processTop}>
        {isPayment && screenWidth < 768.98
          ? "Thanh Toán"
          : screenWidth < 768.98
          ? "Chọn ghế"
          : "Chọn ghế và thanh toán"}
      </Box>
      <Box className={classes.account}>
        <Box className={classes.accountContent}>
          <img
            className={classes.imgProfile}
            src="https://picsum.photos/200/200"
            alt=""
          />
          <span className={classes.nameProfile}>Đỗ Văn Thảo</span>
          <div
            onClick={handleLogout}
            className={classes.btnLogout + " btnLogoutCheckou"}
          >
            Đăng xuất
          </div>
        </Box>
      </Box>
    </Box>
  );
}
