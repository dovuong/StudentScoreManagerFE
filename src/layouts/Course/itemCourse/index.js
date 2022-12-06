/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { updateCourse } from "Apis/course.api";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function ItemCourse({
  stt,
  khoahoc,
  monhoc,
  giaovien,
  status,
  hide,
  setIsSave,
  setNotification,
  idCourse,
  listTeacher,
  idTeacher,
}) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [open, setOpen] = React.useState(false);
  const [dataUpdate, setDataUpdate] = React.useState({
    courseId: 0,
    name: "",
    teacherId: 0,
  });
  React.useEffect(() => {
    setDataUpdate({
      ...dataUpdate,
      courseId: idCourse,
      name: khoahoc,
      teacherId: idTeacher,
    });
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdateCourse = () => {
    updateCourse(dataUpdate, setIsSave, setNotification);
  };

  return (
    <MDBox
      display="flex"
      height="3.5rem"
      borderBottom="0.2px solid #f0f2f5"
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        style={{
          width: "8%",
        }}
      >
        {stt}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        px={1}
        style={{
          width: "17%",
        }}
      >
        {khoahoc}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        style={{
          width: "18%",
        }}
        textAlign="left"
      >
        {monhoc}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        style={{
          width: "18%",
        }}
        textAlign="left"
      >
        {giaovien}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        style={{
          width: "8%",
        }}
        textAlign="left"
      >
        {status ? "true" : "false"}
      </MDTypography>
      {hide ? (
        <MDBox display="flex" alignItems="center" mt={-2} width="20%">
          {null}
        </MDBox>
      ) : (
        <MDBox display="flex" alignItems="center" mt={-1} width="20%">
          <MDBox>
            <MDButton variant="text" color="error" disabled>
              <Icon>delete</Icon>&nbsp;delete
            </MDButton>
          </MDBox>
          <MDButton variant="text" color={darkMode ? "white" : "dark"} onClick={handleClickOpen}>
            <Icon>edit</Icon>&nbsp;edit
          </MDButton>
        </MDBox>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle ml="43%">Update</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tên Khóa học"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            style={{
              marginBottom: 20,
            }}
            value={dataUpdate.name}
            onChange={(e) => {
              setDataUpdate({
                ...dataUpdate,
                name: e.target.value,
              });
            }}
          />
          <FormControl
            size="small"
            sx={{ width: "450px", mx: 4 }}
            // autoWidth
            style={{
              height: 40,
            }}
          >
            <InputLabel id="demo-simple-select-label">Giáo Viên</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Giáo Viên"
              value={dataUpdate.teacherId}
              onChange={(e) => {
                setDataUpdate({
                  ...dataUpdate,
                  teacherId: e.target.value,
                });
              }}
              style={{ height: "100%" }}
            >
              {listTeacher?.map((item) => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleUpdateCourse();
              handleClose();
            }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </MDBox>
  );
}

// Setting default values for the props of ItemClass
// ItemClass.defaultProps = {
//   noGutter: false,
// };

// // Typechecking props for the ItemClass
ItemCourse.propTypes = {
  stt: PropTypes.string.isRequired,
  monhoc: PropTypes.string.isRequired,
  khoahoc: PropTypes.string.isRequired,
  giaovien: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  // departments: PropTypes.arrayOf.isRequired,
  // idClass: PropTypes.number.isRequired,
  // idFaculty: PropTypes.number.isRequired,
  // nameFaculty: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired,
  setIsSave: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
  idCourse: PropTypes.number.isRequired,
  listTeacher: PropTypes.arrayOf.isRequired,
  idTeacher: PropTypes.number.isRequired,
};

export default ItemCourse;
