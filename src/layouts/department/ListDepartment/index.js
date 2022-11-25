import Card from "@mui/material/Card";
import { getDepartment } from "Apis/department.api";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/department/data/authorsTableData";
import Item from "layouts/department/itemDepartment";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

function ListDepartment(props) {
  const { clickSave, setClickSave } = props;
  const { columns, rows } = authorsTableData();
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    getDepartment(setDepartments);
  }, []);
  useEffect(() => {
    getDepartment(setDepartments);
    setClickSave(false);
  }, [clickSave]);
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          Danh sách khoa
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <DataTable
            table={{ columns, rows }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />
          <MDBox mt="-40px">
            {/* <Item stt="1" khoa="CNTT" />
            <Item stt="2" khoa="Cơ khí" />
            <Item stt="3" khoa="Điện tử viễn thông" />
            <Item stt="4" khoa="Hóa" />
            <Item stt="5" khoa="Nhiệt" />
            <Item stt="6" khoa="Điện" /> */}
            {departments.map((item) => (
              <Item stt={item.id.toString()} khoa={item.name} key={item.id} />
            ))}
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

ListDepartment.propTypes = {
  clickSave: PropTypes.bool.isRequired,
  setClickSave: PropTypes.func.isRequired,
};

export default ListDepartment;
