import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TextField from "@mui/material/TextField";
import MDButton from "components/MDButton";
import { createSubject } from "Apis/subject.api";
import { useState } from "react";
import PropTypes from "prop-types";

function AddSubject({ setIsSave, setNotification }) {
  const [dataAdd, setDataAdd] = useState({
    name: "",
  });
  const handleCreateSubject = () => {
    createSubject(dataAdd, setIsSave, setNotification);
  };
  return (
    <Card sx={{ height: "200px" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={4}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Thêm môn học
        </MDTypography>
      </MDBox>
      <MDBox pt={3} pb={2} px={4}>
        <MDBox mb={2} display="flex">
          <MDTypography variant="caption" color="text" fontWeight="bold">
            Tên môn học
          </MDTypography>
          <MDBox ml={4} width="15rem">
            <TextField
              label="Môn"
              variant="outlined"
              sx={{ mt: -1, width: "24ch" }}
              onChange={(e) => {
                setDataAdd({
                  name: e.target.value,
                });
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
              handleCreateSubject();
            }}
          >
            Lưu
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}
AddSubject.propTypes = {
  setIsSave: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
};
export default AddSubject;
