import axios from "axios";
import { setLocalStorage, STORAGE, removeLocalStorage, getLocalStorage } from "Utils/storage";
import baseUrl from "./config";

function login(Data, navigate, setErr) {
  axios({
    method: "post",
    url: `${baseUrl}auth/login`,
    data: Data,
  })
    .then((res) => res.data)
    .then((data) => {
      if (data.message) {
        // console.log(data.message);
        setErr(data.message);
      } else {
        setLocalStorage(STORAGE.USER_DATA, JSON.stringify(data));
        setLocalStorage(STORAGE.USER_TOKEN, data.accessToken);
        setLocalStorage("EXPIRE", JSON.stringify(new Date()));
        navigate("/admin/dashboard");
      }
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
      // setLocalStorage(STORAGE.USER_DATA, JSON.stringify(data));
      // setLocalStorage(STORAGE.USER_TOKEN, data.accessToken);
      // window.location.reload();
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function logout(navigate) {
  // console.log(getLocalStorage(STORAGE.USER_TOKEN).split(".")[2]);
  axios({
    method: "post",
    url: `${baseUrl}auth/logout`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then(() => {
      removeLocalStorage(STORAGE.USER_DATA);
      removeLocalStorage(STORAGE.USER_TOKEN);
      removeLocalStorage("POSITION");
      removeLocalStorage("EXPIRE");
      navigate("/authentication/sign-in");
    })
    .catch((err) => {
      console.log(err);
    });
}

function currentUser() {
  axios({
    method: "get",
    url: `${baseUrl}auth/current`,
    headers: {
      authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
      "content-type": "application/json",
    },
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export { login, register, logout, currentUser };
// ${JSON.parse(getLocalStorage(STORAGE.USER_DATA)).tokenType}
