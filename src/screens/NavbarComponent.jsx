import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Home from "../screens/Home";
import Account from "../screens/Account";
import Gallery from "../screens/Gallery";
import Exhibition from "../screens/Exhibition";
import Search from "../screens/Search";

export default function Component() {
  const routes = [
    { path: "/", element: <Home />, label: "Home" },
    { path: "/gallery", element: <Gallery />, label: "Gallery" },
    { path: "/exhibition", element: <Exhibition />, label: "Exhibition" },
    {
      path: "/search_and_filter",
      element: <Search />,
      label: "Find Art",
    },
    { path: "/account", element: <Account />, label: "Account" },
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
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}
