import axios from "axios";
import { getLocalStorage, STORAGE } from "Utils/storage";
import baseUrl from "./config";

const getDepartment = (setDepartments, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}all-faculty`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setDepartments(body);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createDepartment = (department, setIsSave) => {
  axios({
    method: "post",
    // url: `${baseUrl}create-faculty?name=${department}`,
    url: `${baseUrl}create-faculty`,
    data: {
      name: department,
    },
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      setIsSave(true);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getDepartment, createDepartment };
