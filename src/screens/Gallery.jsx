import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { fetchMetDepartments } from "../utils/axiosMET";
import { fetchHarDepartments } from "../utils/axiosHAR";

export default function Gallery() {
  const [metDepartments, setMetDepartments] = useState([]);
  const [harDepartments, setHarDepartments] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchMetDepartments()
      .then((departmentsData) => {
        setMetDepartments(departmentsData);
      })
      .catch((err) => {
        console.log("error getting departments, error:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchHarDepartments()
      .then((galleryData) => {
        // console.log(galleryData);
        setHarDepartments(galleryData);
      })
      .catch((err) => {
        console.log("error getting departments, error:", err);
      });
  }, []);

  useEffect(() => {
    if (metDepartments.length > 0 && harDepartments.length > 0) {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [metDepartments, harDepartments]);

  return isLoading ? (
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
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-16">
      <div className="rounded-lg bg-secondary shadow-md p-6 w-full ">
        <h1 className="text-xl py-3 font-medium">
          From Metropolitan Museum of Art
        </h1>
        <ul className="grid grid-rows-4 grid-flow-col gap-4 py-3">
          {metDepartments.map((department) => (
            <Link
              to={`/metDepartments/${department.departmentId}`}
              key={`${department.displayName}${department.departmentId}`}
            >
              <li className="mb-2 hover:text-accent text-lg">
                {department.displayName}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="rounded-lg bg-secondary shadow-md p-6 w-full">
        <h1 className="text-xl py-3 font-medium">From Harvard Arts Museum</h1>
        <ul className="grid grid-rows-4 grid-flow-col gap-4 py-3">
          {harDepartments
            .filter(
              (department) =>
                department.theme && department.theme !== "Currently Closed"
            )
            .map((department, index) => (
              <Link
                to={`/harvardDepartments/${department.galleryid}`}
                key={`${department.name}${index}`}
                className="mb-2 hover:text-accent text-lg"
              >
                <li className="mb-2">{department.theme}</li>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
}
