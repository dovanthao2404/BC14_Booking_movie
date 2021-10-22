import React from "react";

import Box from "@mui/material/Box";

export default function CardXL(props) {
  const { news } = props;

  return (
    <Box className="news-items-half">
      <Box>
        <img
          src={news?.image_full}
          alt={news?.image_full}
          style={{
            width: "100%",
            display: "block",
            objectFit: "cover",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        />
        <Box>
          <Box
            component="h4"
            sx={{
              fontSize: "16px",
              margin: "8px 0",
              overflow: "hidden",
              height: "42px",
              cursor: "pointer",
              transition: "all 0.2s",
              "&:hover": {
                color: "#fb4226",
              },
            }}
          >
            {news?.news_title.length > 80
              ? news.news_title.slice(0, 80) + " ..."
              : news.news_title}
          </Box>
          <p
            style={{
              fontSize: "14px",
              marginBottom: "8px",
              height: "55px",
            }}
          >
            {news?.news_description.length > 100
              ? news.news_description.slice(0, 100) + " ..."
              : news.news_description}
          </p>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: "25px",
            }}
          >
            <Box
              sx={{
                width: "18px",
                cursor: "pointer",
                display: "block",
                mr: "4px",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
              component="img"
              src="https://tix.vn/app/assets/img/icons/like.png"
              alt="https://tix.vn/app/assets/img/icons/like.png"
            />
            <span style={{ marginLeft: "4px" }}>{news?.up_vote}</span>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "18px",
                cursor: "pointer",
                display: "block",
                mr: "4px",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
              component="img"
              src="https://tix.vn/app/assets/img/icons/comment.png"
              alt="https://tix.vn/app/assets/img/icons/comment.png"
            />
            <span style={{ marginLeft: "4px" }}>{news?.total_comment}</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
