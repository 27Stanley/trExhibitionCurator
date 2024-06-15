import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchSingleDepartment, fetchMetObjectsById } from "../utils/axiosMET";
import AddToCollection from "../components/AddToCollection";

export default function MetArtPieces() {
  const [artPieces, setArtPieces] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { departmentId } = useParams();
  const apiName = "MET";

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const itemsPerPage = 12;

  const startShowImageIndex = (currentPage - 1) * itemsPerPage;
  const showCurrentArtPieces = artPieces.slice(
    startShowImageIndex,
    startShowImageIndex + itemsPerPage
  );

  useEffect(() => {
    const fetchData = () => {
      fetchSingleDepartment(departmentId)
        .then((response) => {
          const artPieces = response.objectIDs.slice(0, 36);
          const fetchPromises = artPieces.map((objectId) =>
            fetchMetObjectsById(objectId)
          );

          return Promise.all(fetchPromises);
        })
        .then((artPiecesData) => {
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
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-8 justify-items-center">
          {showCurrentArtPieces.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 px-5"
            >
              <h1 className="mt-4 text-sm text-gray-700">
                Item Id: {item.objectID}
              </h1>
              <h1 className="mt-1 text-lg font-medium text-gray-900">
                {item.title}
              </h1>
              <img
                src={item.primaryImageSmall}
                alt={item.objectName}
                className="h-72 w-auto object-cover object-center group-hover:opacity-75"
              />
              <div className="flex flex-col items-start w-11/12 mt-4 mb-4">
                <h1>classification: {item.classification}</h1>
                <h1>medium: {item.medium}</h1>
                <h1>country: {item.culture}</h1>
              </div>
              <AddToCollection objectId={item.objectID} apiSource={"MET"} />
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center m-10">
        <button
          onClick={() => {
            setCurrentPage((currentPage) => currentPage - 1);
          }}
          disabled={currentPage === 1}
          className="min-w-36 rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-2
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        >
          Previous Page
        </button>
        <p className="px-5 py-3 text-xl font-semibold text-gray-900 hover:bg-gray-50 m-2">
          Page {currentPage}
        </p>
        <button
          onClick={() => {
            setCurrentPage((currentPage) => currentPage + 1);
          }}
          disabled={currentPage === totalPages}
          className="min-w-36 rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-2
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
