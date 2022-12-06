import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/subjects/data/authorsTableData";
import Item from "layouts/subjects/itemSubject";

function ListSubjects() {
  const { columns, rows } = authorsTableData();

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          Danh sách môn học
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <Item stt="STT" monhoc="Môn Học" />
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <DataTable
            table={{ columns, rows }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />
          <MDBox mt="-40px">
            <Item stt="1" monhoc="Mạng máy tính" />
            <Item stt="2" monhoc="Giải tích 1" />
            <Item stt="3" monhoc="Lập trình mạng" />
            <Item stt="4" monhoc="Khoa học  máy tính" />
            <Item stt="5" monhoc="Hướng đối tượng" />
            <Item stt="6" monhoc="Lập trình Java" />
            <Item stt="7" monhoc="Lịch sử đảng" />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ListSubjects;
