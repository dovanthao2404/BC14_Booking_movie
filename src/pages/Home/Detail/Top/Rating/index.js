import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

export default function Rating(props) {
  const { danhGia } = props;

  const renderStar = (totalStar) => {
    totalStar = Math.floor(totalStar / 2);
    let star = [];
    for (let i = 0; i < totalStar; i++) {
      star.push(
        <img
          key={i}
          style={{ width: "25px", height: "25px" }}
          src="/assets/img/star1.png"
          alt=""
        />
      );
    }
    return star;
  };

  return (
    <>
      <CircularProgressbar
        value={danhGia * 10}
        text={danhGia}
        styles={{
          text: {
            fontSize: "40px",
            fill: "#fff",
          },
          path: {
            strokeWidth: "4",
            stroke: "#7ed321",
          },
          trail: {
            strokeWidth: "4",
          },
        }}
      />
      <div style={{ paddingTop: "8px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {renderStar(danhGia)}
          <img
            style={{ width: "25px", height: "25px" }}
            src="/assets/img/star1.2.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
