import Card from "@mui/material/Card";
import { PropTypes } from "prop-types";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/manageScore/data/authorsTableData";
import Item from "layouts/manageScore/itemClass";
import * as React from "react";

function ListClass({ listCourse, setIsSave, setNotification }) {
  const { columns, rows } = authorsTableData();
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2} display="flex">
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          Danh sách lớp
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <Item
          stt="stt"
          malop="mã lớp học phần "
          tenlop="tên lớp học phần"
          sosv="số sinh viên"
          hide
        />
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <DataTable
            table={{ columns, rows }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />
          <MDBox mt="-40px">
            {listCourse?.map((item, index) => (
              <Item
                stt={index + 1}
                malop={item.name}
                tenlop={item.subjectName}
                sosv={item.totalStudent}
                item={item}
                setIsSave={setIsSave}
                setNotification={setNotification}
                hide={false}
              />
            ))}
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}
ListClass.propTypes = {
  listCourse: PropTypes.arrayOf.isRequired,
  setIsSave: PropTypes.string.isRequired,
  setNotification: PropTypes.string.isRequired,
};

export default ListClass;
