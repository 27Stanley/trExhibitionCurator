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
  // console.log(`fetching from department no.${departmentId}`);
  return request
    .get(`/objects?departmentIds=${departmentId}&hasImages=true&q=`)
    .then((response) => {
      // console.log(response.data, "single department response here");
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
      // console.log(response.data, "objects response");
      return response.data;
    })
    .catch((err) => {
      console.log("error fetching object, error:", err);
    });
};

export const searchMetForArt = (searchTerm) => {
  console.log(searchterm);
};

// https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&q=cat

// https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=4&hasImages=true&q=

//https://collectionapi.metmuseum.org/public/collection/v1/objects/22067

//https://collectionapi.metmuseum.org/public/collection/v1/search?q=$japanese%20painting&hasImages=true
