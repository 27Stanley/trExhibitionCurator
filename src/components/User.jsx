import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export default function User() {
  const { username, setUsername, userId, setUserId } = useContext(UserContext);

  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (username) {
      return setLoggedIn(true);
    }
  }, [username]);

  const handleMouseClick = () => {
    navigate("/account");
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
            onMouseDown={handleMouseClick}
          >
            Login to curate your own art
          </p>
        </div>
      )}
    </div>
  );
}
