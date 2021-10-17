import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink } from "react-router-hash-link";

const DrawerComponent = () => {
  const useStyles = makeStyles((theme) => ({
    drawerContainer: {
      width: "70%",
    },
    iconButtonContainer: {
      marginLeft: "auto",
      color: "white",
    },

    menuIconToggle: {
      fontSize: "3rem",
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
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Box>
                  <NavLink
                    to="/login"
                    style={{ textDecoration: "none", color: "#9b9b9b" }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#9b9b9b";
                    }}
                  >
                    <Box sx={{ display: "flex", alignContent: "center" }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          component="img"
                          sx={{
                            width: 30,
                            heigth: 30,
                            borderRadius: "50%",
                          }}
                          src="https://tix.vn/app/assets/img/avatar.png"
                          alt="https://tix.vn/app/assets/img/avatar.png"
                        />
                      </Box>
                      <Box
                        component="p"
                        sx={{
                          marginLeft: "8px",
                        }}
                      >
                        Đăng nhập
                      </Box>
                    </Box>
                  </NavLink>
                </Box>
              </ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <HashLink to="/" className={classes.hashLink}>
                  Lịch chiếu
                </HashLink>
              </ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <HashLink to="/" className={classes.hashLink}>
                  Cụm rạp
                </HashLink>
              </ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <HashLink to="/" className={classes.hashLink}>
                  Tin tức
                </HashLink>
              </ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <HashLink to="/" className={classes.hashLink}>
                  Ứng dụng
                </HashLink>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>

      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
        {/* toggle */}
      </IconButton>
    </>
  );
};

export default DrawerComponent;
