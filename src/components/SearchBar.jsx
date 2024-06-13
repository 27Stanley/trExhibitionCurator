import React from "react";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search Criteria..."
        className="px-4 py-2 text- border border-gray-300 rounded mr-2 w-72"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 text-base text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
