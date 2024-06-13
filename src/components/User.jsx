import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function User() {
  const { username, setUsername } = useContext(UserContext);
  const { userId, setUserId } = useState("12345");

  console.log(username);

  return (
    <div className="userContainer text-right">
      <p className="text-2xl font-bold">Hello {username}</p>
      <p>Your User Id: {userId}</p>
    </div>
  );
}
