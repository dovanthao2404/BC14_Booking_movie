import React, { useState } from "react";
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
import { Box } from "@mui/system";

export default function Sidebar() {
  const [openUser, setOpenUser] = useState(true);
  const [openFilm, setOpenFilm] = useState(false);
  return (
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
              sx={{ maxWidth: 360, color: "#fff" }}
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
                        <AddPhotoAlternateIcon style={{ color: "white" }} />
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
  );
}
