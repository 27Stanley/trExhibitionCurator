import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";

import NavBarComponent from "./screens/NavbarComponent";
import Footer from "./components/Footer";

import MetArtPieces from "./screens/MetArtPieces";
import HarArtPieces from "./screens/HarArtPieces";

function App() {
  return (
    <>
      <NavBarComponent />

      <Routes>
        <Route
          path="/harvardDepartments/:galleryid"
          element={<HarArtPieces />}
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
