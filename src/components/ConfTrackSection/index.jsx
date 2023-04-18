import { confTrack } from "../../constants";
import "./conftrack.scss";

export default function ConfTrackSection() {
  return (
    <div className="conf-track-wrapper">
      <h2 className="title">Conference Tracks</h2>
      <div className="conf-track-container">
        <div className="track-details">
          {confTrack.map((data, i) => (
            <div className="track-card" key={i}>
              <div className="track-card-header">
                <p className="card-title">{data.title}</p>
              </div>
              <div className="track-card-body">
                <ul>
                  {data.track.map((track, i) => (
                    <li key={i}>{track}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="track-date">ksjs</div>
      </div>
    </div>
  );
}
