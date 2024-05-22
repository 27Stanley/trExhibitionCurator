import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import TestScreen from "./screens/TestScreen";
import Home from "./screens/Home";
import Account from "./screens/Account";
import Gallery from "./screens/Gallery";
import Exhibition from "./screens/Exhibition";

function App() {
  const [count, setCount] = useState(0);

  const routes = [
    { path: "/", label: "Home", component: <Home /> },
    { path: "/testScreen", label: "Enter", component: <TestScreen /> },
    { path: "/Account", label: "Account", component: <Account /> },
    { path: "/Gallery", label: "Gallery", component: <Gallery /> },
    { path: "/Exhibition", label: "Exhibition", component: <Exhibition /> },
  ];

  return (
    <>
      <div className="container">
        <div>
          <h1>
            Exhibition CuratorExhibition CuratorExhibition CuratorExhibition
            CuratorExhibition CuratorExhibition CuratorExhibition
            CuratorExhibition CuratorExhibition CuratorExhibition
            CuratorExhibition CuratorExhibition Curator
          </h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
          <div>
            <ul>
              {routes.map((route, index) => (
                <li key={index}>
                  <Link to={route.path}>{route.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
