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
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/student/data/authorsTableData";
import Item from "layouts/student/itemStudent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { updateCourse, getListStudentByCourse, addStudentToCourse } from "Apis/course.api";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function ItemCourse({
  stt,
  khoahoc,
  monhoc,
  giaovien,
  status,
  hide,
  setIsSave,
  setNotification,
  idCourse,
  listTeacher,
  idTeacher,
  listStudent,
}) {
  const { columns, rows } = authorsTableData();
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openSee, setOpenSee] = React.useState(false);
  const [dataUpdate, setDataUpdate] = React.useState({
    courseId: 0,
    name: "",
    teacherId: 0,
  });
  const [dataAddStudent, setDataAddStudent] = React.useState({
    course_id: 0,
    student_id: 0,
  });
  const [listStudentByCourse, setListStudentByCorse] = React.useState([]);
  React.useEffect(() => {
    setDataUpdate({
      ...dataUpdate,
      courseId: idCourse,
      name: khoahoc,
      teacherId: idTeacher,
    });
    setDataAddStudent({
      ...dataAddStudent,
      course_id: idCourse,
    });
    getListStudentByCourse(idCourse, setListStudentByCorse, setIsSave);
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };
  const handleClickOpenSee = () => {
    setOpenSee(true);
  };
  const handleCloseSee = () => {
    setOpenSee(false);
  };
  const handleUpdateCourse = () => {
    updateCourse(dataUpdate, setIsSave, setNotification);
  };

  const handleAddStudentToCourse = () => {
    addStudentToCourse(dataAddStudent, setIsSave, setNotification);
  };

  return (
    <MDBox
      display="flex"
      height="3.5rem"
      pl={3}
      borderBottom="0.2px solid #f0f2f5"
      style={{
        width: "100%",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        style={{
          width: "5%",
        }}
      >
        {stt}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        px={1}
        style={{
          width: "15%",
        }}
      >
        {khoahoc}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        style={{
          width: "15%",
        }}
        textAlign="left"
      >
        {monhoc}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        style={{
          width: "15%",
        }}
        textAlign="left"
      >
        {giaovien}
      </MDTypography>
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
        style={{
          width: "8%",
        }}
        textAlign="left"
      >
        {status ? "true" : "false"}
      </MDTypography>
      {hide ? (
        <MDBox display="flex" alignItems="center" mt={-2} width="50%">
          {null}
        </MDBox>
      ) : (
        <MDBox display="flex" alignItems="center" mt={-0} width="50%">
          <MDBox>
            <MDButton variant="text" color="error" disabled>
              <Icon>delete</Icon>&nbsp;delete
            </MDButton>
          </MDBox>
          <MDButton variant="text" color={darkMode ? "white" : "dark"} onClick={handleClickOpen}>
            <Icon>edit</Icon>&nbsp;edit
          </MDButton>

          <MDButton
            variant="text"
            color={darkMode ? "white" : "dark"}
            onClick={handleClickOpenAdd}
            style={{
              width: "30%",
            }}
          >
            Add student
          </MDButton>

          <MDButton
            variant="text"
            color={darkMode ? "white" : "dark"}
            onClick={handleClickOpenSee}
            style={{
              width: "30%",
            }}
          >
            see list
          </MDButton>
        </MDBox>
      )}
      <Dialog open={openAdd} onClose={handleCloseAdd}>
        <DialogTitle ml="34%">Thêm sinh viên</DialogTitle>
        <FormControl
          size="small"
          sx={{ width: "450px", mx: 4 }}
          // autoWidth
          style={{
            height: 40,
          }}
        >
          <InputLabel id="demo-simple-select-label">Sinh viên</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sinh viên"
            // value={dataUpdate.teacherId}
            onChange={(e) => {
              setDataAddStudent({
                ...dataAddStudent,
                student_id: e.target.value,
              });
            }}
            style={{ height: "100%" }}
          >
            {listStudent?.map((item) => (
              <MenuItem value={item?.id}>{item?.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <DialogActions>
          <Button onClick={handleCloseAdd}>Cancel</Button>
          <Button
            onClick={() => {
              handleAddStudentToCourse();
              handleCloseAdd();
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openSee} onClose={handleCloseSee} fullWidth maxWidth="lg">
        <DialogTitle ml="39%">Danh sách sinh viên</DialogTitle>
        <MDBox pt={1} pb={2} px={2}>
          <Item
            stt="STT"
            masv="Mã Sinh Viên"
            hovaten="Họ Và Tên"
            lop="Lớp"
            ngaysinh="Ngày Sinh"
            sdt="Số Điện Thoại"
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
              {listStudentByCourse?.map((item, index) => (
                <Item
                  stt={index + 1}
                  hovaten={item?.student.name}
                  lop={item.student.classRoom?.name}
                  ngaysinh={item.student.birthday?.split("T")[0]}
                  sdt={item?.student.numberPhone}
                  idStudent={item?.student.id}
                  idClass={item?.student.classRoom?.id}
                  hide={false}
                  setIsSave={setIsSave}
                  setNotification={setNotification}
                  fromCourse
                />
              ))}
            </MDBox>
          </MDBox>
        </MDBox>
        <DialogActions>
          <Button onClick={handleCloseSee}>Cancel</Button>
          {/* <Button
            onClick={() => {
              handleCloseSee();
            }}
          >
            Update
          </Button> */}
        </DialogActions>
      </Dialog>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle ml="43%">Update</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tên lớp học phần"
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
        </DialogActions>
      </Dialog>
    </MDBox>
  );
}

// Setting default values for the props of ItemClass
// ItemClass.defaultProps = {
//   noGutter: false,
// };

// // Typechecking props for the ItemClass
ItemCourse.propTypes = {
  stt: PropTypes.string.isRequired,
  monhoc: PropTypes.string.isRequired,
  khoahoc: PropTypes.string.isRequired,
  giaovien: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  // departments: PropTypes.arrayOf.isRequired,
  // idClass: PropTypes.number.isRequired,
  // idFaculty: PropTypes.number.isRequired,
  // nameFaculty: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired,
  setIsSave: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
  idCourse: PropTypes.number.isRequired,
  listTeacher: PropTypes.arrayOf.isRequired,
  idTeacher: PropTypes.number.isRequired,
  listStudent: PropTypes.arrayOf.isRequired,
};

export default ItemCourse;
