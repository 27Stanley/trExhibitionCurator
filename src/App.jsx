import { useState } from "react";
import "./App.css";
import NavBarComponent from "./screens/NavbarComponent";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBarComponent />
      <Footer />
    </>
  );
}

export default App;
