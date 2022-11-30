import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/classed/data/authorsTableData";
import Item from "layouts/classed/itemClass";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { PropTypes } from "prop-types";

function ListClass({ listClass, departments, setIdFacultyChosen }) {
  const { columns, rows } = authorsTableData();

  return (
    <Card id="delete-account">
      <MDBox
        pt={3}
        px={2}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <MDTypography
          variant="h6"
          fontWeight="medium"
          ml={2}
          style={{
            paddingRight: 20,
            width: "40%",
          }}
        >
          Danh sách lớp học
        </MDTypography>
        <FormControl
          size="small"
          sx={{ m: 1, minWidth: 120 }}
          style={{
            height: 40,
          }}
        >
          <InputLabel id="demo-simple-select-label">Khoa</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Khoa"
            defaultValue={0}
            // value={0}
            onChange={(e) => {
              setIdFacultyChosen(e.target.value);
            }}
            style={{ height: "100%" }}
          >
            <MenuItem value={0}>Tất Cả</MenuItem>
            {departments.map((item, index) => {
              if (index === departments.length - 1) {
                return <MenuItem value={item.id}>{item.name}</MenuItem>;
              }
              return <MenuItem value={item.id}>{item.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
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
            {/* <Item stt="1" lophoc="19TCLC_DT2" khoa="CNTT" />
            <Item stt="2" lophoc="19SH1" khoa="Hóa" />
            <Item stt="3" lophoc="19DTVT" khoa="Diện tử viễn thông" />
            <Item stt="4" lophoc="22T2" khoa="CNTT" />
            <Item stt="5" lophoc="21C4" khoa="Cơ khí" />
            <Item stt="6" lophoc="19SH2" khoa="Hóa" />
            <Item stt="7" lophoc="19TCT_DT4" khoa="CNTT" /> */}
            {listClass.map((item, index) => (
              <Item
                stt={index + 1}
                lophoc={item.name}
                khoa={item.faculty.name}
                idClass={item.id}
                idFaculty={item.faculty.id}
                nameFaculty={item.faculty.name}
              />
            ))}
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

ListClass.propTypes = {
  listClass: PropTypes.arrayOf.isRequired,
  departments: PropTypes.arrayOf.isRequired,
  setIdFacultyChosen: PropTypes.number.isRequired,
};
export default ListClass;
