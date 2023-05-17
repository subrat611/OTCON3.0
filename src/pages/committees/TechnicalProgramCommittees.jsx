import Wrapper from "../../Layouts/Wrapper";

import { technicalProgramCommittees } from "../../constants";
import { generateMembers } from "../../utils/generateMembers";

import "../styles/page.style.css";
import "../styles/tpc.scss";

export default function TechnicalProgramCommittees() {
  return (
    <Wrapper>
      <h1 className="title">Technical Program Committees</h1>
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
