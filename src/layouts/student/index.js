import Grid from "@mui/material/Grid";
import { getListClassroom } from "Apis/classroom.api";
import { getListStudent, getListStudentByClass } from "Apis/student.api";
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
  useEffect(() => {
    getListStudent(setListStudent);
    getListClassroom(setListClass);
  }, []);
  useEffect(() => {
    if (idClassChosen === 0) {
      getListStudent(setListStudent);
    } else {
      getListStudentByClass(idClassChosen, setListStudent);
    }
  }, [idClassChosen]);
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
            <MDBox mb={3} width="100%">
              <ListStudent
                listStudent={listStudent}
                listClass={listClass}
                setIdClassChosen={setIdClassChosen}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Subjects;
