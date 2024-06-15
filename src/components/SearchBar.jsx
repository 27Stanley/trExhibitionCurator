import React, { useEffect } from "react";
import { useState } from "react";

import { searchHarForArt } from "../utils/axiosHAR";
import { searchMetForArt } from "../utils/axiosMET";

const SearchBar = ({ searchedArt }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchTerm.length < 2) {
      console.log("nothing's here");
      return;
    }

    Promise.all([searchHarForArt(searchTerm), searchMetForArt(searchTerm)])
      .then(([harResponse, metResponse]) => {
        const searchedArtResponses = [...metResponse, ...harResponse];
        // console.log(searchedArtResponses);
        const filteredArt = searchedArtResponses.filter((item) => {
          return item && item.culture !== undefined;
        });
        console.log(filteredArt);
        searchedArt(filteredArt);
      })
      .catch((err) => {
        console.log("error searching for art,", err);
      });
  };

  return (
    <div className="flex-col justify-start mx-5 w-full max-w-md">
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700 my-2"
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
        className="px-4 py-2 text-base text-white bg-secondary rounded hover:bg-accent hover:text-tertiary focus:outline-none my-5"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
