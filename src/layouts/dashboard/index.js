import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5} height="18rem">
              <ComplexStatisticsCard
                color="dark"
                icon="assignment"
                title="Khoa"
                count="+7"
                percentage={{
                  color: "success",
                  amount: "+",
                  label: "Chi tiết",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="cottage"
                title="Lớp học"
                count="+50"
                percentage={{
                  color: "success",
                  amount: "+",
                  label: "Chi tiết",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5} height="18rem">
              <ComplexStatisticsCard
                color="dark"
                icon="assignment"
                title="Môn học"
                count="+12"
                percentage={{
                  color: "success",
                  amount: "+",
                  label: "Chi tiết",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="groups"
                title="Giáo viên"
                count="+150"
                percentage={{
                  color: "success",
                  amount: "+",
                  label: "Chi tiết",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="groups"
                title="Sinh viên"
                count="+2000"
                percentage={{
                  color: "success",
                  amount: "+",
                  label: "Chi tiết",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
