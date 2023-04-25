import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import ConfSchedule from "./pages/ConfSchedule";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<Registration />} />
          <Route path="conference-schedule" element={<ConfSchedule />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
