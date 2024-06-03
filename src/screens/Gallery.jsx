import React from "react";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

import { Link } from "react-router-dom";

import { fetchDepartments } from "../assets/axiosMET";
import { fetchGallery } from "../assets/axiosHAR";

export default function Gallery() {
  const [metDepartments, setMetDepartments] = useState([]);
  const [harDepartments, setHarDepartments] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchDepartments()
      .then((departmentsData) => {
        setMetDepartments(departmentsData);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error getting departments, error:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchGallery()
      .then((galleryData) => {
        setHarDepartments(galleryData);
        console.log(galleryData);
      })
      .catch((err) => {
        console.log("error getting departments, error:", err);
      });
  }, []);

  return isLoading ? (
    <section className="h-[95vh] flex items-center justify-center">
      <dotlottie-player
        src="https://lottie.host/5b0fb53a-8373-491d-b706-e025b8e74d65/GOqq9iJrrR.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        className="h-[10vh]"
      ></dotlottie-player>
    </section>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
      <div className="rounded-lg bg-secondary shadow-md p-6 w-full">
        <h1 className="text-xl">From Metropolitan Museum of Art</h1>
        <ul className="grid grid-rows-4 grid-flow-col gap-4">
          {metDepartments.map((department, index) => (
            <Link
              to={`/metDepartments/${department.displayName.replace(
                / /g,
                "-"
              )}`}
              key={`${department.displayName}${index}`}
            >
              <li className="mb-2">{department.displayName}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="rounded-lg bg-secondary shadow-md p-6 w-full">
        <h1 className="text-xl">From Harvard Api</h1>
        <ul className="grid grid-rows-4 grid-flow-col gap-4">
          {harDepartments.map((department, index) => (
            <li key={`${department.name}${index}`} className="mb-2">
              {department.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
