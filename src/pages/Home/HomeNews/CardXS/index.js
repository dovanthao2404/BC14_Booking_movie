import React from "react";

import Box from "@mui/material/Box";

export default function CardXS(props) {
  const { news } = props;
  return (
    <Box className="news-items-one-third">
      <Box sx={{ display: "flex", cursor: "pointer" }}>
        <img
          src={news?.image_full}
          alt={news?.image_full}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "4px",
            display: "block",
            objectFit: "cover",
          }}
        />
        <Box
          component="h4"
          sx={{
            marginLeft: "6px",
            overflow: "hidden",
            height: "44px",
            transition: "all 0.2s",
            "&:hover": {
              color: "#fb4226",
            },
          }}
        >
          {news?.news_title.length > 40
            ? news.news_title.slice(0, 40) + " ..."
            : news.news_title}
        </Box>
      </Box>
    </Box>
  );
}
