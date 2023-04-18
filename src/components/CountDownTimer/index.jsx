import "./countdown.scss";

export default function CountDownTimer() {
  return (
    <div className="timer-wrapper">
      <h5 className="timer-title">Event Starts In</h5>
      <div className="countdown">
        <div className="timer">
          <h3>0</h3>
          <p>Days</p>
        </div>
        <div>
          <h2>:</h2>
        </div>
        <div className="timer">
          <h3>0</h3>
          <p>Hours</p>
        </div>
        <div>
          <h2>:</h2>
        </div>
        <div className="timer">
          <h3>0</h3>
          <p>Mins</p>
        </div>
        <div>
          <h2>:</h2>
        </div>
        <div className="timer">
          <h3>0</h3>
          <p>Sec</p>
        </div>
      </div>
    </div>
  );
}
