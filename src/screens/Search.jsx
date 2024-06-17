import React from "react";

import { useState } from "react";
import SearchBar from "../components/SearchBar";

import AddToCollection from "../components/AddToCollection";

export default function Search() {
  const [searchedArt, setSearchedArt] = useState([]);

  const handleSearchedArt = (newSearchedArt) => {
    setSearchedArt(newSearchedArt);
  };

  return (
    <div className="h-[95vh] flex items-x-center justify-start mt-12 ">
      <SearchBar searchedArt={handleSearchedArt} />

      <div className="mt-4 h-[93vh] w-[75vw] rounded-lg overflow-y-auto justify-items-center bg-accent p-2">
        {searchedArt.map((item, index) => {
          const fromMetMuseum = item.objectID !== undefined;
          const fromHarMuseum = item.id !== undefined;
          console.log(item.dated);

          const objectId = fromMetMuseum ? item.objectID : item.id;

          return (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : ""
              } p-4 rounded-2xl mb-4 flex items-center`}
            >
              <div className="flex-1">
                <h1 className="mt-2 text-sm text-gray-700">
                  Item Id: {objectId}
                </h1>
                <h1 className="mt-1 text-lg font-medium text-gray-900">
                  Name: {item.title}
                </h1>

                <div className="flex flex-col items-start w-11/12 mt-4 mb-4">
                  <h1>Classification: {item.classification}</h1>
                  <h1>Medium: {item.medium}</h1>
                  <h1>Culture: {item.culture}</h1>
                  <h1>Period:{item.dated}</h1>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src={
                    fromMetMuseum
                      ? item.primaryImageSmall
                      : item.primaryimageurl
                  }
                  alt={item.objectName}
                  className="h-60 w-auto object-cover object-center rounded-2xl"
                />
              </div>
              <div className="flex-1 flex flex-col items-center space-y-2">
                <AddToCollection />
                <a
                  href={fromMetMuseum ? item.objectURL : item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary hover:underline font-light text-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <section className=" w-[31.25rem] h-[31.25rem]">
          <dotlottie-player
            src="https://lottie.host/6f23ff8b-d7ef-42c3-9338-4ab2c0951d83/9TANaJo0fG.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            className="mx-auto"
          ></dotlottie-player>
        </section> */
}
