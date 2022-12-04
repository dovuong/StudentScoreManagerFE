import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { useEffect, useState } from "react";
import { getDepartment } from "Apis/department.api";
import { getListClassroom } from "Apis/classroom.api";
import { getListTeacher } from "Apis/teacher.api";
import { getListStudent } from "Apis/student.api";

function Dashboard() {
  const [departments, setDepartments] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  // const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getDepartment(setDepartments);
    getListClassroom(setClassrooms);
    getListTeacher(setTeachers);
    getListStudent(setStudents);
  }, []);
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
                count={`+${departments.length}`}
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
                count={`+${classrooms.length}`}
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
                count={`+${teachers.length}`}
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
                count={`+${students.length}`}
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
