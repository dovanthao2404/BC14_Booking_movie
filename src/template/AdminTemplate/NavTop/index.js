import React, { useRef, useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import MenuList from "@mui/material/MenuList";
import { Box } from "@mui/system";
import { actHandleLogout } from "redux/actions/UserManagementActions";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

export default function NavTop(props) {
  const dispatch = useDispatch();
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
  const { userLogin } = props;
  return (
    <Box component="nav" padding="20px" sx={{ background: "#fff" }}>
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
          <Box component="p" sx={{ marginLeft: "8px", fontWeight: "bold" }}>
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
                    placement === "bottom-start" ? "left top" : "left bottom",
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
  );
}
