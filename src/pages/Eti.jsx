import Wrapper from "../Layouts/Wrapper";
import { etiImgs } from "../constants";

import "./styles/otcon2.scss";
import "./styles/page.style.css";

export default function Eti() {
  return (
    <Wrapper>
      <h1 className="title">
        OPJU IEEE Sponsored International Conference on Emerging Trends in
        Industry 4.0 (ETI4.0) (19-21) May 2021
      </h1>
      <div className="otcon2-wrapper">
        <h2>Publication Link</h2>
        <a href="https://ieeexplore.ieee.org/xpl/conhome/9619189/proceeding">
          https://ieeexplore.ieee.org/xpl/conhome/9619189/proceeding
        </a>
        <br />
        <a href="https://doi.org/10.1109/ETI4.051663.2021">
          https://doi.org/10.1109/ETI4.051663.2021
        </a>
        <br />
        <br />

        <p>
          The IEEE Sponsored First International Conference on Emerging Trends
          in Industry 4.0 (2021 ETI 4.0) was organized by the OP Jindal
          University (OPJU), Raigarh, India during 19th – 21st, May 2021. ETI
          4.0 was aimed to be a premier conference in central India and provided
          a platform for researchers, academicians, working professionals, and
          students from various engineering fields and with cross-disciplinary
          interests in Industrial 4.0, Intelligence System, Computer and
          Communication Technology, Electronics and Electrical Engineering
          disciplines to interact and disseminate information on the latest
          developments. Distinguished speakers have been invited to deliver
          keynote speeches on emerging technologies in domains like Business
          4.0, Smart Environment 4.0, Manufacturing, and Production 4.0 etc.
          This 3-day event had technical paper presentations, technical sessions
          by experts, relaxing visits to nearby locations. Attendees had the
          opportunity to interact with the experts from these related fields.
        </p>
        <br />

        <p>
          Due to the Covid-19 pandemic all around the world, the conference had
          been organized in ONLINE Mode where participants were given option to
          present online technical presentations using Zoom / Google Meet
          platform.
        </p>
        <br />

        <p>
          The conference had Inaugural session &amp; live plenary sessions on
          19, May 2021 through ZOOM live online platform. The technical
          presentation for the registered participants were conducted using
          Google Meet platform. The Chief Guest of Inaugural was Shri Anil D.
          Sahasrabudhe, Chairman, AICTE, Government of India. The Guest of honor
          for the Inaugural function were:
        </p>
        <br />

        <ul>
          <li>
            Shri. Abhay Jere, Chief Innovation Officer, Ministry of HRD,
            Government of India, Delhi, India.
          </li>
          <li>
            Dr. Arun Somani. Associate Dean for Research, Iowa State University,
            Ames, Iowa, United States
          </li>
          <li>
            Dr. Barry Winn, Vice-Chancellor, Sohar University, Al Khābūrah, Al
            Bāţinah, Oman
          </li>
          <li>
            Dr. Anupam Shukla, Director, Indian Institute of Information and
            Technology, Pune, India
          </li>
          <li>
            Dr RD Patidar, Vice Chancellor, OP Jindal University, Raigarh, India
          </li>
        </ul>
        <br />

        <p>
          The speakers for the Plenary Session-I delivered the talk on their
          expertise after the Inaugural session.
        </p>
        <br />

        <ul>
          <li>
            Dr. Mamun Bin Ibne Reaz, Professor, Universiti Kebangsaan Malaysia,
            Malaysia offered plenary talk on “Research Trends in EMG Biomedical
            Sensor”
          </li>
          <li>
            Ms. Kritika M, Director, 10K startups, NASSCOM offered plenary talk
            on “The Era of open innovation”
          </li>
          <li>
            Mr. Harsh Kumar, Executive Director, Distribution & Industrial
            Sector, IBM offered plenary talk on “Connected Manufacturing Edge”
          </li>
          <li>
            Dr. Charles Areni, Business Dean, Oyster Bay, New South Wales,
            Australia also offered plenary talk on 19.05.2021.
          </li>
        </ul>
        <br />

        <p>
          The Plenary Session-II was conducted as evening session & the speakers
          offered the talk on their expertise.
        </p>
        <ul>
          <li>
            Dr. Christian Blum, Senior Research Scientist, Artificial
            Intelligence Research Institute (IIIA), Spanish National Research
            Council (CSIC) offered plenary talk on “Recent Topics in Swarm
            Intelligence and in Hybrid Metaheuristics”
          </li>
          <li>
            Dr. Cynthia Fursem, Professor, University of Utah, Co-Founder Live
            Wire Innovation, USA offered plenary talk on “Arcs and Sparks”
          </li>
          <li>
            Dr. Ravi Prakash, Professor, University of Texas at Dallas, USA
            offered plenary talk on “Efficient 360-degree video streaming for
            immersive experiences”
          </li>
          <li>
            Dr. Marcin PAPRZYCKI, Systems Research Institute, Polish Academy of
            Sciences, Warsaw, Poland offered plenary talk on “Introduction to
            Federated Learning”
          </li>
          <li>
            Dr. Aloknath De, Senior Vice President and CTO, Samsung India,
            offered plenary talk on “Smart Manufacturing and Beyond Industry
            4.O”
          </li>
        </ul>
        <br />

        <p>
          2021 ETI 4.0 had received submissions from different regions of the
          world like Bangladesh, Malaysia, Canada, Vietnam, Indonesia,
          Australia, Ukraine, Russia & Turkey and scholars from these countries
          have registered and participated. The following details are the
          glimpse ETI 4.0 submissions.
        </p>

        <ul>
          <li>Total number of submissions: 674</li>
          <li>Number of papers accepted after review & evaluation: 215</li>
          <li>Total number of registered papers: 175</li>
          <li>Total number of manuscripts submitted for publication: 173</li>
          <li>Total number of countries participated: 17</li>
          <li>Number of plenary sessions: 03</li>
          <li>No. of Technical sessions (online): 13</li>
        </ul>

        <div className="otcon2-img-wrapper">
          {etiImgs.map((item, i) => (
            <img key={i} src={item.img} alt="previous-conf-img" />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
