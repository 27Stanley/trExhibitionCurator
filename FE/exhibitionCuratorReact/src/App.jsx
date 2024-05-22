import React from "react";
import "./App.css";

import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-300">
        <NavbarComponent />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Exhibition Curator App
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
