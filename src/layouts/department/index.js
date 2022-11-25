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
import { useState } from "react";

function Department() {
  const [clickSave, setClickSave] = useState(false);
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
            <MDBox mb={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                  <ListDepartment clickSave={clickSave} setClickSave={setClickSave} />
                </Grid>
                <Grid item xs={12} md={5}>
                  <AddDepartment setClickSave={setClickSave} />
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
