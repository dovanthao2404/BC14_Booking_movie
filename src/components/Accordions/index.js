import React, { Fragment, useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";

import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import moment from "moment";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const useStyles = makeStyles({
  btnCheckout: {
    margin: "0 10px 10px 0",
    outline: "none",
    width: "75px",
    height: "35px",

    fontSize: "16px",
    borderRadius: "4px",
    color: "#108f3e",
    border: "1px solid #e4e4e4",
    cursor: "pointer",
    transition: "all 0.5s",
    "&:hover": {
      boxShadow: "0 0 5px 1px #108f3e",
    },
  },
});

export default function Accordions(props) {
  const { film, screenWidth, handleChange, expanded, filmInfo, lichChieuPhim } =
    props;
  let history = useHistory();
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState("panel1");

  const handleChangeDetail = (panel) => (event, newExpanded) => {
    setIsOpen(newExpanded ? panel : false);
  };

  // Chuyển lịch chiếu thành {ngayChieu: [<Danh sách lịch chiếu của ngày chiếu>]}
  const flatArrayShowtimesToObject = (arr) => {
    if (arr) {
      const temp = {};
      for (let i = 0; i < arr.length; i++) {
        const date = moment(arr[i].ngayChieuGioChieu).format("DD/MM/YYYY");
        if (
          !Object.keys(temp).includes(date) ||
          Object.keys(temp).length === 0
        ) {
          temp[date] = [{ ...arr[i] }];
          for (let j = i + 1; j < arr.length; j++) {
            const calendarCurrent = { ...arr[j] };
            const dateCurrent = moment(arr[j].ngayChieuGioChieu).format(
              "DD/MM/YYYY"
            );
            dateCurrent === date && temp[date].push(calendarCurrent);
          }
        }
      }

      return temp;
    }
  };

  const renderTime = (danhSachLichChieuTheoNgay, key) => {
    return danhSachLichChieuTheoNgay[key].map((lichChieu, index) => {
      return (
        <Box
          key={index}
          onClick={() => {
            history.push(`/ticketroom/${lichChieu.maLichChieu}`);
          }}
          component="button"
          className={classes.btnCheckout}
          variant="contained"
        >
          {moment(lichChieu.ngayChieuGioChieu).format("hh:mm")}
        </Box>
      );
    });
  };

  const renderShowtimes = () => {
    const danhSachLichChieuTheoNgay = flatArrayShowtimesToObject(
      film?.lstLichChieuTheoPhim || lichChieuPhim
    );
    const listShowDate = [];
    let i = 0;
    for (let key in danhSachLichChieuTheoNgay) {
      listShowDate.push(
        <div key={key + ++i}>
          <div>
            <Box component="h4" sx={{ mb: 1 }}>
              Ngày: {key}
            </Box>
          </div>
          <Box sx={{ marginTop: "8px", display: "flex", flexWrap: "wrap" }}>
            <div>{renderTime(danhSachLichChieuTheoNgay, key)}</div>
          </Box>
        </div>
      );
    }
    return listShowDate;
  };

  if (film) {
    return (
      <Accordion
        expanded={expanded === film?.maPhim}
        onChange={handleChange(film?.maPhim)}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id={film?.maPhim}
          sx={{
            padding: "8px 20px",
            flexDirection: "row",
            margin: 0,
            paddingLeft: "12px",
          }}
        >
          <Typography component="div">
            <Box sx={{ display: "flex", margin: 0 }}>
              <img
                src={film?.hinhAnh}
                alt={film?.hinhAnh}
                onError={(e) => {
                  e.onError = null;
                  e.target.src =
                    "https://bitsofco.de/content/images/2018/12/broken-1.png";
                }}
                style={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                  borderRadius: "6px",
                }}
              />
              <Box sx={{ pl: "12px", fontWeight: "bold" }}>{film?.tenPhim}</Box>
            </Box>
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            maxHeight:
              screenWidth >= 982
                ? "200px"
                : screenWidth >= 768
                ? "180px"
                : "180px",
            overflow: "auto",
          }}
        >
          <Box>
            <Box
              component="h2"
              sx={{ fontWeight: "bold", mb: 1, color: "#1976d2" }}
            >
              2D Digital
            </Box>

            {renderShowtimes()}
          </Box>
        </AccordionDetails>
      </Accordion>
    );
  }

  if (filmInfo) {
    return (
      <Accordion
        expanded={isOpen === "panel1"}
        onChange={handleChangeDetail("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id={filmInfo.maPhim}
          sx={{
            padding: "8px 20px",
            flexDirection: "row",
            margin: 0,
            paddingLeft: "12px",
          }}
        >
          <Typography component="div">
            <Box sx={{ display: "flex", margin: 0 }}>
              <img
                src={filmInfo?.hinhAnh}
                alt={filmInfo?.hinhAnh}
                onError={(e) => {
                  e.onError = null;
                  e.target.src =
                    "https://bitsofco.de/content/images/2018/12/broken-1.png";
                }}
                style={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                  borderRadius: "6px",
                }}
              />
              <Box sx={{ pl: "12px", fontWeight: "bold" }}>
                {filmInfo?.tenPhim}
              </Box>
            </Box>
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            maxHeight:
              screenWidth >= 982
                ? "200px"
                : screenWidth >= 768
                ? "180px"
                : "180px",
            overflow: "auto",
          }}
        >
          <Box>
            <Box
              component="h2"
              sx={{ fontWeight: "bold", mb: 1, color: "#1976d2" }}
            >
              2D Digital
            </Box>

            {renderShowtimes()}
          </Box>
        </AccordionDetails>
      </Accordion>
    );
  }
  return <></>;
}
