import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Loading from "./../../components/Loading";
import { useDispatch, useSelector } from "react-redux";

import Carousel from "./Carousel";
import HomeTools from "./HomeTools";
import {
  actGetListBanner,
  actGetListFilm,
} from "redux/actions/FilmManagementActions";
import HomeFilm from "./HomeFilm";
import Complex from "./Complex";
import HomeNews from "./HomeNews";

export default function HomgPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.onresize = (e) => {
    setScreenWidth(e.target.innerWidth);
  };

  const dispatch = useDispatch();
  const { listBanner, listFilmNowShowing, isLoading } = useSelector(
    (state) => state.filmManagementReducer
  );

  useEffect(() => {
    dispatch(actGetListBanner());
    dispatch(actGetListFilm());
  }, []);

  const responsiveHomeTool = () => {
    if (screenWidth > 975) {
      return <HomeTools listFilmNowShowing={listFilmNowShowing} />;
    }
  };
  const responsiveCarousel = () => {
    if (screenWidth > 768) {
      return <Carousel listBanner={listBanner} />;
    }
  };
  if (isLoading) return <Loading />;
  return (
    <Box sx={{ marginTop: "64px" }}>
      {responsiveCarousel()}
      {responsiveHomeTool()}
      <HomeFilm screenWidth={screenWidth} />
      <Complex screenWidth={screenWidth} />
      <HomeNews screenWidth={screenWidth} />
      <div style={{ height: "1000px" }}></div>
    </Box>
  );
}
