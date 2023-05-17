import Wrapper from "../../Layouts/Wrapper";

import { technicalProgramCommittees } from "../../constants";
import { generateMembers } from "../../utils/generateMembers";

import "../styles/page.style.css";
import "../styles/tpc.scss";

export default function TechnicalProgramCommittees() {
  return (
    <Wrapper>
      <h1 className="title">Technical Program Committees</h1>
      <div className="tpc-wrapper">
        <div className="swiper">
          {generateMembers(technicalProgramCommittees).map(
            ({ name, institute, place }, i) => (
              <div className="swiper-slide-card" key={i}>
                <p className="card-no">{i + 1}</p>
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
