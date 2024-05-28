import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import TestScreen from "./About";
import Home from "../screens/Home";
import Account from "../screens/Account";
import Gallery from "../screens/Gallery";
import Exhibition from "../screens/Exhibition";
import About from "../screens/About";

export default function Component() {
  const routes = [
    { path: "/", label: "Home", component: <Home /> },

    { path: "/Gallery", label: "Gallery", component: <Gallery /> },
    { path: "/Exhibition", label: "Exhibition", component: <Exhibition /> },
    { path: "/Account", label: "Account", component: <Account /> },
  ];

  return (
    <div>
      <nav className="bg-quaternary p-4 fixed top-0 w-full z-10">
        <ul className="flex justify-center space-x-10">
          {routes.map((route, index) => (
            <li key={index}>
              <Link
                className="text-white hover:text-gray-200 text-3xl font-bold"
                to={route.path}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pt-16">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </div>
  );
}
