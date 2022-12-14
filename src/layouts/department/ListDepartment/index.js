import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/department/data/authorsTableData";
import Item from "layouts/department/itemDepartment";
import { PropTypes } from "prop-types";

function ListDepartment(props) {
  const { departments } = props;
  const { columns, rows } = authorsTableData();

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          Danh sách khoa
        </MDTypography>
      </MDBox>

      <MDBox pt={1} pb={2} px={2}>
        <Item stt="STT" khoa="Khoa" key={0} hide />
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <DataTable
            table={{ columns, rows }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />
          <MDBox mt="-40px">
            {departments.map((item) => (
              <Item stt={item.id.toString()} khoa={item.name} key={item.id} hide={false} />
            ))}
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

ListDepartment.propTypes = {
  departments: PropTypes.arrayOf.isRequired,
};

export default ListDepartment;
