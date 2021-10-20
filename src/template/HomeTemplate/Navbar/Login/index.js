import React from "react";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { actHandleLogout } from "redux/actions/UserManagementActions";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();
  const { userLogin } = props;

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <NavLink
          to={userLogin ? "/profile" : "/login"}
          style={{ textDecoration: "none", color: "#9b9b9b" }}
          onMouseOver={(e) => {
            e.target.style.color = "#9b9b9b";
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                component="img"
                sx={{
                  width: 30,
                  heigth: 30,
                  borderRadius: "50%",
                }}
                src={
                  userLogin
                    ? "https://www.picsum.photos/30/30"
                    : `https://tix.vn/app/assets/img/avatar.png`
                }
                alt={
                  userLogin
                    ? "https://www.picsum.photos/30/30"
                    : `https://tix.vn/app/assets/img/avatar.png`
                }
              />
            </Box>
            <Box
              component="p"
              sx={{
                marginLeft: "8px",
              }}
            >
              {userLogin ? userLogin.hoTen : "Đăng nhập"}
            </Box>
          </Box>
        </NavLink>
        <Box
          sx={{
            border: "1px solid #e9e9e9",
            margin: "0 12px",
            padding: "12px 0",
          }}
        ></Box>
        <NavLink
          to="/register"
          style={{ textDecoration: "none", color: "#9b9b9b" }}
          onMouseOver={(e) => {
            e.target.style.color = "#9b9b9b";
          }}
          onClick={(e) => {
            if (userLogin) {
              e.preventDefault();
              dispatch(actHandleLogout());
            }
          }}
        >
          <Box sx={{ height: "100%" }} component="p">
            {userLogin ? "Đăng xuất" : "Đăng ký"}
          </Box>
        </NavLink>
      </Box>
    </>
  );
};
export default Login;
