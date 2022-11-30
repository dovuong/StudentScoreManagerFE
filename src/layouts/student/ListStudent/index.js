import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/student/data/authorsTableData";
import Item from "layouts/student/itemStudent";
import MDButton from "components/MDButton";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { PropTypes } from "prop-types";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { createStudent } from "Apis/student.api";

function ListStudent({ listStudent, listClass, setIdClassChosen }) {
  const { columns, rows } = authorsTableData();
  const [open, setOpen] = React.useState(false);
  const [dataAdd, setDataAdd] = React.useState({
    birthday: "",
    idClassroom: 0,
    name: "",
    numberPhone: "",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateStudent = () => {
    // console.log(dataAdd);
    createStudent(dataAdd);
  };

  return (
    <Card id="delete-account">
      <MDBox
        pt={3}
        px={2}
        display="flex"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          Danh sách sinh viên
        </MDTypography>
        <FormControl
          size="small"
          sx={{ m: 1, minWidth: 100 }}
          style={{
            height: 40,
            marginLeft: 50,
          }}
        >
          <InputLabel id="demo-simple-select-label">Lop</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Lop"
            defaultValue={0}
            onChange={(e) => {
              setIdClassChosen(e.target.value);
            }}
            style={{ height: "100%" }}
          >
            <MenuItem value={0}>Tất Cả</MenuItem>
            {listClass.map((item, index) => {
              if (index === listClass.length - 1) {
                return <MenuItem value={item.id}>{item.name}</MenuItem>;
              }
              return <MenuItem value={item.id}>{item.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <MDBox mt={1} mb={2} ml="50%" width="120px">
          <MDButton to="/admin/dashboard" variant="gradient" color="info" onClick={handleClickOpen}>
            + create
          </MDButton>
        </MDBox>
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
            {listStudent.map((item, index) => (
              <Item
                stt={index + 1}
                hovaten={item.name}
                lop={item.classRoom.name}
                ngaysinh={item.birthday.split("T")[0]}
                // email="a@gmail.com"
                sdt={item.numberPhone}
                idStudent={item.id}
                idClass={item.classRoom.id}
              />
            ))}
          </MDBox>
        </MDBox>
      </MDBox>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle ml="43%">Create</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Họ và tên"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            onChange={(e) => {
              setDataAdd({
                ...dataAdd,
                name: e.target.value,
              });
            }}
          />
          <FormControl
            size="small"
            sx={{ width: "450px", mx: 4 }}
            style={{
              height: 40,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            <InputLabel id="demo-simple-select-label">Lớp</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Lop"
              defaultValue={0}
              onChange={(e) => {
                setDataAdd({
                  ...dataAdd,
                  idClassroom: e.target.value,
                });
              }}
              style={{ height: "100%" }}
            >
              {listClass.map((item) => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Ngày sinh"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            onChange={(e) => {
              setDataAdd({
                ...dataAdd,
                birthday: e.target.value,
              });
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Số điện thoại"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
            onChange={(e) => {
              setDataAdd({
                ...dataAdd,
                numberPhone: e.target.value,
              });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleCreateStudent();
              handleClose();
            }}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

ListStudent.propTypes = {
  listStudent: PropTypes.arrayOf.isRequired,
  listClass: PropTypes.arrayOf.isRequired,
  setIdClassChosen: PropTypes.func.isRequired,
};
export default ListStudent;
