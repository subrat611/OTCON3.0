import "../App.scss";

export default function Wrapper({ children }) {
  return (
    <div className="d-wrapper">
      <div className="d-wrapper-gradient"></div>
      {children}
    </div>
  );
}
