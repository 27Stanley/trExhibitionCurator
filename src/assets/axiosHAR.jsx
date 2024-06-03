import axios from "axios";

const apiKey = "87ef9f23-aa8d-4650-88d2-c21b99e38bdb";

const request = axios.create({
  baseURL: `https://api.harvardartmuseums.org`,
});

export const fetchGallery = () => {
  return request
    .get(`/gallery?floor=2&apikey=${apiKey}`)
    .then((response) => {
      // console.log(response.data.records, "response here");
      return response.data.records;
    })
    .catch((err) => {
      console.log("error fetching harvard galleries, error:", err);
    });
};

//https://api.harvardartmuseums.org/gallery?floor=2&apikey=87ef9f23-aa8d-4650-88d2-c21b99e38bdb
