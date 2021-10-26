import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";
import { useHistory } from "react-router";
import moment from "moment";
import Modalyoutube from "components/ModalYoutube";
export default function Card(props) {
  const history = useHistory();
  const { film } = props;
  const [mousePosition, setMousePosition] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const renderStar = (totalStar) => {
    let star = [];
    for (let i = 0; i < totalStar; i++) {
      star.push(
        <li key={i}>
          <img className="rating__icon" src="assets/img/star1.png" alt="" />
        </li>
      );
    }
    return star;
  };

  const renderRating = () => {
    const totalStar = Math.floor(film.danhGia / 2);
    return film.dangChieu ? (
      <span className="rating-box">
        <span className="rating-number">{film.danhGia}</span>
        <ul className="rating">
          {renderStar(totalStar)}

          <li>
            <img className="rating__haft" src="assets/img/star1.2.png" alt="" />
          </li>
        </ul>
      </span>
    ) : (
      ""
    );
  };

  return (
    <>
      <div className="home-card">
        <div className="card-content" style={{ position: "relative" }}>
          <NavLink
            to={`/detail/${film.maPhim}`}
            onMouseDown={(e) => {
              setMousePosition(e.pageX);
            }}
            onClick={(e) => {
              const { pageX } = e;
              if (Math.abs(pageX - mousePosition) > 10) {
                e.preventDefault();
              }
            }}
          >
            <div className="overall-img">
              <img
                src={film.hinhAnh}
                alt={film.hinhAnh}
                className="card-img"
                onError={(e) => {
                  e.onError = null;
                  e.target.src = "/assets/img/broken-1.png";
                }}
              />

              <div className="card-overlay"></div>
            </div>
          </NavLink>
          {renderRating()}
          <span className="publishDate ">
            {film.sapChieu ? moment(film.ngayKhoiChieu).format("DD/MM") : ""}
          </span>

          <img
            className="btn-playTrailer"
            src="assets/img/play-video.png"
            alt=""
            onClick={() => {
              setIsOpenModal(true);
            }}
          />
        </div>
        <div className="homeCard__footer">
          <div className="homeCardNameParent">
            <div className="homeCard__filmName">
              {film.tenPhim.length > 30
                ? film.tenPhim.slice(0, 30) + "..."
                : film.tenPhim}
            </div>
          </div>

          <button
            onClick={() => {
              history.push(`/detail/${film.maPhim}`);
            }}
            className="btn-buyTicket"
          >
            MUA VÉ
          </button>
        </div>
      </div>
      <Modalyoutube
        url={film.trailer}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </>
  );
}
