import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import Loading from "./../../components/Loading";
import { useDispatch, useSelector } from "react-redux";

import Carousel from "./Carousel";
import HomeTools from "./HomeTools";
import {
  actGetListBanner,
  actGetListFilm,
} from "redux/actions/FilmManagementActions";

export default function HomgPage() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  const dispatch = useDispatch();
  const { listBanner, listFilmNowShowing, isLoading } = useSelector(
    (state) => state.filmManagementReducer
  );

  useEffect(() => {
    dispatch(actGetListBanner());
    dispatch(actGetListFilm());
  }, []);

  window.onresize = (e) => {
    setScreenWidth(e.target.innerWidth);
  };

  const renderHomeTool = () => {
    if (screenWidth > 975) {
      return <HomeTools listFilmNowShowing={listFilmNowShowing} />;
    }
  };
  if (isLoading) return <Loading />;
  return (
    <Box sx={{ marginTop: "64px" }}>
      <Carousel listBanner={listBanner} />
      <Container style={{ maxWidth: "940px", position: "relative" }}>
        {renderHomeTool()}
      </Container>
      <div style={{ height: "1000px" }}></div>
    </Box>
  );
}
