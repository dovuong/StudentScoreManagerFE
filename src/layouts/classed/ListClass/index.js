import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/classed/data/authorsTableData";
import Item from "layouts/classed/itemClass";

function ListClass() {
  const { columns, rows } = authorsTableData();

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          Danh sách lớp học
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
            <Item stt="1" lophoc="19TCLC_DT2" khoa="CNTT" />
            <Item stt="2" lophoc="19SH1" khoa="Hóa" />
            <Item stt="3" lophoc="19DTVT" khoa="Diện tử viễn thông" />
            <Item stt="4" lophoc="22T2" khoa="CNTT" />
            <Item stt="5" lophoc="21C4" khoa="Cơ khí" />
            <Item stt="6" lophoc="19SH2" khoa="Hóa" />
            <Item stt="7" lophoc="19TCT_DT4" khoa="CNTT" />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ListClass;
