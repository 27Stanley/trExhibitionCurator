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

// export const fetchEachDepartment = (departmentId) => {
//   return request.get(`./https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${departmentId}&q=cat`);
// };

// https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&q=cat
