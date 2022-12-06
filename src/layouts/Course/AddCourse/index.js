import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TextField from "@mui/material/TextField";
import MDButton from "components/MDButton";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { createCourse } from "Apis/course.api";

function AddCourse({ listSubject, listTeacher, setIsSave, setNotification }) {
  const [dataAdd, setDataAdd] = useState({
    name: "",
    subjectId: 0,
    teacherId: 0,
  });
  const hanldeCreateCourse = () => {
    createCourse(dataAdd, setIsSave, setNotification);
  };
  return (
    <Card sx={{ height: "320px", width: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={4}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Thêm Khóa Học
        </MDTypography>
      </MDBox>
      {/* <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={4}>
        <MDTypography size={3} fontWeight="small" textTransform="capitalize">
          Thêm lớp học
        </MDTypography>
      </MDBox> */}
      <MDBox pt={3} pb={2} px={4}>
        <MDBox mb={2} display="flex">
          <MDTypography variant="caption" color="text" fontWeight="bold" width="40%">
            Tên khóa học
          </MDTypography>
          <MDBox ml={2} width="60%">
            <TextField
              label="Khóa Học"
              variant="outlined"
              sx={{ mt: -1, width: "100%" }}
              onChange={(e) => {
                setDataAdd({
                  ...dataAdd,
                  name: e.target.value,
                });
              }}
            />
          </MDBox>
        </MDBox>
        <MDBox mb={2} display="flex">
          <MDTypography variant="caption" color="text" fontWeight="bold" width="40%">
            Môn Học
          </MDTypography>
          {/* <MDBox ml={4} width="15rem">
            <TextField label="khoa" variant="outlined" sx={{ mt: -1, width: "24ch" }} />
          </MDBox> */}
          <MDBox ml={4} width="70%">
            <FormControl
              size="small"
              sx={{ mt: 1, width: "100%" }}
              fullWidth
              style={{
                height: 40,
              }}
            >
              <InputLabel id="demo-simple-select-label">Môn Học</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Môn Học"
                onChange={(e) => {
                  setDataAdd({
                    ...dataAdd,
                    subjectId: e.target.value,
                  });
                }}
                style={{ height: "100%" }}
              >
                {listSubject.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </MDBox>
        </MDBox>
        <MDBox mb={2} display="flex">
          <MDTypography variant="caption" color="text" fontWeight="bold" width="40%">
            Giáo Viên
          </MDTypography>
          <MDBox ml={4} width="70%">
            <FormControl
              size="small"
              sx={{ mt: 1, width: "100%" }}
              fullWidth
              style={{
                height: 40,
              }}
            >
              <InputLabel id="demo-simple-select-label">Giáo Viên</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Giáo Viên"
                onChange={(e) => {
                  setDataAdd({
                    ...dataAdd,
                    teacherId: e.target.value,
                  });
                }}
                style={{ height: "100%" }}
              >
                {listTeacher.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </MDBox>
        </MDBox>
        <MDBox mt={1} mb={2} ml="63%" width="50px">
          <MDButton
            component=""
            to="/admin/dashboard"
            variant="gradient"
            fullWidth
            color="info"
            onClick={() => {
              hanldeCreateCourse();
            }}
          >
            Lưu
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}
AddCourse.propTypes = {
  listTeacher: PropTypes.arrayOf.isRequired,
  listSubject: PropTypes.arrayOf.isRequired,
  setIsSave: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
};
export default AddCourse;
