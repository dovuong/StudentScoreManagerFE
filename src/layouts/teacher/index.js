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
  useEffect(() => {
    if (isSave) {
      getListTeacher(setListTeacher, setIsSave);
    }
  }, [isSave]);
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
            <MDBox mb={3} width="100%">
              {isSave ? (
                <Loading type="spin" color="rgb(41,130,235)" />
              ) : (
                <ListTeacher listTeacher={listTeacher} setIsSave={setIsSave} />
              )}
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Subjects;
