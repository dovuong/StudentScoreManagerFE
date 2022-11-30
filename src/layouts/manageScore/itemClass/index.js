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
import ListStudentClass from "layouts/manageScore/listStudentClass";

function ItemClass({ stt, malop, tenlop, khoabieu, sosv }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <MDBox display="block">
      <MDBox pl={3} display="flex" height="3.5rem" pt={2} borderBottom="0.2px solid #f0f2f5">
        <MDTypography variant="caption" color="text" fontWeight="medium" marginLeft="5px">
          {stt}
        </MDTypography>
        <MDTypography variant="caption" color="text" fontWeight="medium" ml={17} width="50%">
          {malop}
        </MDTypography>
        <MDTypography variant="caption" color="text" fontWeight="medium" ml={5} width="50%">
          {tenlop}
        </MDTypography>
        <MDTypography variant="caption" color="text" fontWeight="medium" ml={11} width="50%">
          {khoabieu}
        </MDTypography>
        <MDTypography variant="caption" color="text" fontWeight="medium" ml={15} width="50%">
          {sosv}
        </MDTypography>
        <MDBox display="flex" alignItems="center" mt={-2} mr={7}>
          {!open ? (
            <MDButton
              variant="text"
              color={darkMode ? "white" : "dark"}
              sx={{ width: "150px" }}
              onClick={handleClick}
            >
              <Icon>edit</Icon>&nbsp;nhập điểm
            </MDButton>
          ) : (
            <MDButton
              variant="text"
              color={darkMode ? "white" : "dark"}
              sx={{ width: "150px" }}
              onClick={handleClick}
            >
              <Icon>close</Icon>&nbsp;đóng
            </MDButton>
          )}
        </MDBox>
      </MDBox>
      {open && <ListStudentClass />}
    </MDBox>
  );
}

ItemClass.propTypes = {
  stt: PropTypes.string.isRequired,
  malop: PropTypes.string.isRequired,
  tenlop: PropTypes.string.isRequired,
  khoabieu: PropTypes.string.isRequired,
  sosv: PropTypes.string.isRequired,
};

export default ItemClass;
