import axios from "axios";
import { setLocalStorage, STORAGE, removeLocalStorage } from "Utils/storage";
import baseUrl from "./config";

function login(Data) {
  axios({
    method: "post",
    url: `${baseUrl}auth/login`,
    data: Data,
  })
    .then((res) => res.data)
    .then((data) => {
      setLocalStorage(STORAGE.USER_DATA, JSON.stringify(data));
      setLocalStorage(STORAGE.USER_TOKEN, data.accessToken);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
}

function register(Data) {
  axios({
    method: "post",
    url: `${baseUrl}auth/create-teacher`,
    data: Data,
  })
    .then((res) => res.data)
    .then((data) => {
      setLocalStorage(STORAGE.USER_DATA, JSON.stringify(data));
      setLocalStorage(STORAGE.USER_TOKEN, data.accessToken);
      window.location.reload();
    })
    .catch((err) => {
      console.warn(err);
    });
}

function logout() {
  axios({
    method: "post",
    url: `${baseUrl}auth/logout`,
  })
    .then(() => {
      removeLocalStorage(STORAGE.USER_DATA);
      removeLocalStorage(STORAGE.USER_TOKEN);
      window.location.reload();
    })
    .catch((err) => {
      console.warn(err);
    });
}

export { login, register, logout };
