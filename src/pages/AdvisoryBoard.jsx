import Wrapper from "../Layouts/Wrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles/page.style.css";
import "./styles/advisory.scss";
import { internationAdvisoryBoard } from "../constants";

export default function AdvisoryBoard() {
  return (
    <Wrapper>
      <h1 className="title">Advisory Board</h1>
      <div className="advisory-wrapper">
        <h2 className="title-2">International Advisory Board Members</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 0.8,
            slideShadows: 800,
          }}
          pagination={false}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {internationAdvisoryBoard.map(({ name, institute, place }, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-slide-card">
                <p className="card-name">{name}</p>
                <div>
                  <p className="card-institute">{institute}</p>
                  <p className="card-place">{place}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
}
