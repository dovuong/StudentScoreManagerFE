import { Alert, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { getListTeacher } from "Apis/teacher.api";
import Loading from "components/Loading";
// import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ListTeacher from "layouts/teacher/ListTeacher";
import { useEffect, useState } from "react";

function Subjects() {
  const [listTeacher, setListTeacher] = useState([]);
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
      getListTeacher(setListTeacher, setIsSave);
    }
  }, [isSave]);
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
          <Alert severity="success" style={{ marginBottom: "10px" }}>
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
                Quản lý giáo viên
              </MDTypography>
            </MDBox>
            {elemNoti()}
            <MDBox mb={3} width="100%">
              {isSave ? (
                <Loading type="spin" color="rgb(41,130,235)" />
              ) : (
                <ListTeacher
                  listTeacher={listTeacher}
                  setIsSave={setIsSave}
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
