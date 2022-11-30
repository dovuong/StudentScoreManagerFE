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
import { updateClassroom } from "Apis/classroom.api";
// import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function ItemClass({ stt, lophoc, khoa, idClass, idFaculty, nameFaculty }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [open, setOpen] = React.useState(false);
  const [newNameClass, setnewNameClass] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdateClass = () => {
    updateClassroom({
      idClass,
      idFaculty,
      nameClassRoom: newNameClass,
    });
  };

  return (
    <MDBox pl={3} display="flex" height="3.5rem" pt={2} borderBottom="0.2px solid #f0f2f5">
      <MDTypography variant="caption" color="text" fontWeight="medium" marginLeft="5px">
        {stt}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" ml={8} width="30%">
        {lophoc}
      </MDTypography>
      <MDTypography variant="caption" color="text" fontWeight="medium" ml={4} width="30%">
        {khoa}
      </MDTypography>
      <MDBox display="flex" alignItems="center" mt={-2}>
        <MDBox mr={2} ml={2}>
          <MDButton variant="text" color="error">
            <Icon>delete</Icon>&nbsp;delete
          </MDButton>
        </MDBox>
        <MDButton variant="text" color={darkMode ? "white" : "dark"} onClick={handleClickOpen}>
          <Icon>edit</Icon>&nbsp;edit
        </MDButton>
      </MDBox>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle ml="43%">Update</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Lớp"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            style={{
              marginBottom: 20,
            }}
            defaultValue={lophoc}
            onChange={(e) => {
              setnewNameClass(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Khoa"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            defaultValue={nameFaculty}
            inputProps={{ readOnly: true }}
          />
          {/* <FormControl
            size="small"
            sx={{ width: "450px", mx: 4 }}
            // autoWidth
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
          </FormControl> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleUpdateClass();
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
ItemClass.propTypes = {
  stt: PropTypes.string.isRequired,
  lophoc: PropTypes.string.isRequired,
  khoa: PropTypes.string.isRequired,
  // departments: PropTypes.arrayOf.isRequired,
  idClass: PropTypes.number.isRequired,
  idFaculty: PropTypes.number.isRequired,
  nameFaculty: PropTypes.string.isRequired,
};

export default ItemClass;
