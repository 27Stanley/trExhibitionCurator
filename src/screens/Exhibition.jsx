import React from "react";
import { useContext } from "react";
import { UserContext } from "../components/UserContext";

import { fetchHarObjectById } from "../utils/axiosHAR";
import { fetchMetObjectsById } from "../utils/axiosMET";

export default function Exhibition() {
  const { username, setUsername, userId } = useContext(UserContext);

  useEffect(() => {
    const fetchEachArtPiece = (objectId) => {
      fetchHarObjectById(36577).then((response) => {
        console.log(response.data, "hello");
      });
    };
  });

  return (
    <div>
      <p>exhibition page</p>
    </div>
  );
}
