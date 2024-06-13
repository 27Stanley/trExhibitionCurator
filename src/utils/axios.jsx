import axios from "axios";

const request = axios.create({
  baseURL: "https://trexicurabe.onrender.com/",
});

const test = () => {
  request.get("users").then((response) => {
    console.log(response.data);
  });
};

const getSingleUser = (username) => {
  request.get("users").then((response) => {
    console.log(response.data);
  });
};
