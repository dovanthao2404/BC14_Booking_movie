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

export default function HomgPage() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

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

  const renderHomeTool = () => {
    if (screenWidth > 975) {
      return <HomeTools listFilmNowShowing={listFilmNowShowing} />;
    }
  };
  if (isLoading) return <Loading />;
  return (
    <Box sx={{ marginTop: "64px" }}>
      <Carousel listBanner={listBanner} />
      {renderHomeTool()}
      <HomeFilm />
      <div style={{ height: "1000px" }}></div>
    </Box>
  );
}
