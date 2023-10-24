import { Button, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Wrapper from "../Layouts/Wrapper";

import "./styles/page.style.css";
import "./styles/callforpaper.scss";

export default function Callforpaper() {
  return (
    <Wrapper>
      <h1 className="title">Call For Papers</h1>
      <div className="link-btn-wrapper">
        <Link to="/callforpapper/camera-ready-submission">
          <Button type="link">Camera Ready Submission</Button>
        </Link>
        <Link to="/callforpapper/instruction-for-author">
          <Button type="link">Instructions for Authors</Button>
        </Link>
        {/* <Button type="link">Primary Button</Button> */}
      </div>
      <div className="callfor-paper-wrapper">
        <div className="callfor-paper-left-content">
          {/* <img src="/_nuxt/img/otweb-img.d56b109.png" alt="callforpaper" /> */}
          <h1>Paper Selection Process</h1>
          <div>
            <p className="step-title">Step 1</p>
            <p className="step-details">
              (Received) Abstracts* / full-length papers received will be given
              paper ID** relevant to the conference topic and track.
            </p>
          </div>
          <Divider />
          <div>
            <p className="step-title">Step 2</p>
            <p className="step-details">
              (Under Screening) Initial screening review will be done by the
              Technical Program Committee of OTCON 3.0. Initial screening
              includes relevance to the conference topic, plagiarism***,
              organization of the paper, quality of
              figures/diagrams/illustrations/equations and technical novelty,
              etc.
            </p>
          </div>
          <Divider />
          <div>
            <p className="step-title">Step 3</p>
            <p className="step-details">
              (Under Review) Papers got through Step 2 alone will be forwarded
              to the technical review process.
            </p>
          </div>
          <Divider />
          <div>
            <p className="step-title">Step 4</p>
            <p className="step-details">
              (Revision) The corresponding author will be notified of the
              outcome of the review process and the revised version of the
              manuscript shall be submitted within fifteen days on the date of
              intimation.
            </p>
          </div>
          <Divider />
          <div>
            <p className="step-title">Step 5</p>
            <p className="step-details">
              (Under Review) A revised version of the papers will be sent to
              reviewers to ensure that all the suggested corrections have been
              carried out. If the reviewer is recommended for minor revision,
              TPC recommends its decision to be taken by the organizing Chair.
            </p>
          </div>
          <Divider />
          <div>
            <p className="step-title">Step 6</p>
            <p className="step-details">
              (Accept / Reject) A final decision will be taken by the organizing
              chair based on the recommendations by the reviewers / TPC and the
              same will be intimated to the corresponding authors.
            </p>
          </div>
          <Divider />
          <div>
            <p className="step-title">Step 7</p>
            <p className="step-details">
              (CRP Received / Not Received) status of the Camera-Ready Paper
              after the acceptance.
            </p>
          </div>
          <Divider />
          <div>
            <p className="step-title">Step 8</p>
            <p className="step-details">
              (REG Complete / Pending) Status of the registration
            </p>
          </div>
          <p className="callfor-paper-badge">
            No paper will be accepted without screening review and technical
            review process
          </p>
          <ul className="callfor-paper-list">
            <li>
              Full-length papers shall be submitted in order to consider the
              paper for the review process.
            </li>
            <li>
              Paper ID will be provided to all the received papers within ONE
              working day from otcon@opju.ac.in. Authors are requested to
              contact the TPC through otcon@opju.ac.in if the paper ID has not
              been received within the time frame.
            </li>
            <li>
              TPC of OTCON 3.0 will check for possible plagiarism TWICE, first
              after receiving the paper and then at the stage of acceptance.
              Though OTCON 3.0 will carefully check for plagiarism, there are
              some possibilities for wrong plagiarism results, hence OTCON 3.0
              encourages the authors to take sole responsibility for plagiarism
              when they are ready to submit their papers.
            </li>
          </ul>
          <div className="callfor-paper-badge">
            <strong>For further details please contact</strong>
            <br />
            The Organizing Chair, OTCON 3.0,
            <br />
            OP Jindal Institute of Technology, Raigarh, Chhattisgarh, India.
            <br />
            E-mail: <a href="mailto:OTCON@OPJU.AC.IN">OTCON@OPJU.AC.IN</a>
          </div>
        </div>
        <div className="callfor-paper-right-content">
          <h1>
            OPJU International Technology Conference (OTCON 3.0) On Smart
            Computing For Innovation And Advancement In Industry 4.0. <br />{" "}
            (5-7 June, 2024)
          </h1>
          <br />
          <p>
            OTCON 3.0 invites full-length original research contributions from
            researchers/professionals from industries, R&D organizations,
            academic institutions, and government departments from across the
            world. Full-length original research contributions and review
            articles not exceeding six pages as per the IEEE double-column
            format can be submitted. The template for the paper may be
            downloaded from{" "}
            <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/Conference-template-A4.doc">
              here.
            </a>
          </p>
          <br />
          <p>
            The manuscript should contribute original research ideas,
            developmental ideas, analysis, findings, results, etc. The
            manuscript should not have been published in any journals/magazines
            or conference proceedings and should not be under review in any of
            them. Further, the manuscript should contain the name of the
            corresponding author with the e-mail id and affiliation of all
            authors.
          </p>
          <br />
          <p>
            A soft-copy of the full-length manuscripts in IEEE double-column
            format should be submitted electronically via Microsoft CMT through
            this{" "}
            <a href="#" target="_blank">
              Link
            </a>
            . All the submitted manuscripts will be sent for peer review and the
            corresponding author will be notified about the outcome of the
            review process. If reviewers recommended further improvement in the
            manuscript, the manuscript will be sent back to the corresponding
            author and the revised version of the manuscript shall be submitted
            within the due date. The deadlines for submission of the manuscript,
            acceptance notification, camera-ready paper submission, and
            registration will be notified on the conference website. Any query
            regarding submission may be addressed to{" "}
            <b>
              otcon@opju.ac.in. Accepted and presented papers will be submitted
              for inclusion into IEEE Xplore subject to meeting IEEE Xplore's
              scope and quality requirements.
            </b>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
