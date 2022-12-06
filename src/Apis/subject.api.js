import axios from "axios";
import { getLocalStorage, STORAGE } from "Utils/storage";
import baseUrl from "./config";

const createSubject = (Data, setIsSave, setNotification) => {
  axios({
    method: "post",
    url: `${baseUrl}subject/create-subject`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      setIsSave(true);
      if (data.id) {
        setNotification("Add subject successfully!!");
      }
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      setNotification("error");
    });
};

const getListSubject = (setListSubject, setIsSave = null) => {
  axios({
    method: "get",
    url: `${baseUrl}subject/get-all-subject`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      setListSubject(data);
      if (setIsSave) {
        setIsSave(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateSubject = (Data, setIsSave, setNotification) => {
  axios({
    method: "put",
    url: `${baseUrl}subject/update-subject`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      // console.log(body);
      if (data.id) {
        setNotification("Update subject successfully!!");
      }
      setIsSave(true);
    })
    .catch((err) => {
      console.log(err);
      setNotification("error");
    });
};

export { getListSubject, createSubject, updateSubject };
