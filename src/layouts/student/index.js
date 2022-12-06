import { Alert, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { getListClassroom } from "Apis/classroom.api";
import { getListStudent, getListStudentByClass } from "Apis/student.api";
import Loading from "components/Loading";
// import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ListStudent from "layouts/student/ListStudent";
import { useEffect, useState } from "react";

function Subjects() {
  const [listStudent, setListStudent] = useState([]);
  const [listClass, setListClass] = useState([]);
  const [idClassChosen, setIdClassChosen] = useState(0);
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
    if (isSave) {
      if (idClassChosen === 0) {
        getListStudent(setListStudent, setIsSave);
        getListClassroom(setListClass, setIsSave);
      } else {
        getListStudentByClass(idClassChosen, setListStudent, setIsSave);
        getListClassroom(setListClass, setIsSave);
      }
    }
  }, [idClassChosen, isSave]);
  // useEffect(() => {
  //   if (idFacultyChosen === 0) {
  //     getListClassroom(setListClass);
  //   } else {
  //     getListClassroomById(idFacultyChosen, setListClass);
  //   }
  // }, [idFacultyChosen]);
  // useEffect(() => {
  //   if (idFacultyChosen === 0 && idClassChosen === 0) {
  //     getListStudent(setListStudent);
  //     getListClassroom(setListClass);
  //   } else if (idFacultyChosen === 0 && idClassChosen !== 0) {
  //     getListClassroom(setListClass);
  //     getListStudentByClass(idClassChosen, setListStudent);
  //   } else if (idFacultyChosen !== 0 && idClassChosen === 0) {
  //     getListClassroomById(idFacultyChosen, setListClass);
  //     getListStudent(setListStudent);
  //   } else {
  //     getListClassroomById(idFacultyChosen, setListClass);
  //     getListStudentByClass(idClassChosen, setListStudent);
  //   }
  // }, [idClassChosen, idFacultyChosen]);
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
                Quản lý sinh viên
              </MDTypography>
            </MDBox>
            {elemNoti()}

            <MDBox mb={3} width="100%">
              {isSave ? (
                <Loading type="spin" color="rgb(41,130,235)" />
              ) : (
                <ListStudent
                  listStudent={listStudent}
                  listClass={listClass}
                  setIdClassChosen={setIdClassChosen}
                  setIsSave={setIsSave}
                  idClassChosen={idClassChosen}
                  setNotification={setNotification}
                />
              )}
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Subjects;
