import Wrapper from "../../Layouts/Wrapper";
import { organizingCommittees } from "../../constants";

import "../styles/page.style.css";
import "../styles/organizingcommittee.scss";

export default function OrganizingCommittees() {
  return (
    <Wrapper>
      <h1 className="title">Organizing Committee</h1>
      <div className="organizing-committee-wrapper">
        <div className="oc-swiper">
          {organizingCommittees.map(({ name, subtitle, img }, i) => (
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
