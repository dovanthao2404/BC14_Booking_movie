import React, { useState, Fragment } from "react";
import { Container } from "@mui/material";
import "./HomeNews.css";
import Box from "@mui/material/Box";
import news from "../../../data/news.json";
import reviews from "../../../data/reviews.json";
import promotions from "../../../data/bonus.json";
import Button from "@mui/material/Button";

import CardXL from "./CardXL";
import CardSM from "./CardSM";
import CardXS from "./CardXS";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btnCrease: {
    margin: "35px 4px 20px !important",
    display: "block !important",
    color: "#949494 !important",
    borderColor: "#949494 !important",
    "&:hover": {
      color: "white !important",
      backgroundColor: "#fb4226 !important",
      borderColor: "#fb4226 !important",
    },
  },
  btnIncreaseDouble: {
    color: "#000 !important",
    borderColor: "#000 !important",
  },
});

export default function HomeNews() {
  const classes = useStyles();

  const [dataCurrent, setDataCurrent] = useState({
    data: news,
    length: 8,
  });

  const [typeNews, setTypeNews] = useState({
    promotion: false,
    review: false,
    news: true,
  });

  const [lengthNews, setLengthNews] = useState({
    promotion: 8,
    review: 8,
    news: 8,
  });

  const renderNews = () => {
    if (dataCurrent) {
      const { data, length } = dataCurrent;
      const listNewsView = [];

      for (let i = 0; i < length; i += 8) {
        listNewsView.push(
          <Fragment key={i}>
            <CardXL news={data[i]} />
            <CardXL news={data[i + 1]} />
            <CardSM news={data[i + 2]} />
            <CardSM news={data[i + 3]} />
            <div className="news-items-third">
              <CardXS news={data[i + 4]} />
              <CardXS news={data[i + 5]} />
              <CardXS news={data[i + 6]} />
              <CardXS news={data[i + 7]} />
            </div>
          </Fragment>
        );
      }
      return listNewsView;
    }
  };

  const hanldeIncreaseViewNews = () => {
    setDataCurrent({ ...dataCurrent, length: dataCurrent.length + 8 });
    if (typeNews.news) {
      setLengthNews({ ...lengthNews, news: lengthNews.news + 8 });
    }

    if (typeNews.review) {
      setLengthNews({ ...lengthNews, review: lengthNews.review + 8 });
    }

    if (typeNews.promotion) {
      setLengthNews({ ...lengthNews, promotion: lengthNews.promotion + 8 });
    }
  };

  const hanldeDecreaseViewNews = () => {
    setDataCurrent({ ...dataCurrent, length: 8 });
    if (typeNews.news) {
      setLengthNews({ ...lengthNews, news: 8 });
    }

    if (typeNews.review) {
      setLengthNews({ ...lengthNews, review: 8 });
    }

    if (typeNews.promotion) {
      setLengthNews({ ...lengthNews, promotion: 8 });
    }
  };

  const renderButton = () => {
    if (
      dataCurrent.data.length > dataCurrent.length &&
      dataCurrent.length > 8
    ) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            className={`${classes.btnCrease} ${classes.btnIncreaseDouble} `}
            onClick={hanldeIncreaseViewNews}
          >
            XEM THÊM
          </Button>
          <Button
            variant="outlined"
            className={classes.btnCrease}
            onClick={hanldeDecreaseViewNews}
          >
            Thu gọn
          </Button>
        </Box>
      );
    } else if (dataCurrent.data.length > dataCurrent.length) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            className={classes.btnCrease}
            onClick={hanldeIncreaseViewNews}
          >
            XEM THÊM
          </Button>
        </Box>
      );
    } else {
      return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            className={classes.btnCrease}
            onClick={hanldeDecreaseViewNews}
          >
            Thu gọn
          </Button>
        </Box>
      );
    }
  };

  return (
    <div>
      <div id="homeNews"></div>
      <Container style={{ maxWidth: "940px" }}>
        <ul className={"tab-header"}>
          <li
            onClick={() => {
              setTypeNews({
                promotion: false,
                review: false,
                news: true,
              });
              setDataCurrent({ data: news, length: lengthNews.news });
            }}
            className={`tab-header__child  ${typeNews.news ? `active` : ""}`}
          >
            Điện Ảnh 24h
          </li>
          <li
            onClick={() => {
              setTypeNews({
                promotion: false,
                review: true,
                news: false,
              });
              setDataCurrent({
                data: reviews,
                length: lengthNews.review,
              });
            }}
            className={`tab-header__child  ${typeNews.review ? `active` : ""}`}
          >
            Review
          </li>
          <li
            onClick={() => {
              setTypeNews({
                promotion: true,
                review: false,
                news: false,
              });
              setDataCurrent({
                data: promotions,
                length: lengthNews.promotion,
              });
            }}
            className={`tab-header__child ${
              typeNews.promotion ? `active` : ""
            }`}
          >
            Khuyến mãi
          </li>
        </ul>
        <div>
          <Box>{renderNews()}</Box>

          <div style={{ clear: "both" }}></div>
        </div>
        <Box sx={{ marginBottom: "35px" }}>{renderButton()}</Box>
      </Container>
    </div>
  );
}
