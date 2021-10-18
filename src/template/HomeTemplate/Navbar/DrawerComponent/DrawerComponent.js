import React, { useState } from "react";
import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import { makeStyles, styled } from "@mui/styles";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink } from "react-router-hash-link";
import { actHandleLogout } from "redux/actions/UserManagementActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const DrawerComponent = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userLogin } = props;

  const useStyles = makeStyles((theme) => ({
    drawerContainer: {
      width: "70%",
    },

    menuIconToggle: {
      fontSize: "2rem",
    },
    hashLink: {
      color: "#000",
      textDecoration: "none",
      marginRight: 20,
      "&:hover": {
        color: "#fa5238",
      },
      fontSize: "18px",
    },
  }));

  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();

  return (
    <>
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <List>
          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              if (userLogin) {
                history.push("/profile");
              } else {
                history.push("/login");
              }
            }}
          >
            <ListItemText>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component="img"
                  sx={{
                    width: 30,
                    heigth: 30,
                    borderRadius: "50%",
                  }}
                  src={
                    userLogin
                      ? "https://picsum.photos/30/30"
                      : "https://tix.vn/app/assets/img/avatar.png"
                  }
                  alt={
                    userLogin
                      ? "https://picsum.photos/30/30"
                      : "https://tix.vn/app/assets/img/avatar.png"
                  }
                />
                <Box
                  component="p"
                  sx={{
                    marginLeft: "8px",
                  }}
                >
                  {userLogin ? userLogin.hoTen : "Đăng nhập"}
                </Box>
              </Box>
            </ListItemText>
          </ListItem>

          <ListItem
            sx={{ padding: 0 }}
            divider
            button
            onClick={() => setOpenDrawer(false)}
          >
            <HashLink
              style={{
                padding: "8px 16px",
                textDecoration: "none",
                color: "#000",
                width: "100%",
              }}
              to="/a"
            >
              <ListItemText>Lịch chiếu</ListItemText>
            </HashLink>
          </ListItem>

          <ListItem
            sx={{ padding: 0 }}
            divider
            button
            onClick={() => setOpenDrawer(false)}
          >
            <HashLink
              style={{
                padding: "8px 16px",
                textDecoration: "none",
                color: "#000",
                width: "100%",
              }}
              to="/"
            >
              <ListItemText>Cụm rạp</ListItemText>
            </HashLink>
          </ListItem>

          <ListItem
            sx={{ padding: 0 }}
            divider
            button
            onClick={() => setOpenDrawer(false)}
          >
            <HashLink
              style={{
                padding: "8px 16px",
                textDecoration: "none",
                color: "#000",
                width: "100%",
              }}
              to="/"
            >
              <ListItemText>Tin tức</ListItemText>
            </HashLink>
          </ListItem>

          <ListItem
            sx={{ padding: 0 }}
            divider
            button
            onClick={() => setOpenDrawer(false)}
          >
            <HashLink
              style={{
                padding: "8px 16px",
                textDecoration: "none",
                color: "#000",
                width: "100%",
              }}
              to="/"
            >
              <ListItemText>Ứng dụng</ListItemText>
            </HashLink>
          </ListItem>
          {userLogin ? (
            <ListItem
              divider
              button
              onClick={() => {
                setOpenDrawer(false);
                dispatch(actHandleLogout());
              }}
            >
              <ListItemText>Đăng xuất</ListItemText>
            </ListItem>
          ) : (
            ""
          )}
        </List>
      </Drawer>

      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
