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
import { updateTeacher, deleteTeacher } from "Apis/teacher.api";

function ItemTeacher({ stt, hovaten, ngaysinh, sdt, hide, setIsSave, idTeacher, setNotification }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const day = ngaysinh.split("T")[0].split("-");
  const [data, setData] = React.useState({
    birthday: ngaysinh?.split("T")[0],
    // birthday: ngaysinh?.slice(0, 10),
    idTeacher,
    name: hovaten,
    numberPhone: sdt,
    password: "",
  });
  React.useEffect(() => {
    setData({
      birthday: ngaysinh?.split("T")[0],
      // birthday: ngaysinh.slice(0, 10),
      idTeacher,
      name: hovaten,
      numberPhone: sdt,
      password: "",
    });
  }, [ngaysinh, hovaten, sdt]);
  const handleUpdateTeacher = () => {
    updateTeacher(data, setIsSave, setNotification);
  };
  const handleDeleteTeacher = () => {
    // console.log("a");
    deleteTeacher(idTeacher, setIsSave, setNotification);
  };
  return (
    <MDBox pl={3} display="flex" height="3.5rem" pt={2} borderBottom="0.2px solid #f0f2f5">
      <MDTypography variant="caption" color="text" fontWeight="medium" marginLeft="5px" width="5%">
        {stt}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" width="15%" textAlign="left">
        {hovaten}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" width="20%" textAlign="left">
        {ngaysinh?.split("T")[0]}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" width="20%" textAlign="left">
        {sdt}
      </MDTypography>
      {/* <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        width="20%"
        ml={3}
        textAlign="left"
      >
        Function
      </MDTypography> */}
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
                handleDeleteTeacher();
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
            value={data.name}
            onChange={(e) => {
              setData({
                ...data,
                name: e.target.value,
              });
            }}
          />
          <TextField
            // autoFocus
            margin="dense"
            id="name"
            label="Ngày sinh"
            type="date"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            InputLabelProps={{
              shrink: true,
            }}
            value={data.birthday}
            onChange={(e) => {
              setData({
                ...data,
                birthday: e.target.value,
              });
            }}
          />
          <TextField
            // autoFocus
            margin="dense"
            id="name"
            label="Số điện thoại"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            value={data.numberPhone}
            onChange={(e) => {
              setData({
                ...data,
                numberPhone: e.target.value,
              });
            }}
          />
          <TextField
            // autoFocus
            margin="dense"
            id="name"
            label="Mật khẩu"
            type="password"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            value={data.password}
            onChange={(e) => {
              setData({
                ...data,
                password: e.target.value,
              });
            }}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleUpdateTeacher();
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

ItemTeacher.propTypes = {
  stt: PropTypes.string.isRequired,
  hovaten: PropTypes.string.isRequired,
  ngaysinh: PropTypes.string.isRequired,
  sdt: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired,
  setIsSave: PropTypes.bool.isRequired,
  idTeacher: PropTypes.number.isRequired,
  setNotification: PropTypes.func.isRequired,
};

export default ItemTeacher;
