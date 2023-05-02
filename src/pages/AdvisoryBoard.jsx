import Wrapper from "../Layouts/Wrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles/page.style.css";
import "./styles/advisory.scss";
import {
  internationalAdvisoryBoard,
  nationalAdvisoryBoard,
} from "../constants";
import { generateMembers } from "../utils/generateMembers";
import { useEffect } from "react";

export default function AdvisoryBoard() {
  return (
    <Wrapper>
      <h1 className="title">Advisory Board</h1>
      <div className="advisory-wrapper">
        <h2 className="title-2">International Advisory Board Members</h2>
        <div className="swiper">
          {generateMembers(internationalAdvisoryBoard).map(
            ({ name, institute, place }, i) => (
              <div className="swiper-slide-card" key={i}>
                <p className="card-name">{name}</p>
                <div>
                  <p className="card-institute">{institute}</p>
                  <p className="card-place">{place}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="advisory-wrapper">
        <h2 className="title-2">National Advisory Board Members</h2>
        <div className="swiper">
          {generateMembers(nationalAdvisoryBoard).map(
            ({ name, institute, place }, i) => (
              <div className="swiper-slide-card" key={i}>
                <p className="card-name">{name}</p>
                <div>
                  <p className="card-institute">{institute}</p>
                  <p className="card-place">{place}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Wrapper>
  );
}
