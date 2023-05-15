import Wrapper from "../../Layouts/Wrapper";

import { extendedSupportCommittees } from "../../constants";

import "../styles/page.style.css";
import "../styles/extendedcommittees.scss";

export default function ExtendedCommittees() {
  return (
    <Wrapper>
      <h1 className="title">Extended Support Committees</h1>
      {extendedSupportCommittees.map(({ title, members }, i) => (
        <div className="esc-wrapper" key={i}>
          <h2 className="title-2">{title}</h2>
          <div className="swiper">
            {members.map(({ name, branch }, i) => (
              <div className="swiper-slide-card" key={i}>
                <p className="card-no">{i + 1}</p>
                <p className="card-name">{name}</p>
                <div>
                  <p className="card-place">{branch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
}
