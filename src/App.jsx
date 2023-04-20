import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
