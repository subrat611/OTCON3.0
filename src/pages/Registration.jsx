import Wrapper from "../Layouts/Wrapper";
import RegistrationTable from "../components/RegistrationTable";

import "./styles/registration.scss";
import "./styles/page.style.css";

export default function Registration() {
  return (
    <Wrapper>
      <h1 className="title">Registration Fee</h1>
      <div className="reg-wrapper">
        <RegistrationTable />
      </div>
    </Wrapper>
  );
}
