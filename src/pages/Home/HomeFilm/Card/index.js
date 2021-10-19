import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";
export default function Card() {
  return (
    <div className="home-card">
      <div className="card-content" style={{ position: "relative" }}>
        <NavLink to="detail">
          <img
            src="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg"
            alt="https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16194120693380_215x318.jpg"
            style={{ width: "100%", height: "100%", borderRadius: "5px" }}
          />

          <div className="card-img"></div>
        </NavLink>
        <span className="rating-box">
          <span className="rating-number">9</span>
          <ul className="rating">
            <li>
              <img
                className="rating__icon"
                src="https://tix.vn/app/assets/img/icons/star1.png"
                alt=""
              />
            </li>
            <li>
              <img
                className="rating__icon"
                src="https://tix.vn/app/assets/img/icons/star1.png"
                alt=""
              />
            </li>
            <li>
              <img
                className="rating__haft"
                src="https://tix.vn/app/assets/img/icons/star1.2.png"
                alt=""
              />
            </li>
          </ul>
        </span>
        <span class="publishDate ">05/03</span>

        <img
          className="btn-playTrailer"
          src="https://tix.vn/app/assets/img/icons/play-video.png"
          alt=""
        />
      </div>
      <div>
        <div className="homeCard__footer" style={{ position: "relative" }}>
          <div className="homeCard__filmName">ádfasdsfd</div>
          <button className="btn-buyTicket">MUA VÉ</button>
        </div>
      </div>
    </div>
  );
}
