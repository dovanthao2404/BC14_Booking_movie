import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import "./HomeApp.css";
import { makeStyles } from "@mui/styles";
import SmartPhone from "./SmartPhone";

const useStyles = makeStyles({
  btnApp: {
    border: "none",
    outline: "none",
    fontSize: "16px",
    padding: "10px 20px",
    fontWeight: "bold",
    background: "#fb4226",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
});

export default function HomeApp(props) {
  const { screenWidth } = props;
  const classes = useStyles();

  return (
    <Box id="homeApp">
      <Container style={{ maxWidth: "940px" }}>
        <Box
          sx={{
            display: screenWidth >= 900 ? "flex" : "block",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: screenWidth >= 900 ? "50%" : "100%",
              paddingTop: "60px",
              paddingLeft: "15px",
              paddingRight: "15x",
              textAlign: screenWidth >= 900 ? "unset" : "center",
            }}
          >
            <Box
              component="p"
              sx={{
                marginBottom: "10px",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              Ứng dụng tiện lợi dành cho
            </Box>
            <Box
              component="p"
              sx={{
                marginBottom: "10px",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              người yêu điện ảnh
            </Box>
            <br />
            <Box component="p" sx={{ mb: "10px" }}>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </Box>
            <br />

            <button className={classes.btnApp}>
              App miễn phí - Tải về ngay
            </button>
            <Box component="p" sx={{ my: "10px" }}>
              TIX có hai phiên bản{" "}
              <Box
                component="span"
                sx={{ textDecoration: "underline", cursor: "pointer" }}
              >
                iOS
              </Box>{" "}
              &{" "}
              <Box
                component="span"
                sx={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Android
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: screenWidth >= 900 ? "50%" : "100%" }}>
            <SmartPhone screenWidth={screenWidth} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
