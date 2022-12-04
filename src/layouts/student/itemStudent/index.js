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
import { deleteStudent, updateStudent } from "Apis/student.api";

function ItemStudent({
  stt,
  masv,
  hovaten,
  lop,
  ngaysinh,
  sdt,
  idStudent,
  idClass,
  hide,
  setIsSave,
  setNotification,
}) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [dataUpdate, setDataUpdate] = React.useState({
    birthday: ngaysinh,
    name: hovaten,
    numberPhone: sdt,
  });

  React.useEffect(() => {
    setDataUpdate({
      birthday: ngaysinh,
      name: hovaten,
      numberPhone: sdt,
    });
  }, [ngaysinh, hovaten, sdt]);

  const handleDeleteStudent = () => {
    // console.log(dataUpdate);
    deleteStudent(
      {
        idClass,
        idStudent,
      },
      setIsSave,
      setNotification
    );
  };

  const handleUpdateStudent = () => {
    // console.log({
    //   birthday: dataUpdate.birthday,
    //   idClassroom: idClass,
    //   idStudent,
    //   name: dataUpdate.name,
    //   numberPhone: dataUpdate.numberPhone,
    // });
    // console.log(dataUpdate);
    updateStudent(
      {
        birthday: dataUpdate.birthday,
        idClassroom: idClass,
        idStudent,
        name: dataUpdate.name,
        numberPhone: dataUpdate.numberPhone,
      },
      setIsSave,
      setNotification
    );
  };

  return (
    <MDBox pl={3} display="flex" height="3.5rem" pt={2} borderBottom="0.2px solid #f0f2f5">
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        marginLeft="5px"
        width="5%"
        textAlign="left"
      >
        {stt}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" width="13%" textAlign="left">
        {masv}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" width="13%" textAlign="left">
        {hovaten}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" width="13%" textAlign="left">
        {lop}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" width="13%" textAlign="left">
        {ngaysinh}
      </MDTypography>
      {/* <MDTypography variant="caption" color="text" fontWeight="medium" ml={8} width="13%"
        textAlign="left">
        {email}
      </MDTypography> */}
      <MDTypography variant="caption" color="text" fontWeight="medium" width="13%" textAlign="left">
        {sdt}
      </MDTypography>
      {hide ? (
        <MDBox display="flex" alignItems="center" mt={-2} width="40%">
          {null}
        </MDBox>
      ) : (
        <MDBox display="flex" alignItems="center" mt={-2} width="40%">
          <MDBox mr={6} ml={2}>
            <MDButton
              variant="text"
              color="error"
              onClick={() => {
                handleDeleteStudent();
              }}
            >
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
            label="Họ và tên"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            value={dataUpdate.name}
            onChange={(e) => {
              setDataUpdate({
                ...dataUpdate,
                name: e.target.value,
              });
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Lớp"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            defaultValue={lop}
            inputProps={{ readOnly: true }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Ngày sinh"
            type="date"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            value={dataUpdate.birthday}
            onChange={(e) => {
              setDataUpdate({
                ...dataUpdate,
                birthday: e.target.value,
              });
            }}
          />
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
          /> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Số điện thoại"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            value={dataUpdate.numberPhone}
            onChange={(e) => {
              setDataUpdate({
                ...dataUpdate,
                numberPhone: e.target.value,
              });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleUpdateStudent();
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

ItemStudent.propTypes = {
  stt: PropTypes.string.isRequired,
  masv: PropTypes.string.isRequired,
  hovaten: PropTypes.string.isRequired,
  lop: PropTypes.string.isRequired,
  ngaysinh: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  sdt: PropTypes.string.isRequired,
  idClass: PropTypes.number.isRequired,
  idStudent: PropTypes.number.isRequired,
  hide: PropTypes.bool.isRequired,
  setIsSave: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
};

export default ItemStudent;
