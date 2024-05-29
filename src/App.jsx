import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";

import Home from "./screens/Home";
import SingleDepartment from "./components/SingleDepartment";
import NavBarComponent from "./screens/NavbarComponent";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBarComponent />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/departments/:displayName"
          element={<SingleDepartment />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
