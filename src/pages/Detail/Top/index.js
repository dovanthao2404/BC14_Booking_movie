import { makeStyles, styled } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import "react-circular-progressbar/dist/styles.css";
import Rating from "./Rating";
import moment from "moment";

const useStyles = makeStyles({
  flexCenter: {
    display: "flex",
    justifyContent: "center",
  },
  posterLandscapeFilm: {
    paddingBottom: "43%",
    position: "relative",
    color: "white",
    overflow: "hidden",
  },
  overlay: {
    background: "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  imgBackground: {
    filter: "blur(15px)",
    margin: "0 0 -10px -10px",
    width: "calc(100% + 5px)",
    display: "block",
    objectFit: "cover",
    height: "100%",
    position: "absolute",
  },
  filmName: {
    paddingTop: "10px",
    fontSize: "22px",
  },
  btnPlayVideo: {
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50px",
    height: "50px",
  },
  infoFilmOverView: {
    maxWidth: "940px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  infoFilmLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoImg: {
    maxWidth: "220px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "4px",
  },
  titleResponse: {
    padding: "20px",
    color: "#9e9e9e",
    background: "rgb(10, 32, 41)",
  },
  "@media (max-width: 768px)": {
    imgBackground: {
      filter: "blur(0)",
    },
  },
});

const NewButton = styled(Button)(({ theme }) => ({
  "&.MuiButton-root": {
    background: "#fb4226",
    margin: "25px 0",
    "&:hover": {
      background: "#b42a14",
    },
  },
}));

export default function Top(props) {
  const { screenWidth, infoFilm } = props;
  const [isShowYoutube, setIsShowYoutube] = useState(false);
  const [isSeen, setIsSeen] = useState(false);

  useEffect(() => {
    if (screenWidth <= 768) {
      setIsShowYoutube(true);
    } else {
      setIsShowYoutube(false);
      setIsSeen(false);
    }
  }, [screenWidth]);

  const classes = useStyles();

  if (!infoFilm) {
    return <></>;
  }

  return (
    <>
      <Box className={classes.posterLandscapeFilm}>
        <Box>
          {!isShowYoutube || !isSeen ? (
            <Box className={classes.overlay}>
              <Box
                component={"img"}
                className={classes.imgBackground}
                src={infoFilm.hinhAnh}
                alt={infoFilm.hinhAnh}
              />{" "}
            </Box>
          ) : (
            ""
          )}
          <Box className={classes.overlay}></Box>

          <Box className={classes.overlay}>
            {isShowYoutube && isSeen ? (
              <iframe
                width="100%"
                height="100%"
                src={infoFilm.trailer}
                title="YouTube video player"
                frameBorder="0"
              ></iframe>
            ) : (
              ""
            )}
          </Box>

          {isShowYoutube && !isSeen ? (
            <img
              src="/assets/img/play-video.png"
              alt=""
              onClick={() => {
                setIsSeen(true);
              }}
              className={classes.btnPlayVideo}
            />
          ) : (
            ""
          )}
        </Box>

        {!isShowYoutube && !isSeen ? (
          <Container className={classes.infoFilmOverView}>
            <Box className={classes.infoFilmLeft}>
              <Box className={classes.flexCenter}>
                <Box
                  component="img"
                  src={infoFilm.hinhAnh}
                  alt={infoFilm.hinhAnh}
                  className={classes.infoImg}
                />
                <Box sx={{ padding: "0 20px" }}>
                  <p>
                    {moment(infoFilm.ngayKhoiChieu).format(
                      "DD/MM/YYYY - hh:mm"
                    )}
                  </p>
                  <p className={classes.filmName}>
                    {infoFilm.tenPhim.length > 25
                      ? infoFilm.tenPhim.slice(0, 25) + " ..."
                      : infoFilm.tenPhim}
                  </p>
                  <NewButton id="btnBuyTicket" variant="contained">
                    Mua vé
                  </NewButton>
                </Box>
              </Box>
              <Box>
                <div style={{ width: "160px", height: "160px" }}>
                  <Rating danhGia={infoFilm.danhGia} />
                </div>
              </Box>
            </Box>
          </Container>
        ) : (
          ""
        )}
      </Box>
      {screenWidth <= 768 ? (
        <Box className={classes.titleResponse}>
          <p>{moment(infoFilm.ngayKhoiChieu).format("DD/MM/YYYY - hh:mm")}</p>
          <p className={classes.filmName}>{infoFilm.tenPhim}</p>
        </Box>
      ) : (
        ""
      )}
    </>
  );
}
