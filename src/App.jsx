import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import ConfSchedule from "./pages/ConfSchedule";
import AdvisoryBoard from "./pages/AdvisoryBoard";
import AuthorInstruction from "./pages/AuthorInstruction";
import TechnicalProgramCommittees from "./pages/committees/TechnicalProgramCommittees";
import OrganizingCommittees from "./pages/committees/OrganizingCommittees";
import ExtendedCommittees from "./pages/committees/ExtendedCommittees";
import Contactus from "./pages/Contactus";
import TechnicalSponsor from "./pages/committees/TechnicalSponsor";
import Otcon2 from "./pages/Otcon2";
import Eti from "./pages/Eti";
import Keynote from "./pages/Keynote";
import Callforpaper from "./pages/Callforpaper";
import Cameraready from "./pages/Cameraready";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/otcon2" element={<Otcon2 />} />
          <Route path="/eti2021" element={<Eti />} />
          <Route path="conference-schedule" element={<ConfSchedule />} />
          <Route path="registration" element={<Registration />} />
          <Route path="/callforpapper/" element={<Callforpaper />}></Route>
          <Route
            path="/callforpapper/instruction-for-author"
            element={<AuthorInstruction />}
          />
          <Route
            path="/callforpapper/camera-ready-submission"
            element={<Cameraready />}
          />
          <Route path="/committees/">
            <Route
              path="technical-program-committees"
              element={<TechnicalProgramCommittees />}
            />
            <Route
              path="technical-sponsor-committees"
              element={<TechnicalSponsor />}
            />
            <Route
              path="organizing-committees"
              element={<OrganizingCommittees />}
            />
            <Route
              path="extended-support-committees"
              element={<ExtendedCommittees />}
            />
          </Route>
          <Route path="advisory-board" element={<AdvisoryBoard />} />
          <Route path="keynote-speaker" element={<Keynote />} />
          <Route path="contactus" element={<Contactus />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
