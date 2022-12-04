import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TextField from "@mui/material/TextField";
import MDButton from "components/MDButton";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { createClassroom, createListClassroom } from "Apis/classroom.api";

function AddClass({ departments, setIsSave, setNotification }) {
  const [idFaculty, setIdFaculty] = useState(0);
  const [nameClassRoom, setNameClassroom] = useState("");
  const hanldeCreateClassroom = () => {
    if (nameClassRoom.split(" ").length > 1) {
      const array = nameClassRoom.split(" ").map((item) => ({
        nameClassroom: item,
      }));
      createListClassroom(
        {
          idFaculty,
          nameClassroom: array,
        },
        setNotification
      );
    } else {
      createClassroom(
        {
          idFaculty,
          nameClassRoom,
        },
        setIsSave,
        setNotification
      );
    }
  };
  return (
    <Card sx={{ height: "250px" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={4}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Thêm lớp học
        </MDTypography>
      </MDBox>
      {/* <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={4}>
        <MDTypography size={3} fontWeight="small" textTransform="capitalize">
          Thêm lớp học
        </MDTypography>
      </MDBox> */}
      <MDBox pt={3} pb={2} px={4}>
        <MDBox mb={2} display="flex">
          <MDTypography variant="caption" color="text" fontWeight="bold" width="70px">
            Tên lớp học
          </MDTypography>
          <MDBox ml={4} width="15rem">
            <TextField
              label="lop"
              variant="outlined"
              sx={{ mt: -1, width: "24ch" }}
              onChange={(e) => {
                setNameClassroom(e.target.value);
              }}
            />
          </MDBox>
        </MDBox>
        <MDBox mb={2} display="flex">
          <MDTypography variant="caption" color="text" fontWeight="bold" width="70px">
            Khoa:
          </MDTypography>
          {/* <MDBox ml={4} width="15rem">
            <TextField label="khoa" variant="outlined" sx={{ mt: -1, width: "24ch" }} />
          </MDBox> */}
          <MDBox ml={4} width="15rem">
            <FormControl
              size="small"
              // sx={{ m: 1, minWidth: 120 }}
              fullWidth
              style={{
                height: 40,
              }}
            >
              <InputLabel id="demo-simple-select-label">Khoa</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Khoa"
                onChange={(e) => {
                  setIdFaculty(e.target.value);
                }}
                style={{ height: "100%" }}
              >
                {departments.map((item) => (
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
              hanldeCreateClassroom();
            }}
          >
            Lưu
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}
AddClass.propTypes = {
  departments: PropTypes.arrayOf.isRequired,
  setIsSave: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
};
export default AddClass;
