import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/classed/data/authorsTableData";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { PropTypes } from "prop-types";
import ItemCourse from "../itemCourse";
// import { useEffect } from "react";

function ListCourse({
  listCourse,
  listSubject,
  listTeacher,
  setIsSave,
  setNotification,
  setIdChosen,
  idChosen,
  setTypeFilter,
  typeFilter,
}) {
  const { columns, rows } = authorsTableData();
  // useEffect(() => {
  //   console.log(typeFilter);
  // }, []);
  const elemFormControl = () => {
    // alert(typeFilter);
    let res = null;
    if (typeFilter === 1) {
      res = (
        <FormControl
          size="small"
          sx={{ m: 1, minWidth: 120 }}
          style={{
            height: 40,
          }}
        >
          <InputLabel id="demo-simple-select-label">Mon hoc</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Mon hoc"
            value={idChosen}
            onChange={(e) => {
              setIdChosen(e.target.value);
              setIsSave(true);
            }}
            style={{ height: "100%" }}
          >
            {/* <MenuItem value={0}>Tất Cả</MenuItem> */}
            {listSubject.map((item) => (
              <MenuItem value={item.id}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    } else if (typeFilter === 2) {
      res = (
        <FormControl
          size="small"
          sx={{ m: 1, minWidth: 120 }}
          style={{
            height: 40,
          }}
        >
          <InputLabel id="demo-simple-select-label">Giao vien</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Giao vien"
            value={idChosen}
            onChange={(e) => {
              setIdChosen(e.target.value);
              setIsSave(true);
            }}
            style={{ height: "100%" }}
          >
            {listTeacher.map((item) => (
              <MenuItem value={item.id}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    }
    return res;
  };
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
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Type"
            value={typeFilter}
            onChange={(e) => {
              // alert(e.target.value);
              setTypeFilter(e.target.value);
              setIsSave(true);
            }}
            style={{ height: "100%" }}
          >
            <MenuItem value={0}>Tất cả</MenuItem>
            <MenuItem value={1}>Môn học</MenuItem>
            <MenuItem value={2}>Giáo Viên</MenuItem>
          </Select>
        </FormControl>
        {elemFormControl()}
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <ItemCourse
          stt="STT"
          khoahoc="Khóa học"
          monhoc="Môn Học"
          giaovien="Giáo viên"
          status="Trạng thái"
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
              <ItemCourse
                stt={index + 1}
                khoahoc={item?.name}
                monhoc={item.subject?.name}
                giaovien={item.teacher?.name}
                status={item.status}
                idCourse={item.id}
                idTeacher={item.teacher.id}
                // idFaculty={item.faculty.id}
                listTeacher={listTeacher}
                hide={false}
                setIsSave={setIsSave}
                setNotification={setNotification}
              />
            ))}
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

ListCourse.propTypes = {
  listCourse: PropTypes.arrayOf.isRequired,
  listSubject: PropTypes.arrayOf.isRequired,
  listTeacher: PropTypes.arrayOf.isRequired,
  setIsSave: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
  setIdChosen: PropTypes.func.isRequired,
  idChosen: PropTypes.number.isRequired,
  setTypeFilter: PropTypes.func.isRequired,
  typeFilter: PropTypes.number.isRequired,
};
export default ListCourse;
