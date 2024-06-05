import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { fetchHarDepartmentObjects } from "../utils/axiosHAR";

export default function MetArtPieces() {
  const [artPieces, setArtPieces] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { galleryid } = useParams();

  useEffect(() => {
    const fetchData = () => {
      fetchHarDepartmentObjects(galleryid)
        .then((response) => {
          setArtPieces(response.records);
        })
        .catch((err) => {
          console.log("Error fetching art pieces:", err);
          setIsLoading(false);
        });
    };

    fetchData();
    setIsLoading(false);
  }, [galleryid]);

  useEffect(() => {
    console.log("Art Pieces:", artPieces);
  }, [artPieces]);

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
              className="flex flex-col items-center justify-center aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
            >
              <h1 className="mt-4 text-sm text-gray-700">
                Item Id: {item.objectid}
              </h1>
              <h1 className="mt-1 text-lg font-medium text-gray-900">
                Item Name: {item.title}
              </h1>
              <img
                src={item.primaryimageurl}
                alt={item.title}
                className="h-auto w-1/2 object-cover object-center group-hover:opacity-75"
              />
              <h1>
                {/* {item.country}
                {item.classification}
                {item.medium}
                {item.country} */}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
