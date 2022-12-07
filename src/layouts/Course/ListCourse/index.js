import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/classed/data/authorsTableData";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { PropTypes } from "prop-types";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import MDButton from "components/MDButton";
import AddCourse from "../AddCourse";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import { useEffect } from "react";
import ItemCourse from "../itemCourse";

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
  listStudent,
}) {
  const { columns, rows } = authorsTableData();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
          Danh sách khóa học
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
        <MDBox mt={1} mb={2} width="120px">
          <MDButton to="/admin/dashboard" variant="gradient" color="info" onClick={handleClickOpen}>
            + create
          </MDButton>
        </MDBox>
      </MDBox>
      <MDBox pt={1} pb={2} px={0}>
        <ItemCourse
          stt="STT"
          khoahoc="Lớp học phần"
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
                listStudent={listStudent}
              />
            ))}
          </MDBox>
        </MDBox>
        <Dialog open={open} onClose={handleClose}>
          <AddCourse
            listSubject={listSubject}
            listTeacher={listTeacher}
            setIsSave={setIsSave}
            setNotification={setNotification}
          />
          {/* <DialogTitle ml="43%">Update</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Tên Khóa học"
              type="email"
              fullWidth
              variant="standard"
              sx={{ width: "450px", mx: 4 }}
              style={{
                marginBottom: 20,
              }}
              value={dataUpdate.name}
              onChange={(e) => {
                setDataUpdate({
                  ...dataUpdate,
                  name: e.target.value,
                });
              }}
            />
            <FormControl
              size="small"
              sx={{ width: "450px", mx: 4 }}
              // autoWidth
              style={{
                height: 40,
              }}
            >
              <InputLabel id="demo-simple-select-label">Giáo Viên</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Giáo Viên"
                value={dataUpdate.teacherId}
                onChange={(e) => {
                  setDataUpdate({
                    ...dataUpdate,
                    teacherId: e.target.value,
                  });
                }}
                style={{ height: "100%" }}
              >
                {listTeacher?.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                handleUpdateCourse();
                handleClose();
              }}
            >
              Update
            </Button>
          </DialogActions> */}
        </Dialog>
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
  listStudent: PropTypes.arrayOf.isRequired,
};
export default ListCourse;
