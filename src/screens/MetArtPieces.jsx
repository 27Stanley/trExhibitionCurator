import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchSingleDepartment, fetchObjectsById } from "../utils/axiosMET";

export default function MetArtPieces() {
  const [artPieces, setArtPieces] = useState([]);
  const [artObjects, setArtObjects] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { departmentId } = useParams();

  useEffect(() => {
    const fetchData = () => {
      fetchSingleDepartment(departmentId)
        .then((response) => {
          const limitedArtPieces = response.objectIDs.slice(0, 10);
          //   console.log(limitedArtPieces);

          const fetchPromises = limitedArtPieces.map((objectId) =>
            fetchObjectsById(objectId)
          );

          return Promise.all(fetchPromises);
        })
        .then((artPiecesData) => {
          console.log(artPiecesData);
          setArtPieces(artPiecesData);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("Error fetching art pieces:", err);
          setIsLoading(false);
        });
    };

    fetchData();
  }, [departmentId]);

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
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8">
          {artPieces.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 w-[20vw]"
            >
              <h1 className="mt-4 text-sm text-gray-700">
                Item Id: {item.objectID}
              </h1>
              <h1 className="mt-1 text-lg font-medium text-gray-900">
                Item Name: {item.title}
              </h1>
              <img
                src={item.primaryImageSmall}
                alt={item.objectName}
                className="h-auto w-50% object-cover object-center group-hover:opacity-75"
              />
              <h1>classification: {item.classification}</h1>
              <h1>medium: {item.medium}</h1>
              <h1>country: {item.culture}</h1>
              <button class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                {" "}
                add to collection{" "}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
