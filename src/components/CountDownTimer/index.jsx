import "./countdown.scss";

export default function CountDownTimer({ timer: { days, hours, mins, sec } }) {
  return (
    <div className="timer-wrapper">
      <h5 className="timer-title">Event Starts In</h5>
      <div className="countdown">
        <div className="timer">
          <h3>{days}</h3>
          <p>Days</p>
        </div>
        <div>
          <h2>:</h2>
        </div>
        <div className="timer">
          <h3>{hours}</h3>
          <p>Hours</p>
        </div>
        <div>
          <h2>:</h2>
        </div>
        <div className="timer">
          <h3>{mins}</h3>
          <p>Mins</p>
        </div>
        <div>
          <h2>:</h2>
        </div>
        <div className="timer">
          <h3>{sec}</h3>
          <p>Sec</p>
        </div>
      </div>
    </div>
  );
}
