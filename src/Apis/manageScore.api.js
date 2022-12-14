import axios from "axios";
import { getLocalStorage, STORAGE } from "Utils/storage";
import baseUrl from "./config";

const getListCourseByTeacherScore = (setListCourseByTeacher, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}course/get-course-teacher`,
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

const getListPointByScore = (idCourse, setListStudentScore, setIsSave) => {
  axios({
    method: "get",
    url: `${baseUrl}student-point/get-list-points-by-course/${idCourse}`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      setListStudentScore(data);
      setIsSave(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updatePoint = (Data, setIsSave, setNotification) => {
  axios({
    method: "put",
    url: `${baseUrl}student-point/update-point`,
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

export { getListCourseByTeacherScore, getListPointByScore, updatePoint };
