import AboutSection from "../components/AboutSection";
import ConfSponsors from "../components/ConfSponsors";
import ConfTrackSection from "../components/ConfTrackSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutSection>
        <h2 className="title">About Conference</h2>
        <p className="about-conf-body">
          The <strong>OTCON</strong> aims to be a premier conference in Central
          India and will provide a platform for researchers, academicians,
          working professionals, students and government personnel from various
          engineering fields to share and discuss the latest emerging
          technologies and related research for sustainable development,
          especially in the domain of{" "}
          <strong>
            Intelligent Computing, Communication, Control, Networking, Renewable
            Energy, Power Systems, IoT, Automation, Manufacturing, Signal and
            Image Processing, Cyber-Physical Systems, Metaverse, Education,
            Environment, and Economics
          </strong>
          .The conference will witness multiple eminent keynote speakers from
          academia and industry from all over the world along with the
          presentation of accepted peer-reviewed articles.The after-conference
          proceeding of the OTCON Will be submitted for inclusion to IEEE XPLORE
        </p>
      </AboutSection>

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
            <img src="https://www.opjuieeeotc.in/_nuxt/img/cgcost.b268db2.png" />
          </div>
        </div>
      </ConfSponsors>

      <ConfSponsors>
        <h2 className="title">Technical Sponsor</h2>
        <div className="sponsors-container">
          <div className="sponsor iee-logo">
            <img src="https://www.opjuieeeotc.in/_nuxt/img/ieeemp.af77a19.jpg" />
          </div>
        </div>
      </ConfSponsors>

      <Footer />
    </>
  );
}
