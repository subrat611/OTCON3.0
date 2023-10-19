import Wrapper from "../Layouts/Wrapper";

import "./styles/page.style.css";
import "./styles/authorinstruction.scss";

export default function AuthorInstruction() {
  return (
    <Wrapper>
      <h1 className="title">Instructions for Authors</h1>
      <div className="ifa-wrapper">
        <h2>Paper Submission Guidelines</h2>
        <p>
          For any paper submission related queries, please email
          <a href="mailto:otcon@opju.ac.in"> otcon@opju.ac.in</a>
        </p>

        <h2>Manuscript Templates</h2>
        <p>
          To help ensure correct formatting, please use the style files for U.S.
          Letter Size found at the link below as templates for your submission.
          These include LaTeX and Word templates. <br />
          <a href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html">
            http://www.ieee.org/conferences_events/conferences/publishing/templates.html
          </a>
        </p>
        <br />
        <p>
          Violations of any of the above paper specifications may result in
          rejection of your paper. Please note that the Latex template does not
          allow for keywords. If you are using the Latex template, do not
          include keywords in your paper.
        </p>

        <h2>Manuscript Style Information</h2>
        <ul>
          <li>
            The paper size is U.S. letter size.
            <ul>
              <li>
                Use the U.S. letter size predefined by your word processor or
                typesetting software.
              </li>
              <li>
                Do not manually set the paper size using mm or inch scale.
              </li>
            </ul>
          </li>
          <li>
            Only papers prepared in PDF format will be accepted.
            <ul>
              <li>
                The .pdf file format should be free from formatting errors (e.g.
                corrupt equations, missing or low-resolution figures) and free
                from password protection.
              </li>
              <li>
                Paper Length: Up to 6 pages, including figures, tables &amp;
                references.
              </li>
              <li>
                Paper Formatting: double column, single spaced, #10 point Times
                Roman font.
              </li>
              <li>
                Margins: Left, Right, and Bottom: 0.75″ (19mm). The top margin
                must be 0.75″ (19 mm), except for the title page where it must
                be 1″ (25 mm).
              </li>
            </ul>
          </li>
          <li>The abstract should not exceed 250 words.</li>
          <li>Figures in image format should be of minimum 400 dpi.</li>
          <li>
            Line art figures in Image format should be of minimum 600 dpi.
          </li>
          <li>
            A thorough proofread should be conducted to check the standard of
            English and be ensured that wordings are clear and concise.
          </li>
          <li>
            Ensure that all permissions have been obtained for any material
            within the manuscript, which is not from the submitted original
            work, or from previously published work.
          </li>
          <li>
            Reference list should be checked for accuracy. References can only
            be linked via Crossref if they are correct and complete.
          </li>
          <li>
            All the references given in the list of references should be cited
            in the body of a text.
          </li>
          <li>
            The Citation should be given by number, whether sequential by order
            of citation or according to the sequence in an alphabetized list
            (For Example):
            <ul>
              <li>Single citation: [9].</li>
              <li>
                Multiple citation: [4-6, 9]. The citations should be in
                numerical order.
              </li>
              <li>
                Sequential citation by order of citation: reference 7 cannot be
                cited before reference 5.
              </li>
            </ul>
          </li>
          <li>
            Authors are advised to follow APA style of reference citation.
            <ul>
              <li>
                No page numbers, please. We will insert the page numbers for
                you.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Note: Violations of any of the above specifications may result in
              rejection of your paper.
            </strong>
          </li>
          <li>
            All submitted papers will be checked for plagiarism through the IEEE
            CrossCheck system. Papers with significant overlap with the authors
            own papers or other papers will be rejected without review.
          </li>
          <li>
            Important things to check before submission:
            <ul>
              <li>US letter paper (A4 and others not accepted).</li>
              <li>6-page limit (Not less than 5 pages).</li>
            </ul>
          </li>
        </ul>

        <h2>Camera Ready Paper Submissions</h2>
        <p>
          Instructions for submitting your camera ready manuscript are given in
          the manuscripts decision notification letter.{" "}
          <b>Final paper submissions are due no later than Feb 29, 2024</b>. Any
          paper submitted after this date runs the risk of not being included in
          the proceedings. The paper must be re-submitted even if the reviewers
          indicated that no changes are required. All accepted papers will be
          published on{" "}
          <a href="https://ieeexplore.ieee.org/Xplore/home.jsp">IEEE Xplore</a>.
          In order for your paper to be published in the conference proceedings,
          <b>a signed IEEE Copyright Form</b> must be submitted for each paper.
        </p>
        <br />
        <p>
          IMPORTANT: No paper can be published in the proceedings without being
          accompanied by a Completed IEEE Copyright Transfer Form. You must
          complete and submit this form to have your paper included in the
          conference proceedings.
        </p>
        <br />
        <p>
          Please note that an accepted paper will be published in the
          proceedings and uploaded to IEEE Xplore ONLY if the final camera-ready
          version is submitted and accompanied by the registration and copyright
          form(s), fee(s) for at least one of the authors. By submitting a paper
          you agree to these terms.
        </p>
        <ul>
          <li>
            Policy on Plagiarism
            <p>
              All papers submitted to IEEE OTCON 3.0 will be checked for
              plagiarism via the IEEE CrossCheck system. If a paper results with
              a high similarity (including self- plagiarism), the paper may not
              be reviewed and automatically rejected. Note that even if a paper
              is accepted and paid for registration, the program committee has a
              right to reject the paper and will not publish the paper in the
              proceedings. For further information please see{" "}
              <a href="https://www.ieee.org/content/ieee-org/en/publications/rights/plagiarism/index.html">
                IEEE Plagiarism Information Center
              </a>
              .
            </p>
          </li>
          <li>
            Copyright Clearance Code
            <p>
              The appropriate copyright clearance code notice is to appear at
              the bottom of the first page of each paper according to the
              guidelines set forth in the Cataloging/Copyright Instructions for
              an IEEE Conference Proceeding. The copyright notice should appear
              about 1 cm below the left column and should be aligned to the left
              with the same left margin as the column.
            </p>
            <br />
            <p>More about copyright updated soon.</p>
          </li>
          <li>
            IEEE PDF eXpress
            <p>
              All final manuscripts must be generated using the PDF eXpress
              tool. To generate the IEEE Xplore compatible PDF file of your
              paper, follow these steps:
            </p>
            <ul>
              <li>
                Create your IEEE PDF eXpress account:{" "}
                <a href="https://ieee-pdf-express.org/">
                  https://ieee-pdf-express.org/
                </a>
              </li>
              <li>Use the Conference ID: _________________</li>
              <li>
                The first time you access the system, please follow the link to
                new user. Please note that in order to access the service, you
                need to allow the use of cookies from the PDF eXpress web site.
                Once you have registered as a new user:
              </li>
              <li>
                Upload the source file (containing your paper) for conversion.
              </li>
              <li>
                Receive by e-mail the IEEE Xplore-compatible PDF of your paper.
              </li>
              <li>
                Upload the IEEE Xplore-compatible PDF to the conference system
                WITHOUT making any changes to the file or filename.
              </li>
            </ul>
          </li>
        </ul>

        <h2>Best Paper Awards</h2>
        <p>
          As evaluated by TPC Chairs and TPC Members, ONE paper in each track
          will be given Best Paper Award
        </p>

        <h2>Travel Grant Awards</h2>
        <p>
          As evaluated by TPC Chairs and TPC Members, ONE paper in each track
          will be given Travel Grant
        </p>

        <h2>Research Grant Awards</h2>
        <p>
          As evaluated by TPC Chairs and TPC Members, only one research will be
          given.
        </p>
      </div>
    </Wrapper>
  );
}
