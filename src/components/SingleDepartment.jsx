import React from "react";
import { useParams } from "react-router-dom";

export default function Department() {
  const { displayName } = useParams();

  return (
    <div>
      <h1>Hello</h1>
      <h1>Department: {displayName.replace(/-/g, " ")}</h1>
    </div>
  );
}
