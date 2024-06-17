import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";

import NavBarComponent from "./screens/NavbarComponent";
import Footer from "./components/Footer";

import Home from "./screens/Home";
import Account from "./screens/Account";
import Gallery from "./screens/Gallery";
import Exhibition from "./screens/Exhibition";
import Search from "./screens/Search";

import MetArtPieces from "./screens/MetArtPieces";
import HarArtPieces from "./screens/HarArtPieces";

function App() {
  return (
    <>
      <NavBarComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/search_and_filter" element={<Search />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/account" element={<Account />} />
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
