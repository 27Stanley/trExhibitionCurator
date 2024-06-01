import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { fetchSingleDepartment } from "../assets/axiosMET";

export default function Department() {
  const { displayName } = useParams();

  const [department, setDepartment] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchSingleDepartment(displayName, index)])
      .then((response) => {
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  });

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
    <div>
      <h1>Hello</h1>
      <h1>Department: {displayName.replace(/-/g, " ")}</h1>
    </div>
  );
}
