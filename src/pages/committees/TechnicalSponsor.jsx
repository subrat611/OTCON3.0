import Wrapper from "../../Layouts/Wrapper";
import { technicalSponsorCommittees } from "../../constants";
import "../styles/page.style.css";
import "../styles/technicalsponsor.scss";

export default function TechnicalSponsor() {
  return (
    <Wrapper>
      <h1 className="title">Technical Sponsor Committees</h1>
      <div className="technical-committee-wrapper">
        <div className="oc-swiper">
          {technicalSponsorCommittees.map(({ name, subtitle, img }, i) => (
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
