import axios from "axios";
import { getLocalStorage, STORAGE } from "Utils/storage";
import baseUrl from "./config";

const createClassroom = (Data, setIsSave) => {
  axios({
    method: "post",
    url: `${baseUrl}create-classroom`,
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
    })
    .catch((err) => {
      console.log(err);
    });
};

const createListClassroom = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}create-list-classroom`,
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

const getListClassroom = (setListClassroom, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}get-list-classroom`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setListClassroom(body);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getListClassroomById = (idFaculty, setListClassroomByFaculty, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}get-list-classroom-by-faculty/${idFaculty}`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setListClassroomByFaculty(body);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateClassroom = (Data, setIsSave) => {
  axios({
    method: "post",
    url: `${baseUrl}update-classroom`,
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
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateListClassroom = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}update-list-classroom`,
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
  createClassroom,
  createListClassroom,
  getListClassroom,
  getListClassroomById,
  updateClassroom,
  updateListClassroom,
};
