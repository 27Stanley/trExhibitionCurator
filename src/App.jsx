import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";

import SingleDepartment from "./components/SingleDepartment";
import NavBarComponent from "./screens/NavbarComponent";
import Footer from "./components/Footer";

import MetArtPieces from "./screens/MetArtPieces";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBarComponent />

      <Routes>
        <Route
          path="/harvardDepartments/:theme"
          element={<SingleDepartment museum="harvard" />}
        />
        <Route
          path="/metDepartments/:departmentId"
          element={<MetArtPieces />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
