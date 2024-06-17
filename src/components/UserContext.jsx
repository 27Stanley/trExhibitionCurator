import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState();
  const [userId, setUserId] = useState();

  return (
    <UserContext.Provider value={{ username, setUsername, userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

//666a315d423c437f3cccce63
