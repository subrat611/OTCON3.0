import Wrapper from "../Layouts/Wrapper";
import {
  organizingCommittees,
  allOrganizingcommittees,
  tpcMembers,
  extendedSupportMembers,
} from "../constants";

import "./styles/page.style.css";
import "./styles/oc.scss";

export default function OrganizingCommittee() {
  const keys = Object.keys(allOrganizingcommittees);
  return (
    <Wrapper>
      <h1 className="title">
        OPJU International Technology Conference (OTCON 3.0) <br /> on Smart
        Computing for Innovation and Advancement in Industry 4.0 <br />
        (5 - 7 June, 2024) <br /> OP Jindal University, Raigarh, India
      </h1>
      {allOrganizingcommittees.map(({ heading, members }, i) => (
        <div key={i} className="oc-card">
          <h2 className="heading">{heading}</h2>
          {members.map((item, index) => (
            <p className="oc-card-name" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      ))}
      <div className="oc-card">
        <h2 className="heading">TPC Members</h2>
        {tpcMembers.map((item, idx) => (
          <p className="oc-card-name" key={idx}>
            {item}
          </p>
        ))}
      </div>
      <div className="oc-card">
        <h2 className="heading">Extended Support Committee</h2>
        {extendedSupportMembers.map((item, idx) => (
          <p className="oc-card-name" key={idx}>
            {item}
          </p>
        ))}
      </div>

      {/* <h2 className="title">TPC Members</h2>
        <div className="organizing-committee-wrapper">
          <div className="oc-swiper">
            {tpcMembers.map((item, idx) => (
              <div className="oc-swiper-slide-card" key={idx}>
                <div className="oc-card-content">
                  <p className="oc-card-no">{idx + 1}</p>
                  <p className="oc-card-name">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      {/* <div>
        <h2 className="title">Extended Support Committee</h2>
        <div className="organizing-committee-wrapper">
          <div className="oc-swiper">
            {extendedSupportMembers.map((item, idx) => (
              <div className="oc-swiper-slide-card" key={idx}>
                <div className="oc-card-content">
                  <p className="oc-card-no">{idx + 1}</p>
                  <p className="oc-card-name">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </Wrapper>
  );
}
