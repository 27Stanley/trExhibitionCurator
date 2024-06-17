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

    {
      path: "/search_and_filter",
      element: <Search />,
      label: "Find Art",
    },
    {
      path: "/exhibition",
      element: <Exhibition />,
      label: "Your Art Collection",
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
          <User className="ml-4" />
        </div>
      </nav>

      <div className="pt-16"></div>
    </div>
  );
}
