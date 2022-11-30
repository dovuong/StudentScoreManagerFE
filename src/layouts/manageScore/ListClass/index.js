import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/manageScore/data/authorsTableData";
import Item from "layouts/manageScore/itemClass";
import * as React from "react";

function ListClass() {
  const { columns, rows } = authorsTableData();

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2} display="flex">
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          Danh sách lớp
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
            <Item
              stt="1"
              malop="1021883.2210.19.11"
              tenlop="Lập trình Java"
              khoabieu="Thứ 6, 2-5, F201"
              sosv="50"
            />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ListClass;
