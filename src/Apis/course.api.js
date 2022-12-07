import axios from "axios";
import { getLocalStorage, STORAGE } from "Utils/storage";
import baseUrl from "./config";

const createCourse = (Data, setIsSave, setNotification) => {
  axios({
    method: "post",
    url: `${baseUrl}course/create-course`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      setNotification(`Add successfully!`);
      setIsSave(true);
    })
    .catch((err) => {
      console.log(err);
      setNotification("error");
    });
};

const getListCourse = (setListCourse, setIsSave = null) => {
  axios({
    method: "get",
    url: `${baseUrl}course/get-course`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      setListCourse(data);
      if (setIsSave) {
        setIsSave(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const getListCourseBySubject = (idSubject, setListCourseBySubject, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}course/get-course-by-subject/${idSubject}`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      // console.log(body);
      setListCourseBySubject(data);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getListCourseByTeacher = (idTeacher, setListCourseByTeacher, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}course/get-course-teacher/${idTeacher}`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      setListCourseByTeacher(data);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateCourse = (Data, setIsSave, setNotification) => {
  axios({
    method: "put",
    url: `${baseUrl}course/update-course`,
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

const getListStudentByCourse = (idCourse, setListStudentByCourse, setIsSave = null) => {
  axios({
    method: "get",
    url: `${baseUrl}student-course/get-list-student-course-by-course/${idCourse}`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      setListStudentByCourse(data);
      if (setIsSave) {
        setIsSave(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const addStudentToCourse = (Data, setIsSave, setNotification) => {
  axios({
    method: "post",
    url: `${baseUrl}student-course/add-student-course`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      setNotification(`Add Student successfully!`);
      setIsSave(true);
    })
    .catch((err) => {
      console.log(err);
      setNotification("error");
    });
};

const updateStudentInCourse = (Data, setIsSave, setNotification) => {
  axios({
    method: "post",
    url: `${baseUrl}student-course/update-student-course`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
      setNotification(`Update student successfully!`);
      setIsSave(true);
    })
    .catch((err) => {
      console.log(err);
      setNotification("error");
    });
};

export {
  createCourse,
  getListCourse,
  getListCourseBySubject,
  getListCourseByTeacher,
  updateCourse,
  getListStudentByCourse,
  addStudentToCourse,
  updateStudentInCourse,
};
