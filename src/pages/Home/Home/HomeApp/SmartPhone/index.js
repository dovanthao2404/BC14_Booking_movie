import React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";

export default function SmartPhone(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  const renderSlider = () => {
    const listImg = [];
    for (let i = 1; i <= 16; i++) {
      listImg.push(
        <Box key={i}>
          <Box
            component="img"
            sx={{ width: "100%", height: "100%", display: "block" }}
            src={`/assets/img/slide${i}.jpg`}
            alt={`/assets/img/slide${i}.jpg`}
          />
        </Box>
      );
    }
    return listImg;
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        component="img"
        src="/assets/img/mobile.png"
        alt="/mobile.png"
        sx={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          padding: "0 28%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          padding: "1.5% 29.3% 0 29.3%",
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            width: "100%",
            left: 0,
            to: 0,
            height: "100%",
          }}
        >
          <Slider {...settings}>{renderSlider()}</Slider>
        </Box>
      </Box>
    </Box>
  );
}
