import { useEffect, useState } from "react";
import CountDownTimer from "../CountDownTimer";
import "./hero.scss";

export default function HeroSection() {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    sec: 0,
  });

  useEffect(() => {
    const countDownTimer = new Date("Feb 7, 2024").getTime();

    const x = setInterval(() => {
      const currentTime = new Date().getTime();
      const time = countDownTimer - currentTime;

      let d = Math.floor(time / (1000 * 60 * 60 * 24));
      let h = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let m = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      let s = Math.floor((time % (1000 * 60)) / 1000);

      setTimer({
        days: d,
        hours: h,
        mins: m,
        sec: s,
      });

      if (time < 0) {
        clearInterval(x);
        setTimer({
          days: 0,
          hours: 0,
          mins: 0,
          sec: 0,
        });
      }
    }, 1000);

    return () => {
      clearInterval(x);
    };
  });

  return (
    <div className="hero-wrapper">
      <div className="scroll-box">
        <div className="scroll-item-box">
          <p className="scroll-item item1">Best Paper Awards</p>
          <p className="scroll-item item2">Travel Grant Awards</p>
          <p className="scroll-item item3">Research Grant Awards</p>
        </div>
      </div>
      <div className="gradient-bg-top"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          OTCON <span className="title-green">3.0</span>
        </h1>
        <p className="hero-title-two">
          OPJU INTERNATIONAL TECHNOLOGY CONFERENCE
          <br />
          On Emerging Technologies for Sustainable Development (7-9 Feb, 2024)
        </p>
        <p className="hero-title-three">
          Venue: O.P. Jindal University, Raigarh, Chhattisgarh, India.
        </p>
        <p className="hero-mode-badge">Hybrid Mode</p>
        <CountDownTimer timer={timer} />
      </div>
    </div>
  );
}
