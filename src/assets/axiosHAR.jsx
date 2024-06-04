import axios from "axios";

const apiKey = "87ef9f23-aa8d-4650-88d2-c21b99e38bdb";

const request = axios.create({
  baseURL: `https://api.harvardartmuseums.org`,
});

export const fetchHarDepartments = () => {
  let galleryData = [];
  const totalPages = 3;
  const fetchPages = () => {
    let promises = [];

    for (let page = 1; page <= totalPages; page++) {
      const promise = request
        .get(`/gallery?floor=2&page=${page}&apikey=${apiKey}`)
        .then((response) => {
          galleryData.push(...response.data.records);
        })
        .catch((err) => {
          console.log(
            `Error fetching harvard galleries on page ${page}, error:`,
            err
          );
        });

      promises.push(promise);
    }

    return Promise.all(promises);
  };

  return fetchPages().then(() => galleryData);
};
//https://api.harvardartmuseums.org/gallery?floor=2&apikey=87ef9f23-aa8d-4650-88d2-c21b99e38bdb
