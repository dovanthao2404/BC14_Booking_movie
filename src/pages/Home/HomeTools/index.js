import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import "./HomeTools.css";
import { makeStyles } from "@mui/styles";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    fontSize: 16,
    outline: "none",
    border: "none",
    padding: "20px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      background: "#fff",
    },
  },
}));

const useStyles = makeStyles({
  slectItem: {
    borderLeft: "1px solid rgba(238,238,238,0.88)",
  },
  btnBuyTicket: {
    width: "100%",
    height: "100%",
    padding: "10px 5px",
    border: "none",
    color: "#fff",
    fontSize: "14px",
    borderRadius: "4px",
    textTransform: "uppercase",
  },
  btnBuyTicketDisabled: {
    background: "#4a4a4a",
  },
  btnBuyTicketEnabled: {
    background: "#fb4226",
    cursor: "pointer",
    "&:hover": {
      background: "#d33e28",
    },
  },
});

export default function CustomizedSelects() {
  const classes = useStyles();
  const [age, setAge] = useState("Phim");
  const [isDisabled, setIsDisabled] = useState(true);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div
      id="home-tool"
      style={{
        display: "flex",
        height: "80px",
        alignItems: "center",
        boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
        borderRadius: "5px",
        position: "absolute",
        width: "100%",
        transform: "translate(-50%,-50%)",
        left: "50%",
        zIndex: 2,
        background: "#fff",
      }}
    >
      <div style={{ width: "30%" }}>
        <FormControl
          sx={{
            width: "100%",
          }}
          variant="standard"
        >
          <Select
            sx={{ marginRight: "6px" }}
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={age}
            onChange={handleChange}
            input={<BootstrapInput />}
            defaultValue="Phim"
          >
            <MenuItem sx={{ display: "none" }} value="Phim">
              Phim
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ width: "calc(70% / 4)" }}>
        {" "}
        <FormControl
          sx={{
            width: "100%",
          }}
          variant="standard"
        >
          <Select
            sx={{ marginRight: "6px" }}
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={age}
            onChange={handleChange}
            input={<BootstrapInput />}
            defaultValue="Phim"
            className={classes.slectItem}
          >
            <MenuItem sx={{ display: "none" }} value="Phim">
              Phim
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ width: "calc(70% / 4)" }}>
        {" "}
        <FormControl
          sx={{
            width: "100%",
          }}
          variant="standard"
        >
          <Select
            sx={{ marginRight: "6px" }}
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={age}
            onChange={handleChange}
            input={<BootstrapInput />}
            defaultValue="Phim"
            className={classes.slectItem}
          >
            <MenuItem sx={{ display: "none" }} value="Phim">
              Phim
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ width: "calc(70% / 4)" }}>
        {" "}
        <FormControl
          sx={{
            width: "100%",
          }}
          variant="standard"
        >
          <Select
            sx={{ marginRight: "6px" }}
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={age}
            onChange={handleChange}
            input={<BootstrapInput />}
            defaultValue="Phim"
            className={classes.slectItem}
          >
            <MenuItem sx={{ display: "none" }} value="Phim">
              Phim
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ width: "calc(70% / 4)" }} className={classes.slectItem}>
        <div style={{ padding: "10px 15px" }}>
          <button
            className={` ${classes.btnBuyTicket} ${
              isDisabled
                ? classes.btnBuyTicketDisabled
                : classes.btnBuyTicketEnabled
            }`}
            variant="contained"
          >
            Mua vé ngay
          </button>
        </div>
      </div>
    </div>
  );
}
