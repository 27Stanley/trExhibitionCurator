import axios from "axios";

const apiKey = "87ef9f23-aa8d-4650-88d2-c21b99e38bdb";

const request = axios.create({
  baseURL: `https://api.harvardartmuseums.org`,
});

export const fetchGallery = (gallery) => {
  return request.get(`/gallery?floor=2&apikey=${apiKey}`);
};
