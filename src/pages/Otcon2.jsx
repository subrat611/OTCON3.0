import Wrapper from "../Layouts/Wrapper";
import { otcon2Imgs } from "../constants";

import "./styles/otcon2.scss";
import "./styles/page.style.css";

export default function Otcon2() {
  return (
    <Wrapper>
      <h1 className="title">
        Second IEEE Sponsored 2022 OPJU International Technology Conference on
        Emerging Technologies for Sustainable Development (OTCON) (8-10 Feb,
        2023)
      </h1>
      <div className="otcon2-wrapper">
        <h2>Publication Link</h2>
        <a href="https://ieeexplore.ieee.org/xpl/conhome/10113898/proceeding">
          https://ieeexplore.ieee.org/xpl/conhome/10113898/proceeding
        </a>
        <br />
        <a href="https://doi.org/10.1109/OTCON56053.2023">
          https://doi.org/10.1109/OTCON56053.2023
        </a>
        <br />
        <br />

        <p>
          OTCON 2.0 is the second version of IEEE conference organised by OPJU,
          Raigarh. It is technically sponsored by IEEE MP Sub Section, and
          sponsored by CGCost Raipur, Chhattisgarh. Initially more than 800
          technical papers were submitted to this conference for pre-screening
          from more than 24 countries, and 600 technical papers are peer
          reviewed by the experts from premium Institutions in India and abroad.
          Out of which 157 papers are selected for the oral presentation in both
          physical and online mode. Total 154 papers are presented during 8 Feb
          to 10 Feb 2023, in 17 different tracks.
        </p>
        <br />

        <p>
          On the first day of the conference, Dr. R. D. Patidar - Vice
          Chancellor, OP Jindal University Raigarh just welcomed the guests and
          shared the objectives and other details of the conference with
          everyone.
        </p>
        <br />

        <p>
          Dr. Patidar informed that the conference aims to bring together
          academicians, researchers, industrialists and other stakeholders from
          all over the world on one platform related to developments in the
          areas of innovative technology, bridging the gap between industry and
          academia; and taking the initiative to formulate a meaningful plan
          after deliberating and contemplating on various issues; and to provide
          opportunities for sharing related research and knowledge with each
          other.
        </p>
        <br />

        <p>
          He also added that the conference is an excellent platform for the
          participants to build a strong research network thereby providing a
          unique opportunity to all the participants to learn innovative
          technologies.
        </p>
        <br />

        <p>
          The guests present in the inaugural session were Dr. Dilip Singh
          Sisodia (NIT, Raipur), Dr. Narendra S. Choudhary (Vice-Chancellor -
          Assam Science &amp; Technology University, Guwahati) and Shri G.K.
          Rodricks (Executive Vice President - H R &amp; ES, JSP, Raigarh)
          shared his views with everyone. Chief guest of the program Dr. Alok
          Kumar Chakrawal, Vice Chancellor- Guru Ghasidas University, Bilaspur
          guided everyone with his inspirational speech.
        </p>
        <br />

        <p>
          Underlining the need for sustainable development and the importance of
          sustainable development, Dr. Chakrawal encouraged everyone to work in
          the right direction and work together. At the end, Dr. Bhupesh Kumar
          Dewangan, the convenor of the conference, thanked all the guests and
          participants.
        </p>

        <div className="otcon2-img-wrapper">
          {otcon2Imgs.map((item, i) => (
            <img key={i} src={item.img} alt="previous-conf-img" />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
