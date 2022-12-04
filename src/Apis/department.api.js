import axios from "axios";
import { getLocalStorage, STORAGE } from "Utils/storage";
import baseUrl from "./config";

const getDepartment = (setDepartments, setIsSave = null) => {
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
      if (setIsSave) {
        setIsSave(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const createDepartment = (department, setIsSave, setNotification) => {
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
    .then((data) => data.body)
    .then((body) => {
      setNotification(body);
      setIsSave(true);
    })
    .catch((err) => {
      console.log(err);
      setNotification("error");
    });
};

export { getDepartment, createDepartment };
