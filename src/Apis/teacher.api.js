import axios from "axios";
import { getLocalStorage, STORAGE } from "Utils/storage";
import baseUrl from "./config";

const createTeacher = (Data, setIsSave, setNotification) => {
  axios({
    method: "post",
    url: `${baseUrl}create-teacher`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setNotification(body);
      setIsSave(true);
    })
    .catch((err) => {
      setNotification("error");
      console.log(err);
    });
};

const createListTeacher = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}create-list-teacher`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteTeacher = (idTeacher, setIsSave, setNotification) => {
  axios({
    method: "post",
    url: `${baseUrl}delete-teacher/${idTeacher}`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setNotification(body);
      setIsSave(true);
    })
    .catch((err) => {
      console.log(err);
      setNotification("error");
    });
};

const deleteListTeacher = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}delete-list-teacher`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getListTeacher = (setListTeacher, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}get-teacher`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setListTeacher(body);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getListTeacherByUsername = (username, setListTeacherByUsername) => {
  axios({
    method: "get",
    url: `${baseUrl}get-teacher-by-username/${username}`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setListTeacherByUsername(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateTeacher = (Data, setIsSave, setNotification) => {
  axios({
    method: "post",
    url: `${baseUrl}update-teacher`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setNotification(body);
      setIsSave(true);
    })
    .catch((err) => {
      console.log(err);
      setNotification("error");
    });
};

const updateListTeacher = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}update-list-teacher`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  createListTeacher,
  createTeacher,
  deleteListTeacher,
  deleteTeacher,
  getListTeacher,
  getListTeacherByUsername,
  updateListTeacher,
  updateTeacher,
};
