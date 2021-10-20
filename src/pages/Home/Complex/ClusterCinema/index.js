import React from "react";

export default function ClusterCinema(props) {
  const { cumRap } = props;
  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
      }}
    >
      <img
        src={cumRap.hinhAnh}
        alt={cumRap.hinhAnh}
        style={{
          width: "50px",
          height: "50px",
          display: "block",
        }}
      />
      <div
        style={{
          textAlign: "left",
          marginLeft: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h4 style={{ textTransform: "none" }}>
          {cumRap.tenCumRap.length > 24
            ? cumRap.tenCumRap.slice(0, 24) + "..."
            : cumRap.tenCumRap}
        </h4>
        <p style={{ fontSize: "14px", textTransform: "none" }}>
          {cumRap.diaChi.length > 24
            ? cumRap.diaChi.slice(0, 24) + "..."
            : cumRap.diaChi}
        </p>
      </div>
    </div>
  );
}
