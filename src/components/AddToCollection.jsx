import React from "react";
import { useState } from "react";

import { addToArtCollection } from "../utils/axios";

import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function AddToCollection({ objectId, apiSource }) {
  const { username, setUsername, userId } = useContext(UserContext);

  const [popupVisible, setPopupVisible] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleAddToCollection = () => {
    setButtonDisabled(true);
    addToArtCollection(userId, objectId, apiSource)
      .then((response) => {
        // console.log("Successfully added to collection:", response);
        setPopupVisible(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <button
        className="rounded-md bg-quaternary px-20 py-1.5 text-sm font-semibold text-grey-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 my-3"
        onClick={handleAddToCollection}
        disabled={buttonDisabled}
      >
        Add to Collection
      </button>
      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-tertiary bg-opacity-50">
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-grey-200 ">
              Added to collection!
            </p>
            <button
              className="mt-4 rounded-md bg-quaternary px-4 py-2 text-sm font-semibold text-grey-200 "
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
