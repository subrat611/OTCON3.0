import { contactusMember } from "../constants";
import Wrapper from "../Layouts/Wrapper";

import "./styles/page.style.css";
import "./styles/contactus.scss";

export default function Contactus() {
  return (
    <Wrapper>
      <h1 className="title">Contact us</h1>
      <div className="contact-wrapper">
        <div className="swiper">
          {contactusMember.map(({ name, subtitle, email, mobile }, i) => (
            <div className="swiper-slide-card" key={i}>
              <p className="card-no">{i + 1}</p>
              <div>
                <p className="card-name">{name}</p>
                <p className="card-subtitle">{subtitle}</p>
              </div>
              <div>
                <p className="card-email">
                  Email: <a href={`mailto:${email}`}>{email}</a>
                </p>
                <p className="card-mobile">
                  Mobile No: <span>{mobile}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
