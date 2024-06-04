import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchSingleDepartment } from "../assets/axiosMET";

export default function MetArtPieces() {
  const [artPieces, setArtPieces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { departmentId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSingleDepartment(departmentId);
        setArtPieces(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log("Error fetching art pieces:", err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [departmentId]);

  return (
    <div>
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
        <div>
          {artPieces.map((piece) => (
            <div key={piece.objectID}>
              <h3>{piece.title}</h3>
              <img src={piece.primaryImageSmall} alt={piece.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
