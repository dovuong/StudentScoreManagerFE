import axios from "axios";
import { getLocalStorage, STORAGE } from "Utils/storage";
import baseUrl from "./config";

const createStudent = (Data) => {
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
    })
    .catch((err) => {
      console.log(err);
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

const deleteStudent = (Data) => {
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
    })
    .catch((err) => {
      console.log(err);
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

const getListStudent = (setListStudent) => {
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
    })
    .catch((err) => {
      console.log(err);
    });
};

const getListStudentByClass = (idClassRoom, setListStudentByClass) => {
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
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateStudent = (Data) => {
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
    })
    .catch((err) => {
      console.log(err);
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
