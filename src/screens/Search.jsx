import React from "react";

import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Exhibition() {
  const [category, setCategory] = useState("");
  const [database, setDatabase] = useState("");
  const [medium, setMedium] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDatabaseChange = (event) => {
    setDatabase(event.target.value);
  };

  const handleMediumChange = (event) => {
    setMedium(event.target.value);
  };

  return (
    <div className="h-[95vh] flex-col items-center justify-center mt-10 ml-5">
      <form className="flex space-x-8">
        <SearchBar />
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Categories
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a category</option>
            <option value="cata1">cata1</option>
            <option value="cata2">cata2</option>
            <option value="cata3">cata3</option>
            <option value="cata4">cata4</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="medium"
            className="block text-sm font-medium text-gray-700"
          >
            Medium
          </label>
          <select
            id="medium"
            name="medium"
            value={medium}
            onChange={handleMediumChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a medium</option>
            <option value="painting">Painting</option>
            <option value="sculpture">Sculpture</option>
            <option value="photography">Photography</option>
            <option value="installation">Installation</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="Database"
            className="block text-sm font-medium text-gray-700"
          >
            Database
          </label>
          <select
            id="database"
            name="database"
            value={database}
            onChange={handleDatabaseChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a Database</option>
            <option value="MET">MET</option>
            <option value="Harvard">Harvard</option>
            <option value="All">All</option>
          </select>
        </div>
      </form>
    </div>
  );
}
