import axios from "axios";
import { getLocalStorage, STORAGE } from "Utils/storage";
import baseUrl from "./config";

const getProfile = (setProfile, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}teacher/get-teacher`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      setProfile(data);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateProfile = (Data, setIsSave, setNotification) => {
  axios({
    method: "post",
    url: `${baseUrl}teacher/update-teacher`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      setNotification(`Update successfully!`);
      setIsSave(true);
    })
    .catch((err) => {
      console.log(err);
      setNotification("error");
    });
};

export { getProfile, updateProfile };
