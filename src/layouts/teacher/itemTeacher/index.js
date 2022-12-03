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

function ItemTeacher({ stt, hovaten, chuyenmon, chunhiemlop, email, sdt, hide }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MDBox pl={3} display="flex" height="3.5rem" pt={2} borderBottom="0.2px solid #f0f2f5">
      <MDTypography variant="caption" color="text" fontWeight="medium" marginLeft="5px" width="5%">
        {stt}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        width="15%"
        ml={3}
        textAlign="left"
      >
        {hovaten}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        width="15%"
        ml={3}
        textAlign="left"
      >
        {chuyenmon}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        width="20%"
        ml={3}
        textAlign="left"
      >
        {chunhiemlop}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        width="20%"
        ml={3}
        textAlign="left"
      >
        {email}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        width="20%"
        ml={3}
        textAlign="left"
      >
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
        <MDBox display="flex" alignItems="center" mt={-2} width="30%">
          {null}
        </MDBox>
      ) : (
        <MDBox display="flex" alignItems="center" mt={-2} width="30%">
          <MDBox mr={6} ml={2}>
            <MDButton variant="text" color="error">
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
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Chuyên môn"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Lớp chủ nhiệm"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Số điện thoại"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Update</Button>
        </DialogActions>
      </Dialog>
    </MDBox>
  );
}

ItemTeacher.propTypes = {
  stt: PropTypes.string.isRequired,
  hovaten: PropTypes.string.isRequired,
  chuyenmon: PropTypes.string.isRequired,
  chunhiemlop: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  sdt: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired,
};

export default ItemTeacher;
