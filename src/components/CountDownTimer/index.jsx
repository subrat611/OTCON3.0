import "./countdown.scss";

export default function CountDownTimer() {
  return (
    <div className="timer-wrapper">
      <h5 className="timer-title">Event Starts In</h5>
      <div className="countdown">
        <div className="timer">
          <h3>0</h3>
          <p>days</p>
        </div>
        <div>
          <h2>:</h2>
        </div>
        <div className="timer">
          <h3>0</h3>
          <p>hours</p>
        </div>
        <div>
          <h2>:</h2>
        </div>
        <div className="timer">
          <h3>0</h3>
          <p>mins</p>
        </div>
        <div>
          <h2>:</h2>
        </div>
        <div className="timer">
          <h3>0</h3>
          <p>sec</p>
        </div>
      </div>
    </div>
  );
}
