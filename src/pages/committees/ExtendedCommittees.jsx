import Wrapper from "../../Layouts/Wrapper";

import { extendedSupportCommittees } from "../../constants";

import princy from "../../assets/princy_mishra.png";

import "../styles/page.style.css";
import "../styles/extendedcommittees.scss";

export default function ExtendedCommittees() {
  return (
    <Wrapper>
      <h1 className="title">Extended Support Committees</h1>

      <div className="student-wrapper">
        <h2 className="std-title">About IEEE Student Chapter</h2>
        <p className="std-para">
          An IEEE Student Branch provides opportunities to meet and learn from
          fellow IEEE Student and Graduate Student Members and engage with
          professional IEEE members locally. An active IEEE Student Branch can
          be one of the most positive elements of your academic career, offering
          programs, activities, and professional networking opportunities that
          build critical skills outside of the classroom. IEEE currently has
          Student Branches at thousands of universities and colleges in hundreds
          of countries throughout the world.
        </p>
        <br />
        <p className="std-para">
          An IEEE Student Branch gives students a community of peers, and a
          connection to faculty and industry professionals who drive innovation
          in countless technical fields. Student involvement in Branch
          activities, whether special projects, social and technical meetings,
          outreach programs, conferences, local Section or Regional
          opportunities, etc. can help develop a record of accomplishment and
          capabilities beyond the norm.
        </p>

        <h2 className="std-title">Grant and support</h2>
        <p className="std-para">
          The university's IEEE students chapter offers a 70% grant to students
          upon membership enrollment.
        </p>

        <h3>Benefits of Forming an IEEE Student Branch</h3>
        <ul>
          <li>Opportunities to network on a local level.</li>
          <li>Free website hosting.</li>
          <li>Obtain funding for events, projects, and activities.</li>
          <li>
            Develop projects and obtain sponsorship based on your IEEE
            affiliation.
          </li>
          <li>Receive support for hosting professional awareness programs.</li>
          <li>
            Connect with other like-minded student groups to advance the IEEE
            mission.
          </li>
        </ul>
        <p>
          In addition to benefits, IEEE offers programs and projects that keep
          students interested in the Branch and its activities and their chosen
          profession.
        </p>

        <h2>Benefits of IEEE Student Branches</h2>
        <p>
          Provide an opportunity for IEEE Student members to begin networking in
          their areas of interest and future profession. There are over 2,000
          Student Branches in over 100 countries, globally.
        </p>

        <h3>Opportunities to Network</h3>
        <p>
          Meet other people who share the same interest as you and start
          networking early. It's not hard to measure this activity when you
          consider that opportunities for people who network far exceed
          opportunities for those who do not.
        </p>

        <h3>Funding</h3>
        <p>
          Your local IEEE Student Branch has access to funding that helps the
          group organize events.
        </p>

        <h3>Website Hosting</h3>
        <p>
          Keep your IEEE Student Branch members current and organized by taking
          advantage of free website hosting. This is just one of so many perks
          you'll enjoy when you find and join your local IEEE Student Branch.
        </p>

        <h3>Program and Material Support</h3>
        <p>
          Receive support for hosting professional awareness programs as well as
          materials on how to market and grow your group.
        </p>

        <h3>Connect and Advance</h3>
        <p>
          Beyond your IEEE Student Branch is a world full of IEEE members all
          available to help you advance. Why is this important? Because IEEE has
          more than 420,000 members around the globe. Who are these people? Find
          out and meet them at an IEEE Student Activities meeting near you.
        </p>

        <h3>STEP</h3>
        <p>
          STEP is an acronyms for Student Transition &amp; Elevation
          Partnership, a program developed by IEEE to facilitate the transition
          from student member to young professionals by introducing
          opportunities and benefits of IEEE membership at the start of the
          career.
        </p>

        <h3>YP Affinity Groups</h3>
        <p>
          Similar to IEEE Student Branches, YP Affinity Groups are regionally
          based organizations that promote networking from the local level and
          beyond. These local and regional groups have the ability to organize
          Signature Events and hold impromptu socials at venues of their
          discretion.
        </p>

        <h3>IEEE Volunteering</h3>
        <p>
          Volunteering for small things, with a big impact. Volunteering offers
          flexibility to volunteering within IEEE. Through this platform, IEEE
          members will be able to advertise and search for volunteering
          opportunities, be it short- or long-term, local or remote, or
          requiring different skills.
        </p>

        <h3>Signature Events</h3>
        <p>
          IEEE Young Professionals Signature Events are put on to increase the
          visibility of IEEE Young Professionals at large global events. Be part
          of this as an organizer and/or attendee.
        </p>

        <h3>Seed Funding</h3>
        <p>
          Providing support for local events to increase local volunteers'
          engagement and satisfaction, and consequently gain enough momentum to
          create fully sustainable YP Affinity Groups.
        </p>
      </div>

      <div className="esc-wrapper">
        <h2 className="title-2">Student Faculty Co-ordinator</h2>
        <div className="oc-swiper-slide-card">
          <div className="oc-card-content">
            <p className="oc-card-name">PROF. PRINCY DIWAN</p>
            <div>
              <p className="oc-card-subtitle">
                Email:{" "}
                <a href="mailto:princy.diwan@opju.ac.in">
                  princy.diwan@opju.ac.in
                </a>
              </p>
              <p className="oc-card-subtitle">Mobile no: +91 8770791199</p>
            </div>
          </div>
          <div className="oc-member-img">
            <img src={princy} alt="image" />
          </div>
        </div>
      </div>

      {extendedSupportCommittees.map(({ title, members }, i) => (
        <div className="esc-wrapper" key={i}>
          <h2 className="title-2">{title}</h2>
          <div className="swiper">
            {members.map(({ name, branch }, i) => (
              <div className="swiper-slide-card" key={i}>
                <p className="card-no">{i + 1}</p>
                <p className="card-name">{name}</p>
                <div>
                  <p className="card-place">{branch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
}
