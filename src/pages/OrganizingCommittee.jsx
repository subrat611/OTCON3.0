import Wrapper from "../Layouts/Wrapper";
import { organizingCommittees, allOrganizingcommittees } from "../constants";

import "./styles/page.style.css";
import "./styles/organizingcommittee.scss";

export default function OrganizingCommittee() {
  const keys = Object.keys(allOrganizingcommittees);
  return (
    <Wrapper>
      <h1 className="title">Organizing Committee</h1>
      {allOrganizingcommittees.map(({ heading, members }, i) => (
        <div key={i}>
          <h2 className="title">{heading}</h2>
          <div className="organizing-committee-wrapper">
            <div className="oc-swiper">
              {members.map(({ name, img, subtitle }, idx) => (
                <div className="oc-swiper-slide-card" key={idx}>
                  <div className="oc-card-content">
                    <p className="oc-card-no">{idx + 1}</p>
                    <p className="oc-card-name">{name}</p>
                    <div>
                      <p className="oc-card-subtitle">{subtitle}</p>
                    </div>
                  </div>
                  {img && (
                    <div className="oc-member-img">
                      <img src={`${img}`} alt="image" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
}
