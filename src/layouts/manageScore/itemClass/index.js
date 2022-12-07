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
import { getListPointByScore } from "Apis/manageScore.api";
import { useEffect, useState } from "react";

function ItemClass({ stt, malop, tenlop, sosv, item, setIsSave, setNotification }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const [listPoint, setListPoint] = useState([]);
  useEffect(() => {
    getListPointByScore(item.id, setListPoint, setIsSave);
  }, []);

  return (
    <MDBox display="block">
      <MDBox pl={3} display="flex" height="3.5rem" pt={2} borderBottom="0.2px solid #f0f2f5">
        <MDTypography variant="caption" color="text" fontWeight="medium" marginLeft="5px">
          {stt}
        </MDTypography>
        <MDTypography variant="caption" color="text" fontWeight="medium" ml={17} width="280px">
          {malop}
        </MDTypography>
        <MDTypography variant="caption" color="text" fontWeight="medium" ml={1} width="380px">
          {tenlop}
        </MDTypography>
        <MDTypography variant="caption" color="text" fontWeight="medium" ml={1} width="200px">
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
      {open && (
        <ListStudentClass
          listPoint={listPoint}
          setIsSave={setIsSave}
          setNotification={setNotification}
        />
      )}
    </MDBox>
  );
}

ItemClass.propTypes = {
  stt: PropTypes.string.isRequired,
  malop: PropTypes.string.isRequired,
  tenlop: PropTypes.string.isRequired,
  sosv: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  setIsSave: PropTypes.string.isRequired,
  setNotification: PropTypes.string.isRequired,
};

export default ItemClass;
