import axios from "axios";

import { fetchObjectsById } from "./axiosMET";
import { fetchHarDepartmentObjects } from "./axiosHAR";

const request = axios.create({
  baseURL: "https://trexicurabe.onrender.com/",
});

const getUsersArtCollectionId = (userId) => {
  return new Promise((resolve, reject) => {
    request
      .get(`users/${userId}`)
      .then((response) => {
        const userArtCollectionId = response.data.curatedCollection;
        resolve(userArtCollectionId);
      })
      .catch((err) => {
        console.log("error getting usersArtCollectionId:", err);
      });
  });
};

const getUsersArtCollection = (userId) => {
  new Promise((resolve, reject) => {
    getUsersArtCollectionId(userId).then((collectionId) => {
      if (collectionId) {
        request
          .get(`artCollections/${collectionId}`)
          .then((response) => {
            const curatedArt = response.data;
            console.log(curatedArt.artworks, "response for art collectio here");
            resolve(curatedArt.artworks);
          })
          .catch((err) => {
            console.log("error getting usersArtCollection:", err);
          });
      } else {
        console.log("art collection not found");
      }
    });
  });
};

const getEachPieceOfArt = (curatedArtArr) => {
  new Promise((resolve, reject) => {
    getUsersArtCollection;
  });
};

getUsersArtCollection("666a315d423c437f3cccce63");
