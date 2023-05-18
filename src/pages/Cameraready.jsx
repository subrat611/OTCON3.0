import { Button, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Wrapper from "../Layouts/Wrapper";

import "./styles/page.style.css";
import "./styles/cameraready.scss";

export default function Cameraready() {
  return (
    <Wrapper>
      <h1 className="title">Camera Ready Submission</h1>
      <div className="camera-ready-wrapper">
        <h1>
          Please follow the instructions given below for submitting the final
          camera-ready paper:
        </h1>
        <div>
          <p className="step-title">
            Step 1: Final Camera-ready paper preparation
          </p>
          <p className="step-details">
            Please follow the IEEE two-column A4 size standard conference format
            for preparing your final manuscript also. For more details please
            visit: the IEEE Templates page{" "}
            <a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/Conference-template-A4.doc">
              here.
            </a>
            <br /> A soft-copy of the full-length manuscripts in IEEE
            double-column format should be submitted electronically via Easy
            Chair through this{" "}
            <a
              href="https://easychair.org/account/signin?l=Yiji0MD0xxsWNRpo6y0oZt"
              target="_blank"
            >
              Link
            </a>
          </p>
          <Divider />
          <p className="step-details">
            The maximum page limit is six pages including references. No author
            biography at the end. In case additional pages are necessary, pages
            up to 8 pages are permitted subject to payment of Rs. 1000 including
            GST ($100) extra per each additional page. Similarity with other
            papers should be low (Generally, a similarity index of more than 30
            % is not acceptable for publication). The Maximum File Size allowed
            is 10 MB and the file format is Adobe PDF (.pdf) without any
            encryption and/or passwords. The authors are expected to make sure
            that the comments of the reviewers/meta-reviewers have been
            addressed in the final manuscript. Reply to the reviewer/meta
            reviewer comments can be given in the comment column in the post
            author feedback in the author console in CMT. Further, a separate
            pdf file highlighting the changes should be uploaded as the author's
            feedback file on the same page.
          </p>
        </div>
        <Divider />
        <div>
          <p className="step-title">Step 2: PDF eXpress check:</p>
          <p className="step-details">
            After you have appropriately revised your paper, pass your revised
            paper through PDF eXpress using conference ID (53885X) by going to
            the URL (https://ieee-pdf-express.org). If you do not have an
            account in Pdf eXpress, click on the link “New Users – Click Here”
            and fill in your information (email address and password). If you
            are not familiar with Pdf eXpress you can get detailed instructions
            on using IEEE PDF eXpress at: <br />
            <a href="https://ieee-pdf-express.org/External/UsingIEEEPDFeXpress">
              https://ieee-pdf-express.org/External/UsingIEEEPDFeXpress
            </a>
          </p>
        </div>
        <Divider />
        <div>
          <p className="step-title">Step 3 Paper Submission:</p>
          <p className="step-details">
            Submit the final version of the paper (after passing it through PDF
            express check) through the author console in CMT. Please change the
            file name of the pdf Express checked camera-ready paper to PIDxx
            (where xx is your paper ID in CMT) before submission to CMT. Please
            note that authors are expected to retain the title of the original
            paper in the final paper. Also, the author list in the original
            paper can not be changed in the final manuscript.
          </p>
        </div>
        <Divider />
        <div>
          <p className="step-title">
            Step 4. Submission of the copyright form:
          </p>
          <p className="step-details">
            (After uploading the final camera-ready paper (the paper must have
            passed PDF Check-in IEEE PDF eXpress), click on the ‘Submit IEEE
            Copyright Form’ link to enter the IEEE Copyright Form Submission CMT
            page. Click on the IEEE copyright website link. Now, the author will
            be redirected to the IEEE eCF site to submit the copyright form.
            After filling out the IEEE copyright form and copyright agreements,
            there is an option to download the completed IEEE Copyright Form in
            PDF (The corresponding author would have received the copyright form
            through email also). Please upload it (or ‘drop files here’ menu) on
            the same page in CMT. Please note that the corresponding author can
            submit the copyright form for all the authors.
          </p>
        </div>
        <Divider />
        <div>
          <p className="step-title">Step 5: Conference registration</p>
          <p className="step-details">
            Full conference registration is mandatory to have the paper included
            in the conference program and the proceedings.{" "}
            <b>
              Accepted and presented papers will be submitted for inclusion into
              IEEE Xplore subject to meeting IEEE Xplore’s scope and quality
              requirements.
            </b>
            The registration portal will be opened soon. Please check the
            website regularly for updates.
          </p>
        </div>
        <p className="step-details">No Show Policy :</p>
        <p className="step-details">
          Each accepted paper included in the final program is expected to have
          at least one author attend and present the paper at the conference.
          The non-presented paper will not be submitted to IEEE Xplore® digital
          library as per IEEE no-show policy.
        </p>
      </div>
    </Wrapper>
  );
}
