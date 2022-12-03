import axios from "axios";
import { getLocalStorage, STORAGE } from "Utils/storage";
import baseUrl from "./config";

const createStudent = (Data, setIsSave, setNotification) => {
  axios({
    method: "post",
    url: `${baseUrl}create-student`,
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

const createListStudent = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}create-list-student`,
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

const deleteStudent = (Data, setIsSave, setNotification) => {
  axios({
    method: "post",
    url: `${baseUrl}delete-student`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setIsSave(true);
      setNotification(body);
    })
    .catch((err) => {
      console.log(err);
      setNotification("error");
    });
};

const deleteListStudent = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}delete-list-student`,
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

const getListStudent = (setListStudent, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}get-list-student`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setListStudent(body);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getListStudentByClass = (idClassRoom, setListStudentByClass, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}get-list-student-by-class/${idClassRoom}`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setListStudentByClass(body);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateStudent = (Data, setIsSave, setNotification) => {
  axios({
    method: "post",
    url: `${baseUrl}update-student`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setIsSave(true);
      setNotification(body);
    })
    .catch((err) => {
      console.log(err);
      setNotification("error");
    });
};

const updateListStudent = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}update-list-student`,
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
  createListStudent,
  createStudent,
  deleteListStudent,
  deleteStudent,
  getListStudent,
  getListStudentByClass,
  updateListStudent,
  updateStudent,
};
