import React from "react";
import { useStyles } from "./style";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useDispatch, useSelector } from "react-redux";
import { actHandleLogout } from "redux/actions/UserManagementActions";

export default function NavTop(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isPayment, setIsPayment, screenWidth } = props;
  const { userLogin } = useSelector((state) => state.userManagementReducer);

  const handleLogout = () => {
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
            src="https://picsum.photos/50/50"
            alt="https://picsum.photos/50/50"
          />
          <span className={classes.nameProfile}>{userLogin?.hoTen}</span>
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
