import React from "react";
import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { Link } from "react-router-dom";

export default function Account() {
  const { username, setUsername, userId } = useContext(UserContext);

  const handleViewCollection = (e) => {
    e.preventDefault();
    console.log("clicka");
  };

  return (
    <div
      className="h-[75vh] flex items-center justify-center mt-12
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
    </div>
  );
}
