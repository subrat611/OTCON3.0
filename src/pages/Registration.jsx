import RegistrationTable from "../components/RegistrationTable";

import "./styles/registration.scss";

export default function Registration() {
  return (
    <div className="reg-wrapper">
      <div className="gradient-bg-top"></div>
      <h1 className="title">Registration Fee</h1>
      <RegistrationTable />
    </div>
  );
}
