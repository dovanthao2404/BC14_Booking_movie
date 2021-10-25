import React from "react";
import style from "./Loading.module.css";

export default function Loading() {
  return (
    <div
      style={{
        zIndex: 99999999999999999,
        position: "fixed",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        className={style["img-loading"]}
        style={{ width: 100, height: "auto" }}
        src="/assets/img/11.png"
        alt="/assets/img/11.png"
      />
    </div>
    // </div>
  );
}
