import { Box } from "@mui/system";
import React, { Suspense, useRef, useState } from "react";
import { Route, Redirect } from "react-router";
import { Link, NavLink } from "react-router-dom";
import {
  ListItemText,
  ListItemButton,
  ListItemIcon,
  List,
  Collapse,
} from "@mui/material";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useDispatch, useSelector } from "react-redux";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import MenuList from "@mui/material/MenuList";
import {
  actGetInfoUser,
  actHandleLogout,
} from "redux/actions/UserManagementActions";
import Loading from "components/Loading";

export default function AdminTemplate({ Component, ...props }) {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.userManagementReducer);
  const [openUser, setOpenUser] = useState(true);
  const [openFilm, setOpenFilm] = useState(false);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <Route
      {...props}
      render={(propsRoute) => {
        if (userLogin) {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  background: "#f0f2f5",
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      height: "100vh",
                      background: "#333",
                      width: "300px",
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Link to="/">
                        <Box
                          component="img"
                          src="https://tix.vn/app/assets/img/icons/fade-loading/11.png"
                          alt="https://tix.vn/app/assets/img/icons/web-logo.png"
                          sx={{ padding: "4px", width: "100px" }}
                        />
                      </Link>
                    </Box>
                    <Box paddingTop="20px">
                      <nav aria-label="main mailbox folders">
                        <List
                          sx={{ width: "100%", maxWidth: 360, color: "#fff" }}
                          component="nav"
                          aria-labelledby="nested-list-subheader"
                        >
                          <NavLink
                            activeStyle={{ color: "#FB4021" }}
                            to="/admin/dashboard"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <ListItemButton>
                              <ListItemIcon>
                                <AvTimerIcon style={{ color: "white" }} />
                              </ListItemIcon>
                              <ListItemText primary="Dashboard" />
                            </ListItemButton>
                          </NavLink>
                          <ListItemButton
                            onClick={() => {
                              setOpenUser(!openUser);
                            }}
                          >
                            <ListItemIcon>
                              <PersonIcon style={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary="Người dùng" />
                            {openUser ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>

                          <Collapse in={openUser} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              <NavLink
                                activeStyle={{ color: "#FB4021" }}
                                to="/admin/user-management"
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                              >
                                <ListItemButton sx={{ pl: 4 }}>
                                  <ListItemIcon>
                                    <GroupIcon style={{ color: "white" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Quản lý người dùng" />
                                </ListItemButton>
                              </NavLink>
                              <NavLink
                                activeStyle={{ color: "#FB4021" }}
                                to="/admin/add-user"
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                              >
                                <ListItemButton sx={{ pl: 4 }}>
                                  <ListItemIcon>
                                    <PersonAddIcon style={{ color: "white" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Thêm người dùng" />
                                </ListItemButton>
                              </NavLink>
                            </List>
                          </Collapse>
                          <ListItemButton
                            onClick={() => {
                              setOpenFilm(!openFilm);
                            }}
                          >
                            <ListItemIcon>
                              <LocalMoviesIcon style={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary="Phim" />
                            {openFilm ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>

                          <Collapse in={openFilm} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              <NavLink
                                activeStyle={{ color: "#FB4021" }}
                                to="/admin/film-management"
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                              >
                                <ListItemButton sx={{ pl: 4 }}>
                                  <ListItemIcon>
                                    <GroupWorkIcon style={{ color: "white" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Quản lý phim" />
                                </ListItemButton>
                              </NavLink>
                              <NavLink
                                activeStyle={{ color: "#FB4021" }}
                                to="/admin/add-film"
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                              >
                                <ListItemButton sx={{ pl: 4 }}>
                                  <ListItemIcon>
                                    <AddPhotoAlternateIcon
                                      style={{ color: "white" }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText primary="Thêm phim" />
                                </ListItemButton>
                              </NavLink>
                            </List>
                          </Collapse>
                        </List>
                      </nav>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ width: "calc(100% - 300px)" }}>
                  <Box>
                    <Box
                      component="nav"
                      padding="20px"
                      sx={{ background: "#fff" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "end",
                          position: "relative",
                        }}
                      >
                        <Button
                          ref={anchorRef}
                          id="composition-button"
                          aria-controls={open ? "composition-menu" : undefined}
                          aria-expanded={open ? "true" : undefined}
                          aria-haspopup="true"
                          onClick={handleToggle}
                          type="link"
                        >
                          <Box
                            component="img"
                            sx={{ borderRadius: "50%" }}
                            src="https://picsum.photos/50/50"
                            alt=""
                          />
                          <Box
                            component="p"
                            sx={{ marginLeft: "8px", fontWeight: "bold" }}
                          >
                            {userLogin?.hoTen}
                          </Box>
                        </Button>
                        <Box sx={{ position: "absolute", bottom: 0 }}>
                          <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
                          >
                            {({ TransitionProps, placement }) => (
                              <Grow
                                {...TransitionProps}
                                style={{
                                  transformOrigin:
                                    placement === "bottom-start"
                                      ? "left top"
                                      : "left bottom",
                                }}
                              >
                                <Paper>
                                  <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                      autoFocusItem={open}
                                      id="composition-menu"
                                      aria-labelledby="composition-button"
                                      onKeyDown={handleListKeyDown}
                                    >
                                      <MenuItem onClick={handleClose}>
                                        <NavLink
                                          style={{
                                            textDecoration: "none",
                                            color: "black",
                                          }}
                                          to={`/admin/edit-user/${userLogin.taiKhoan}`}
                                          onClick={() => {
                                            dispatch(
                                              actGetInfoUser(userLogin.taiKhoan)
                                            );
                                          }}
                                        >
                                          Chỉnh sửa
                                        </NavLink>
                                      </MenuItem>
                                      <MenuItem
                                        onClick={() => {
                                          dispatch(actHandleLogout());
                                        }}
                                      >
                                        Đăng xuất
                                      </MenuItem>
                                    </MenuList>
                                  </ClickAwayListener>
                                </Paper>
                              </Grow>
                            )}
                          </Popper>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        margin: "40px 40px 0",
                        minHeight: "500px",
                        background: "#fff",
                      }}
                    >
                      <Box sx={{ padding: "24px" }}>
                        <Suspense fallback={<Loading />}>
                          <Component {...propsRoute} />
                        </Suspense>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box></Box>
              </Box>
            </>
          );
        }

        return <Redirect to="/auth" />;
      }}
    />
  );
}
