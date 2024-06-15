import axios from "axios";

import { fetchMetObjectsById } from "./axiosMET";
import { fetchHarObjectById } from "./axiosHAR";

const request = axios.create({
  baseURL: "https://trexicurabe.onrender.com/",
});

export const getUsersArtCollectionId = (userId) => {
  return new Promise((resolve, reject) => {
    request
      .get(`users/${userId}`)
      .then((response) => {
        const userArtCollectionId = response.data.curatedCollection;
        resolve(userArtCollectionId);
      })
      .catch((err) => {
        console.log("error getting usersArtCollectionId:");
      });
  });
};

export const getUsersArtCollection = (userId) => {
  return new Promise((resolve, reject) => {
    getUsersArtCollectionId(userId).then((collectionId) => {
      if (collectionId) {
        request
          .get(`artCollections/${collectionId}`)
          .then((response) => {
            const curatedArt = response.data;
            // console.log(curatedArt.artworks, "response for art collectio here");
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

export const getEachArtPiece = (userId) => {
  const curatedArt = [];

  return getUsersArtCollection(userId)
    .then((curatedArtArr) => {
      return Promise.all(
        curatedArtArr.map((artPiece) => {
          if (artPiece.department === "MET") {
            return fetchMetObjectsById(artPiece.objectId).then((response) => {
              // console.log(response, "fetched met art piece");
              const metArtPiece = response;
              curatedArt.push(metArtPiece);
            });
          } else if (artPiece.department === "HAR") {
            return fetchHarObjectById(artPiece.objectId).then((response) => {
              // console.log(response, "fetched met art piece");
              const harArtPiece = response;
              curatedArt.push(harArtPiece);
            });
          } else {
            console.log("error fetching art piece");
          }
        })
      );
    })
    .then(() => {
      // console.log(curatedArt);
      return curatedArt;
    })
    .catch((err) => {
      console.log("error fetching each art piece,", err);
    });
};

// /artCollections/:collectionId

// [
//   {
//     department: 'MET',
//     objectId: 36577,
//     _id: '666a3c4bf0586d118fbfd757'
//   },
//   {
//     department: 'MET',
//     objectId: 36586,
//     _id: '666a3c62f0586d118fbfd75b'
//   }
// ]

export const addToArtCollection = (userId, objectId, apiSource) => {
  console.log(userId, objectId, apiSource, "in axios");
  return getUsersArtCollectionId(userId)
    .then((collectionId) => {
      console.log(`got users art collection id: ${collectionId}`);
      const patchJson = {
        department: apiSource,
        objectId: objectId,
      };
      return request.patch(`artCollections/${collectionId}`, patchJson);
    })
    .catch((err) => {
      console.log("error adding to collection,", err);
    });
};

export const removeFromCollection = (userId, objectId) => {
  console.log(userId, objectId, "in axios");
  return getUsersArtCollectionId(userId)
    .then((collectionId) => {
      console.log(`got users art collection id: ${collectionId}`);
      const deleteJson = {
        objectId: objectId,
      };
      return request.delete(`artCollections/${collectionId}`, deleteJson);
    })
    .catch((err) => {
      console.log("error removing from collection,", err);
    });
};

// getUsersArtCollection("666a315d423c437f3cccce63");
