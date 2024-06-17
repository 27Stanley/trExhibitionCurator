import React from "react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../components/UserContext";

import { getEachArtPiece, removeFromCollection } from "../utils/axios";

export default function Exhibition() {
  const { username, setUsername, userId } = useContext(UserContext);

  const [curatedArtSelection, setCuratedArtSelection] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const handleRemoveArt = (userId, objectId) => {
    removeFromCollection(userId, objectId)
      .then(() => {
        setCuratedArtSelection(curatedArtSelection);
        console.log("removed");
      })
      .catch((err) => {
        console.log("error removing art:", err);
      });
  };

  useEffect(() => {
    getEachArtPiece(userId).then((response) => {
      // console.log(response, "users curated collection found");
      setCuratedArtSelection(response);
      setIsLoading(false);
    });
  }, [userId]);

  return (
    <div className="bg-white">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <section className=" w-[31.25rem] h-[31.25rem]">
            <dotlottie-player
              src="https://lottie.host/5b0fb53a-8373-491d-b706-e025b8e74d65/GOqq9iJrrR.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              className="mx-auto"
            ></dotlottie-player>
          </section>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8 justify-items-center">
          {curatedArtSelection.map((item, index) => {
            const fromMetMuseum = item.objectID !== undefined;
            const fromHarMuseum = item.id !== undefined;

            const objectId = fromMetMuseum ? item.objectID : item.id;

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-accent xl:aspect-h-8 xl:aspect-w-7 px-5"
              >
                <h1 className="mt-4 text-sm text-gray-700">
                  Item Id: {objectId}
                </h1>
                <h1 className="mt-1 text-lg font-medium text-gray-900">
                  Item Name: {item.title}
                </h1>
                <img
                  src={
                    fromMetMuseum
                      ? item.primaryImageSmall
                      : item.primaryimageurl
                  }
                  alt={item.objectName}
                  className="h-72 w-auto object-cover object-center"
                />
                <div className="flex flex-col items-start w-11/12 mt-4 mb-4">
                  <h1>Classification: {item.classification}</h1>
                  <h1>Medium: {item.medium}</h1>
                  <h1>Origin: {item.culture}</h1>
                  <a
                    href={fromMetMuseum ? item.objectURL : item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tertiary hover:underline font-light text-sm"
                  >
                    Learn More
                  </a>
                  <button
                    className="text-tertiary hover:underline font-light text-sm"
                    onClick={() => {
                      handleRemoveArt(userId, objectId);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
