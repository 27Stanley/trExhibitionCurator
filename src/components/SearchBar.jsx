import React, { useEffect } from "react";
import { useState } from "react";

import { searchHarForArt } from "../utils/axiosHAR";
import { searchMetForArt } from "../utils/axiosMET";

const SearchBar = ({ searchedArt }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);

    Promise.all([searchHarForArt(searchTerm), searchMetForArt(searchTerm)])
      .then(([harResponse, metResponse2]) => {
        const searchedArtResponses = [...harResponse, ...metResponse2];
        console.log(searchedArtResponses);
        searchedArt(searchedArtResponses);
      })
      .catch((err) => {
        console.log("error searching for art,", err);
      });
  };

  return (
    <div className="flex-col items-center justify-center">
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700"
      >
        Find art by criteria
      </label>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Criteria..."
        className="px-4 py-2 text- border border-gray-300 rounded mr-3 w-96"
      />

      <button
        onClick={handleSearch}
        className="px-4 py-2 text-base text-white bg-secondary rounded hover:bg-accent hover:text-tertiary focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
