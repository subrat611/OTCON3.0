import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import ConfSponsors from "../components/ConfSponsors";
import ConfTrackSection from "../components/ConfTrackSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

import otconConf from "../assets/otcon_conf.jpeg";

import "./styles/home.scss";

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutSection>
        <h2 className="title">About Conference</h2>
        <p className="about-conf-body">
          The <strong>OTCON</strong> is a premier conference in Central India
          and provides a platform for researchers, academicians, working
          professionals, students and government personnel from various
          engineering fields to share and discuss the innovation and advancement
          of smart computing for Industry 4.0, especially in smart computing for
          high-performance computing, security, IOT and sensor devices, data
          sciences, communication and network, signal processing and many more
          .The conference will witness multiple eminent keynote speakers from
          academia and industry from all over the world along with the
          presentation of accepted peer-reviewed articles.The after-conference
          proceeding of the OTCON Will be submitted for inclusion to IEEE XPLORE
        </p>
      </AboutSection>

      <div className="about-previos-section">
        <AboutSection>
          <h2 className="title">Our Previous Conferences</h2>
          <div className="badge-wrapper">
            <Link to="otcon2">
              <p className="badge-previous-conf-mob-otcon">
                OTCON 2022{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="36"
                  />
                </svg>
              </p>
            </Link>
            <Link to="/eti2021">
              <p className="badge-previous-conf-mob-eti">
                ETI 2021{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="36"
                  />
                </svg>
              </p>
            </Link>
          </div>
        </AboutSection>
      </div>

      <AboutSection>
        <h2 className="title">About OPJU</h2>
        <p className="about-conf-body">
          OP Jindal University (OPJU) has been established under the aegis of
          the Jindal Education and Welfare Society. The O P Jindal Group is a
          US$ 22 billion conglomerate, employing more than 50,000 people with
          manufacturing facilities across India, the US, UK, Australia,
          Indonesia, South Africa, Chile & Mozambique. OPJU is a
          multidisciplinary university aimed at developing young professionals
          and future leaders who will not only power the growth and development
          of the nation but also become responsible citizens of the world. At
          the core of the university's philosophy and approach lies the belief
          that students learn best when exposed to real-world situations and
          when nurtured through enriching interactions with practitioners and
          professors. Website:&nbsp;
          <a
            href="https://www.opju.ac.in/"
            target="_blank"
            style={{ color: "#0d6efd" }}
          >
            www.opju.ac.in
          </a>
        </p>
      </AboutSection>

      <ConfTrackSection />

      <ConfSponsors>
        <h2 className="title">Conference Sponsors</h2>
        <div className="sponsors-container">
          <div className="sponsor">
            <img src="https://upload.wikimedia.org/wikipedia/en/5/5f/O.P._Jindal_University_logo.png" />
          </div>
          <div className="sponsor">
            <img src="./cgcost.png" />
          </div>
        </div>
      </ConfSponsors>

      <ConfSponsors>
        <h2 className="title">Technical Sponsor</h2>
        <div className="sponsors-container">
          <div className="sponsor iee-logo">
            <img src="./ieeemp.jpg" />
          </div>
        </div>
      </ConfSponsors>

      <div className="conf-sponsor-wrapper">
        <img src={otconConf} />
      </div>

      <Footer />
    </>
  );
}
