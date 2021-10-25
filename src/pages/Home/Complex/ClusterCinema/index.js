import React from "react";

const getLogo = (tenRap) => {
  if (tenRap) {
    const listCinema = {
      bhd: "/assets/img/BHDStar_theater.jpg",
      cgv: "/assets/img/CGV_theater.jpg",
      cns: "/assets/img/CGV_theater.jpg",
      glx: "/assets/img/Galaxy_theater.jpg",
      lotte: "/assets/img/LotteCinima_theater.jpg",
      megags: "/assets/img/MegaGS_theater.jpg",
    };

    let anhHeThong = "";

    for (let key in listCinema) {
      if (tenRap.toLowerCase().includes(key)) {
        anhHeThong = listCinema[key];
      }
    }
    if (!anhHeThong) {
      anhHeThong = "https://picsum.photos/50/50";
    }

    return anhHeThong;
  }
};

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
        src={getLogo(cumRap.tenCumRap)}
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
          {cumRap.tenCumRap.length > 22
            ? cumRap.tenCumRap.slice(0, 22) + "..."
            : cumRap.tenCumRap}
        </h4>
        <p style={{ fontSize: "14px", textTransform: "none" }}>
          {cumRap.diaChi.length > 22
            ? cumRap.diaChi.slice(0, 22) + "..."
            : cumRap.diaChi}
        </p>
      </div>
    </div>
  );
}
