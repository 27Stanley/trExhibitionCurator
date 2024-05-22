import React from "react";
import { Flowbite, Avatar, Dropdown, Navbar, Button } from "flowbite-react";

import { Routes, Route, Link } from "react-router-dom";

import TestScreen from "../screens/TestScreen";
import Home from "../screens/Home";
import Account from "../screens/Account";
import Gallery from "../screens/Gallery";
import Exhibition from "../screens/Exhibition";
import About from "../screens/About";

export default function Component() {
  const routes = [
    { path: "/", label: "Home", component: <Home /> },
    { path: "/Account", label: "Account", component: <Account /> },
    { path: "/Gallery", label: "Gallery", component: <Gallery /> },
    { path: "/Exhibition", label: "Exhibition", component: <Exhibition /> },
    { path: "/About", label: "About", component: <About /> },
  ];

  return (
    <Navbar fluid rounded className="bg-gray-800">
      <div className="flex items-center justify-between px-4 py-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle className="text-gray-300" />
      </div>
      <Navbar.Collapse className="mt-4 sm:mt-0">
        <nav className="flex flex-col sm:flex-row sm:space-x-4 px-4 sm:px-0">
          {routes.map((route, index) => (
            <Navbar.Link
              key={index}
              as={Link}
              to={route.path}
              className="text-3xl text-gray-300 hover:text-white py-2 sm:py-0"
            >
              {route.label}
            </Navbar.Link>
          ))}
        </nav>
      </Navbar.Collapse>

      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Navbar>
  );
}
