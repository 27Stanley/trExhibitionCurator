import React from "react";

import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Search() {
  const [searchedArt, setSearchedArt] = useState([]);

  const handleSearchedArt = (newSearchedArt) => {
    setSearchedArt(newSearchedArt);
  };

  return (
    <div className="h-[95vh] flex items-x-center justify-center mt-12">
      <SearchBar searchedArt={handleSearchedArt} />

      <div className="justify-items-center">
        {searchedArt.map((item, index) => {
          const fromMetMuseum = item.objectID !== undefined;
          const fromHarMuseum = item.id !== undefined;

          const objectId = fromMetMuseum ? item.objectID : item.id;

          return (
            <div key={index}>
              <h1 className="mt-4 text-sm text-gray-700">
                Item Id: {objectId}
              </h1>
              <h1 className="mt-1 text-lg font-medium text-gray-900">
                Item Name: {item.title}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
