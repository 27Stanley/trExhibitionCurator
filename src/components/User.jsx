import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function User() {
  const { username, setUsername, userId } = useContext(UserContext);

  const [loggedIn, setLoggedIn] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (username) {
      return setLoggedIn(true);
    }
  }, [username]);

  const handleMouseHover = () => {
    console.log("showlogin");
    setShowLogin(true);
  };

  const handleMouseUnHover = () => {
    console.log("unshowlogin");
    setShowLogin(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="userContainer text-right">
      {loggedIn ? (
        <div>
          <p className="text-2xl font-bold text-slate-100">Hello {username}</p>
          <p>User Id: {userId}</p>
        </div>
      ) : (
        <div>
          <p
            className="text-base hover:text-blue-500 cursor-pointer"
            onMouseDown={handleMouseHover}
            onMouseLeave={handleMouseUnHover}
          >
            {showLogin
              ? "Enter your username"
              : "Please log in to see your curated collection"}
          </p>
        </div>
      )}
    </div>
  );
}
