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
import { updateSubject } from "Apis/subject.api";

function ItemSubject({ stt, subject, hide, setIsSave, setNotification, idSubject }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [open, setOpen] = React.useState(false);
  const [dataUpdate, setDataUpdate] = React.useState({
    name: "",
    subjectId: 0,
  });
  React.useEffect(() => {
    setDataUpdate({
      name: subject,
      subjectId: idSubject,
    });
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdateSubject = () => {
    updateSubject(dataUpdate, setIsSave, setNotification);
  };
  return (
    <MDBox
      pl={3}
      display="flex"
      height="3.5rem"
      borderBottom="0.2px solid #f0f2f5"
      style={{
        alignItems: "center",
      }}
    >
      <MDTypography variant="caption" color="text" fontWeight="medium" width="10%">
        {stt}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" ml={1} width="30%">
        {subject}
      </MDTypography>
      {hide ? (
        <MDBox display="flex" alignItems="center" mt={-2} width="30%">
          {null}
        </MDBox>
      ) : (
        <MDBox display="flex" alignItems="center" mt={0} width="30%">
          <MDBox mr={2} ml={2}>
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
            label="Môn học"
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleUpdateSubject();
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

ItemSubject.propTypes = {
  stt: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired,
  setIsSave: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
  idSubject: PropTypes.number.isRequired,
};

export default ItemSubject;
