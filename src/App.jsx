import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import ConfSchedule from "./pages/ConfSchedule";
import AdvisoryBoard from "./pages/AdvisoryBoard";
import AuthorInstruction from "./pages/AuthorInstruction";
import TechnicalProgramCommittees from "./pages/committees/TechnicalProgramCommittees";
import OrganizingCommittees from "./pages/committees/OrganizingCommittees";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="conference-schedule" element={<ConfSchedule />} />
          <Route path="registration" element={<Registration />} />
          <Route path="/callforpapper/">
            <Route
              path="instruction-for-author"
              element={<AuthorInstruction />}
            />
          </Route>
          <Route path="/committees/">
            <Route
              path="technical-program-committees"
              element={<TechnicalProgramCommittees />}
            />
            <Route
              path="organizing-committees"
              element={<OrganizingCommittees />}
            />
          </Route>
          <Route path="advisory-board" element={<AdvisoryBoard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
