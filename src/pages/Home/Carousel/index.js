import React, { useState } from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import "./Carousel.css";
import { Link } from "react-router-dom";

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

export default function Carousel() {
  const [mousePosition, setMousePosition] = useState(0);

  return (
    <>
      <Box
        id="booking-carousel"
        sx={{ paddingBottom: "43%", position: "relative" }}
      >
        <div
          style={{
            zIndex: 1,
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            height: "100%",
            backgroundColor: "#e8e8e8",
          }}
        >
          <div
            style={{
              position: "relative",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Slider {...settings}>
              <Box
                sx={{
                  position: "relative",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    height: "100%",
                    width: "100%",
                  }}
                  className="carousel__item"
                >
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
                    <img
                      src="https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
                      alt="https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
                      style={{
                        width: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                        objectPosition: "contain",
                        display: "block",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(to top,#000,transparent 20%)",
                        top: "0",
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
              <Box
                sx={{
                  position: "relative",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    height: "100%",
                    width: "100%",
                  }}
                  className="carousel__item"
                >
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
                    <img
                      src="https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
                      alt="https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
                      style={{
                        width: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                        objectPosition: "contain",
                        display: "block",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(to top,#000,transparent 20%)",
                        top: "0",
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
            </Slider>
          </div>
        </div>
      </Box>
    </>
  );
}
