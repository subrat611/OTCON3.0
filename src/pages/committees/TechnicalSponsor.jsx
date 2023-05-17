import Wrapper from "../../Layouts/Wrapper";
import { technicalSponsorCommittees } from "../../constants";
import "../styles/page.style.css";
import "../styles/technicalsponsor.scss";

export default function TechnicalSponsor() {
  return (
    <Wrapper>
      <img
        src="https://www.opjuieeeotc.in/_nuxt/img/ieeemp.af77a19.jpg"
        className="iee-mp-logo"
      />
      <h1 className="title">Technical Sponsor Committees</h1>
      <h2 className="about-iee-title">About IEEE MP Section</h2>
      <p className="subtitle">
        The Institute of Electrical and Electronics Engineers, Incorporated
        (IEEE) is a non-profit corporation, incorporated in the state of New
        York on 16 March 1896. The purpose of the IEEE is to engage exclusively
        in scientific and educational activities within the meaning of Section
        501(c)(3) of the Internal Revenue Code of 1986, as amended, directed
        toward the advancement of the theory and practice of electrical,
        electronics, communications and computer engineering, as well as
        computer science, the allied branches of engineering and the related
        arts and sciences, which benefit the engineering profession and the
        public. As authorized by the IEEE Board of Directors, the IEEE Member
        and Geographic Activities Board (known as IEEE Regional Activities Board
        prior to 1 January 2008) approved the establishment and boundaries of
        the IEEE MP Section in 2021. The Madhya Pradesh Section conducts
        activities which assist the local IEEE members to enhance their
        professional careers and their communities.
      </p>
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
