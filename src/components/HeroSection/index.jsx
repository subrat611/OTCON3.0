import "./hero.scss";

export default function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="gradient-bg-top"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          OTCON <span className="title-green">3.0</span>
        </h1>
        <p className="hero-title-two">
          OPJU INTERNATIONAL TECHNOLOGY CONFERENCE
          <br />
          On Emerging Technologies for Sustainable Development (8-10 Feb, 2023)
        </p>
        <p className="hero-title-three">
          Venue: O.P. Jindal University, Raigarh, Chhattisgarh, India.
        </p>
        <p className="hero-mode-badge">Hybrid Mode</p>
      </div>
    </div>
  );
}
