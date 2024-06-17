import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../components/UserContext";
import { Link, useNavigate } from "react-router-dom";

import { createNewUser, checkUserExists } from "../utils/axios";

export default function Account() {
  const { username, setUsername, userId, setUserId } = useContext(UserContext);

  const [isLoggedIn, setIsLoggedIn] = useState(!Boolean(username));

  const [newUsername, setNewUsername] = useState("");
  const [loginUsername, setLoginUsername] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = await checkUserExists(loginUsername);

    if (user) {
      setUsername(user.username);
      setUserId(user._id);
      setIsLoggedIn(true);
      navigate("/exhibition");
    } else {
      console.log("user does not exist");
    }
  };

  const handleLogout = (e) => {
    console.log("clickaLogout");
    setUsername(null);
    setUserId(null);
    setIsLoggedIn(false);
    window.location.reload();
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    const registerUser = await createNewUser(newUsername);

    if (registerUser) {
      setUsername(registerUser.user.username);
      setUserId(registerUser.user._id);
      setIsLoggedIn(true);
      navigate("/");
    } else {
      console.log("error creating new user");
    }
  };

  return isLoggedIn ? (
    <div
      className="h-[75vh] flex flex-col justify-center items-center
    "
    >
      <div>
        <h1 className="ml-3">
          Log In: (or use default user: whimsicle_willow)
        </h1>
        <input
          className="border-2 border-accent p-2 mx-3"
          type="text"
          placeholder="Username"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className=" mt-1 mb-5 px-3 py-1.5 text-lg text-white bg-tertiary rounded hover:bg-accent hover:text-tertiary focus:outline-none
      "
        >
          Login
        </button>
      </div>
      <div>
        <h1 className="ml-3">Create Account</h1>
        <input
          className="border-2 border-accent p-2 mx-3"
          type="text"
          placeholder="Your Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <button
          onClick={handleCreateAccount}
          className=" mt-1 mb-5 px-3 py-1.5 text-lg text-white bg-tertiary rounded hover:bg-accent hover:text-tertiary focus:outline-none
      "
        >
          Create Account
        </button>
      </div>
    </div>
  ) : (
    <div
      className="h-[75vh] flex flex-col justify-center items-center
    "
    >
      <Link to="/exhibition">
        <button
          className="px-6 py-3 text-lg text-white bg-secondary rounded hover:bg-accent hover:text-tertiary focus:outline-none
      "
        >
          View Curated Art
        </button>
      </Link>

      <div>
        <button
          onClick={handleLogout}
          className=" my-5 px-3 py-1.5 text-lg text-white bg-tertiary rounded hover:bg-accent hover:text-tertiary focus:outline-none
      "
        >
          Logout
        </button>
      </div>
    </div>
  );
}
