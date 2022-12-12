import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ListClass from "layouts/classed/ListClass";
import AddClass from "layouts/classed/AddClass";
import { useEffect, useState } from "react";
import { getListClassroom, getListClassroomById } from "Apis/classroom.api";
import { getDepartment } from "Apis/department.api";
import Loading from "components/Loading";
import { Alert, Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";

function Classed() {
  const [listClass, setListClass] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [isSave, setIsSave] = useState(true);
  const [idFacultyChosen, setIdFacultyChosen] = useState(0);
  const [notification, setNotification] = useState("");
  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  useEffect(() => {
    if (notification) {
      setState({
        ...state,
        open: true,
      });
    }
    const notiTime = setTimeout(() => {
      setNotification("");
      setState({
        ...state,
        open: false,
      });
    }, 6000);
    return () => {
      clearTimeout(notiTime);
    };
  }, [notification]);

  useEffect(() => {
    if (isSave) {
      if (idFacultyChosen === 0) {
        getListClassroom(setListClass, setIsSave);
        getDepartment(setDepartments, setIsSave);
      } else {
        getListClassroomById(idFacultyChosen, setListClass, setIsSave);
        getDepartment(setDepartments, setIsSave);
      }
    }
  }, [idFacultyChosen, isSave]);
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
            <Snackbar
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              message={notification}
              anchorOrigin={{ vertical, horizontal }}
              // key={vertical + horizontal}
            >
              {elemNoti()}
            </Snackbar>
            <MDBox mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                  {isSave ? (
                    <Loading type="spin" color="rgb(41,130,235)" />
                  ) : (
                    <ListClass
                      listClass={listClass}
                      departments={departments}
                      setIdFacultyChosen={setIdFacultyChosen}
                      setIsSave={setIsSave}
                      idFacultyChosen={idFacultyChosen}
                      setNotification={setNotification}
                    />
                  )}
                </Grid>
                <Grid item xs={12} md={5}>
                  <AddClass
                    departments={departments}
                    setIsSave={setIsSave}
                    setNotification={setNotification}
                  />
                </Grid>
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Classed;
