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
              const metArtPiece = response;
              curatedArt.push(metArtPiece);
            });
          } else if (artPiece.department === "HAR") {
            return fetchHarObjectById(artPiece.objectId).then((response) => {
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
  return getUsersArtCollectionId(userId)
    .then((collectionId) => {
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
      console.log(collectionId, "user art collection id ");
      const deleteJson = {
        objectId: objectId,
      };
      console.log("deleting");
      request.delete(`artCollections/${collectionId}`, { data: deleteJson });
    })
    .catch((err) => {
      console.log("error removing from collection,", err);
    });
};

// getUsersArtCollection("666a315d423c437f3cccce63");

//https://trexicurabe.onrender.com/artCollections/666a315d423c437f3cccce65

export const createNewUser = (newUsername) => {
  console.log(newUsername, "here");
  const postJson = {
    username: newUsername,
  };
  return request
    .post(`users`, postJson)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error creating new User: ", err);
    });
};

export const checkUserExists = (submittedUsername) => {
  return request
    .get(`users`)
    .then((response) => {
      console.log(response.data);
      const users = response.data;

      function findUser(submittedUsername, users) {
        for (let user of users) {
          if (user.username === submittedUsername) {
            return user;
          }
        }
        return null;
      }

      return findUser(submittedUsername, users);
    })
    .catch((err) => {
      console.log("error fetching users data: ", err);
    });
};
