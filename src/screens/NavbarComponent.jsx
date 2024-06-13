import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Home from "../screens/Home";
import Account from "../screens/Account";
import Gallery from "../screens/Gallery";
import Exhibition from "../screens/Exhibition";
import Search from "../screens/Search";

import User from "../components/User";

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
    <div className="mb-10">
      <nav className="bg-quaternary p-4 fixed top-0 w-full z-10 flex justify-between items-center">
        <ul className="flex space-x-10">
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
        <div className="flex items-center">
          <User className="ml-4 text-xl text-yellow-300 font-medium" />
        </div>
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
