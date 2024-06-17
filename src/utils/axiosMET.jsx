import axios from "axios";

const request = axios.create({
  baseURL: "https://collectionapi.metmuseum.org/public/collection/v1",
});

export const fetchMetDepartments = (department) => {
  return request
    .get(`/departments`)
    .then((response) => {
      return response.data.departments;
    })
    .catch((err) => {
      console.log("error fetching departments, error:", err);
    });
};

export const fetchSingleDepartment = (departmentId) => {
  return request
    .get(`/objects?departmentIds=${departmentId}&hasImages=true&q=`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error fetching single department, error:", err);
    });
};

export const fetchMetObjectsById = (objectId) => {
  return request
    .get(`/objects/${objectId}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("error fetching object, error:", err);
    });
};

export const searchMetForArt = async (searchTerm) => {
  return request
    .get(`search?q=${encodeURIComponent(searchTerm)}&hasImages=true`)
    .then((response) => {
      const metObjectIds = response.data.objectIDs.slice(0, 100);
      const eachArtPromise = metObjectIds.map((objectId) => {
        return fetchMetObjectsById(objectId);
      });

      return Promise.all(eachArtPromise);
    })
    .catch((err) => {
      console.log("err occured searching for art", err);
    });
};

// https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&q=cat

// https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=4&hasImages=true&q=

//https://collectionapi.metmuseum.org/public/collection/v1/objects/22067

//https://collectionapi.metmuseum.org/public/collection/v1/search?q=$japanese%20painting&hasImages=true
