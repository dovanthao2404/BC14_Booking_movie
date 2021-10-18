import React from "react";
import { HashLink } from "react-router-hash-link";

import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

import DrawerComponent from "./DrawerComponent/DrawerComponent";
import { useSelector } from "react-redux";
import Login from "./Login";

const useStyles = makeStyles({
  hashLink: {
    color: "#000",
    textDecoration: "none",
    marginRight: 20,
    "&:hover": {
      color: "#fa5238",
    },
    fontSize: "14px",
  },
  lastChild: {
    margin: 0,
  },
});

const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const { userLogin } = useSelector((state) => state.userManagementReducer);

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 0 15px rgb(0 0 0 / 30%)",
          height: "64px",
          justifyContent: "space-evenly",
        }}
      >
        <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ lineHeight: 0 }}>
            <Box
              component="img"
              sx={{ width: 50, height: 50 }}
              src="https://tix.vn/app/assets/img/icons/web-logo.png"
              alt="https://tix.vn/app/assets/img/icons/web-logo.png"
            />
          </Typography>
          {isMatch ? (
            <>
              <DrawerComponent userLogin={userLogin} />
            </>
          ) : (
            <>
              <Box component="ul" sx={{ display: "flex", padding: 0 }}>
                <Box component="li">
                  <HashLink className={classes.hashLink} to="#">
                    Lịch chiếu
                  </HashLink>
                </Box>
                <Box component="li">
                  <HashLink className={classes.hashLink} to="#">
                    Cụm rạp
                  </HashLink>
                </Box>
                <Box component="li">
                  <HashLink className={classes.hashLink} to="#">
                    Tin tức
                  </HashLink>
                </Box>
                <Box component="li">
                  <HashLink
                    className={`${classes.hashLink} ${classes.lastChild}`}
                    to="#"
                  >
                    Ứng dụng
                  </HashLink>
                </Box>
              </Box>
              <Login userLogin={userLogin} />
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
