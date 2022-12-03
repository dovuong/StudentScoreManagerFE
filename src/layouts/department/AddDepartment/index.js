import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TextField from "@mui/material/TextField";
import MDButton from "components/MDButton";
import { useState } from "react";
import { createDepartment } from "Apis/department.api";
import { PropTypes } from "prop-types";

function AddDepartment({ setClickSave }) {
  const [department, setDepartment] = useState("");
  const handleCreateDepartment = () => {
    createDepartment(department, setClickSave);
  };
  return (
    <Card sx={{ height: "200px" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={4}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Thêm khoa
        </MDTypography>
      </MDBox>
      <MDBox pt={3} pb={2} px={4}>
        <MDBox mb={2} display="flex">
          <MDTypography variant="caption" color="text" fontWeight="bold">
            Tên khoa
          </MDTypography>
          <MDBox ml={4} width="15rem">
            <TextField
              label="khoa"
              variant="outlined"
              sx={{ mt: -1, width: "24ch" }}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
            />
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
              handleCreateDepartment();
            }}
          >
            Lưu
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}
AddDepartment.propTypes = {
  setClickSave: PropTypes.func.isRequired,
};

export default AddDepartment;
