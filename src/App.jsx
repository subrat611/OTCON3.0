import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<h1>Hero section</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
