import { keynote } from "../constants";

import Wrapper from "../Layouts/Wrapper";

import "./styles/page.style.css";
import "./styles/keynote.scss";

export default function Keynote() {
  return (
    <Wrapper>
      <h1 className="title">Keynote speakers</h1>
      <div className="keynote-committee-wrapper">
        <div className="oc-swiper">
          {keynote.map(({ name, subtitle, img }, i) => (
            <div className="oc-swiper-slide-card" key={i}>
              <div className="oc-card-content">
                <p className="oc-card-no">{i + 1}</p>
                <p className="oc-card-name">{name}</p>
                <div>
                  <p className="oc-card-subtitle">{subtitle}</p>
                </div>
              </div>
              <div className="oc-member-img">
                {img && <img src={`${img}`} alt="image" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
