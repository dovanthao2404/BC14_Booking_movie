import React, { useState } from "react";
import Accordions from "../Accordions";

export default function ListFilm(props) {
  const { listFilm, screenWidth } = props;
  const [expanded, setExpanded] = useState(listFilm[0].maPhim);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      {listFilm.map((film, i) => {
        return (
          <Accordions
            key={i}
            screenWidth={screenWidth}
            film={film}
            handleChange={handleChange}
            expanded={expanded}
          />
        );
      })}
    </>
  );
}
