import axios from "axios";
import baseUrl from "./config";

const getDepartment = (setDepartments) => {
  axios({
    method: "get",
    url: `${baseUrl}all-faculty`,
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      // console.log(body);
      setDepartments(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createDepartment = (department) => {
  axios({
    method: "post",
    // url: `${baseUrl}create-faculty?name=${department}`,
    url: `${baseUrl}create-faculty`,
    data: {
      name: department,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getDepartment, createDepartment };
