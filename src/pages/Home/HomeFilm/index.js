import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import Slider from "react-slick";
import "./HomeFilm.css";
import Card from "./Card";

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

export default function HomeFilm() {
  const [isNowShow, setIsNowShow] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    // arrows: false,
    arrows: screenWidth > 1050 ? true : false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  window.onresize = (e) => {
    setScreenWidth(e.target.innerWidth);
  };

  const renderCardFilm = () => {
    let a = [2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22];
    a.length = 20;
    return a.map((value, key) => {
      console.log(key);
      return (
        <div key={key}>
          <Card />
        </div>
      );
    });
  };
  return (
    <Container
      id="homeFilm"
      style={{ maxWidth: "940px", position: "relative", paddingTop: "75px" }}
      className="home-slick"
    >
      <ul className={"homeFilm__nav"}>
        <li
          onClick={() => {
            setIsNowShow(!isNowShow);
          }}
          className={`homeFilm__navChild  ${isNowShow ? `active` : ""}`}
        >
          Đang chiếu{" "}
        </li>
        <li
          onClick={() => {
            setIsNowShow(!isNowShow);
          }}
          className={`homeFilm__navChild ${!isNowShow ? `active` : ""}`}
        >
          Sắp chiếu{" "}
        </li>
      </ul>
      <div>
        <Slider {...settings}>{renderCardFilm()}</Slider>
      </div>
    </Container>
  );
}
