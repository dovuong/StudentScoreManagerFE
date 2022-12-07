import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import AddClass from "layouts/classed/AddClass";
import { useEffect, useState } from "react";
import Loading from "components/Loading";
import { Alert, Button } from "@mui/material";
import { getListSubject } from "Apis/subject.api";
import { getListTeacher } from "Apis/teacher.api";
import { getListCourseBySubject, getListCourseByTeacher, getListCourse } from "Apis/course.api";
import { getListStudent } from "Apis/student.api";
import ListCourse from "./ListCourse";
// import AddCourse from "./AddCourse";

function Course() {
  const [listCourse, setListCourse] = useState([]);
  const [listSubject, setListSubject] = useState([]);
  const [listTeacher, setListTeacher] = useState([]);
  const [listStudent, setListStudent] = useState([]);
  const [typeFilter, setTypeFilter] = useState(0);
  const [idChosen, setIdChosen] = useState(0);
  const [isSave, setIsSave] = useState(true);
  const [notification, setNotification] = useState("");
  useEffect(() => {
    const notiTime = setTimeout(() => {
      setNotification("");
    }, 5000);
    return () => {
      clearTimeout(notiTime);
    };
  }, [notification]);

  useEffect(() => {
    getListSubject(setListSubject, setIsSave, setNotification);
    getListTeacher(setListTeacher, setIsSave, setNotification);
    getListStudent(setListStudent, setIsSave, setNotification);
  }, []);

  useEffect(() => {
    setIdChosen(0);
  }, [typeFilter]);

  useEffect(() => {
    if (isSave) {
      if (typeFilter === 1) {
        getListCourseBySubject(idChosen, setListCourse, setIsSave);
      } else if (typeFilter === 2) {
        getListCourseByTeacher(idChosen, setListCourse, setIsSave);
      } else {
        getListCourse(setListCourse, setIsSave);
      }
    }
  }, [idChosen, isSave, typeFilter]);
  const elemNoti = () => {
    let res = null;
    if (notification.length > 0) {
      if (notification === "error") {
        res = (
          <Alert
            severity="error"
            style={{ marginBottom: "10px" }}
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            {notification}
          </Alert>
        );
      } else {
        res = (
          <Alert
            severity="success"
            style={{ marginBottom: "10px", backgroundColor: "rgb(212,255,218)" }}
          >
            {notification}
          </Alert>
        );
      }
    }
    return res;
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <MDBox
              mt={-3}
              py={3}
              px={2}
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
              marginBottom="2rem"
            >
              <MDTypography variant="h6" color="white">
                Quản lý lớp học
              </MDTypography>
            </MDBox>
            {elemNoti()}
            <MDBox mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={14} md={15}>
                  {isSave ? (
                    <Loading type="spin" color="rgb(41,130,235)" />
                  ) : (
                    <ListCourse
                      listCourse={listCourse}
                      listSubject={listSubject}
                      listTeacher={listTeacher}
                      listStudent={listStudent}
                      setIsSave={setIsSave}
                      setNotification={setNotification}
                      setIdChosen={setIdChosen}
                      idChosen={idChosen}
                      setTypeFilter={setTypeFilter}
                      typeFilter={typeFilter}
                    />
                  )}
                </Grid>
                {/* <Grid item xs={10} md={4}>
                  <AddCourse
                    listSubject={listSubject}
                    listTeacher={listTeacher}
                    setIsSave={setIsSave}
                    setNotification={setNotification}
                  />
                </Grid> */}
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Course;
