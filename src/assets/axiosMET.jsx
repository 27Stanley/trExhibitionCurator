import axios from "axios";

const request = axios.create({
  baseURL: "https://collectionapi.metmuseum.org/public/collection/v1",
});

export const fetchDepartments = (department) => {
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
  console.log(departmentId);
  return request
    .get(`/objects?departmentIds=${departmentId}&hasImages=true&q=`)
    .then((response) => {
      console.log(response, "response here");
      return response;
    })
    .catch((err) => {
      console.log("error fetching single department, error:", err);
    });
};

export const fetchObjectsById = (objectId) => {
  console.log(objectId);
  return request
    .get(`/objects/${objectId}`)
    .then((response) => {
      console.log(response, "objects response");
      return response;
    })
    .catch((err) => {
      console.log("error fetching object, error:", err);
    });
};

// https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&q=cat

// https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=4&hasImages=true&q=

//https://collectionapi.metmuseum.org/public/collection/v1/objects/22067
