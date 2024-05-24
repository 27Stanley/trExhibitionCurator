import { useState } from "react";
import "./App.css";
import NavBarComponent from "./screens/NavbarComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBarComponent />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
