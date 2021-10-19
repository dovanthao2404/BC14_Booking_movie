import React, { useState } from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import "./Carousel.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

// Custom arrow react-slick
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      onClick={onClick}
      className={className}
      src="https://tix.vn/app/assets/img/icons/next-session.png"
      alt="https://tix.vn/app/assets/img/icons/next-session.png"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      onClick={onClick}
      className={className}
      src="https://tix.vn/app/assets/img/icons/back-session.png"
      alt="https://tix.vn/app/assets/img/icons/back-session.png"
    />
  );
}
// settings cho carousel
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  arrows: true,
  autoplay: true,
};

const useStyles = makeStyles({
  absoluteFull: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  relativeFull: {
    position: "relative",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  imgCarousel: {
    width: "100%",
    maxHeight: "100%",
    objectFit: "cover",
    objectPosition: "contain",
    display: "block",
  },
});

export default function Carousel(props) {
  const [mousePosition, setMousePosition] = useState(0);
  const classes = useStyles(props);

  const renderBanner = () => {
    return props.listBanner?.map((item) => {
      return (
        <Box key={item.maPhim} className={classes.relativeFull}>
          <Box className={`${classes.absoluteFull} carousel__item`}>
            <Link
              onMouseDown={(e) => {
                setMousePosition(e.pageX);
              }}
              onClick={(e) => {
                const { pageX } = e;
                if (Math.abs(pageX - mousePosition) > 10) {
                  e.preventDefault();
                }
              }}
              to="/detail/"
              style={{ position: "relative" }}
            >
              <Box
                component="img"
                src={item.hinhAnh}
                alt={item.hinhAnh}
                className={classes.imgCarousel}
              />
              <Box
                className={classes.absoluteFull}
                sx={{
                  background: "linear-gradient(to top,#000,transparent 20%)",
                }}
              ></Box>
            </Link>
            <img
              src="https://tix.vn/app/assets/img/icons/play-video.png"
              alt="https://tix.vn/app/assets/img/icons/play-video.png"
              className="play-icon"
              onClick={() => {
                console.log("a");
              }}
            />
          </Box>
        </Box>
      );
    });
  };

  return (
    <>
      <Box
        id="booking-carousel"
        sx={{
          paddingBottom: "43%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            zIndex: 1,
            backgroundColor: "#e8e8e8",
          }}
          className={classes.absoluteFull}
        >
          <Box className={`${classes.relativeFull} home-slick`}>
            <Slider {...settings}>{renderBanner()}</Slider>
          </Box>
        </Box>
      </Box>
    </>
  );
}
