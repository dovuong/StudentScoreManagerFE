import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ListDepartment from "layouts/department/ListDepartment";
import AddDepartment from "layouts/department/AddDepartment";
import { useEffect, useState } from "react";
import Loading from "components/Loading";
import { getDepartment } from "Apis/department.api";
import { Alert, Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";

function Department() {
  const [clickSave, setClickSave] = useState(true);
  const [departments, setDepartments] = useState([]);
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
    if (clickSave) {
      getDepartment(setDepartments, setClickSave);
    }
  }, [clickSave]);
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
                {null}
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
                Quản lý khoa
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
                  {clickSave ? (
                    <Loading type="spin" color="rgb(41,130,235)" />
                  ) : (
                    <ListDepartment
                      clickSave={clickSave}
                      setClickSave={setClickSave}
                      departments={departments}
                      setNotification={setNotification}
                    />
                  )}
                </Grid>
                <Grid item xs={12} md={5}>
                  <AddDepartment setClickSave={setClickSave} setNotification={setNotification} />
                </Grid>
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Department;
