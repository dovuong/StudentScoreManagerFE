import axios from "axios";
import baseUrl from "./config";

const createClassroom = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}create-classroom`,
    data: Data,
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

const createListClassroom = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}create-list-classroom`,
    data: Data,
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

const getListClassroom = (setListClassroom) => {
  axios({
    method: "get",
    url: `${baseUrl}get-list-classroom`,
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setListClassroom(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getListClassroomById = (idFaculty, setListClassroomByFaculty) => {
  axios({
    method: "get",
    url: `${baseUrl}get-list-classroom-by-faculty/${idFaculty}`,
  })
    .then((res) => res.data)
    .then((data) => data.body)
    .then((body) => {
      console.log(body);
      setListClassroomByFaculty(body);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateClassroom = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}update-classroom`,
    data: Data,
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

const updateListClassroom = (Data) => {
  axios({
    method: "post",
    url: `${baseUrl}update-list-classroom`,
    data: Data,
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
