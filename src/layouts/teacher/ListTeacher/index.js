import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/teacher/data/authorsTableData";
import Item from "layouts/teacher/itemTeacher";
import MDButton from "components/MDButton";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import MUIDataTable from "mui-datatables";
import { PropTypes } from "prop-types";
import { createTeacher } from "Apis/teacher.api";

function ListTeacher({ listTeacher, setIsSave }) {
  const { columns, rows } = authorsTableData();
  // const { columns } = authorsTableData();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const data = [
  //   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  //   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  //   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  //   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  //   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  //   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  //   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  //   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  //   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  //   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  //   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  //   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  //   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  //   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  //   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  //   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  //   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  //   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  //   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  //   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  //   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  //   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  //   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  //   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  // ];

  // const options = {
  //   filterType: "checkbox",
  // };
  const [data, setData] = React.useState({
    birthday: "",
    name: "",
    numberPhone: "",
  });
  const handleCreateInforTeacher = () => {
    createTeacher(data, setIsSave);
  };
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2} display="flex" justifyContent="space-between">
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          Danh sách giáo viên
        </MDTypography>
        <MDBox mt={1} mb={2} width="120px">
          <MDButton to="/admin/dashboard" variant="gradient" color="info" onClick={handleClickOpen}>
            + create
          </MDButton>
        </MDBox>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <Item stt="STT" hovaten="Họ và tên" ngaysinh="Ngày sinh" sdt="Số điện thoại" hide />
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {/* <div style={{ flexGrow: 1 }}>
            <MUIDataTable
              title="Danh sách giáo viên"
              data={data}
              columns={columns1}
              options={options}
              fixedHeader
              fixedSelectColumn
              style={{
                width: "100%",
              }}
              sx={{ display: "table-header-group" }}
            />
          </div> */}
          <DataTable
            table={{ columns, rows }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />

          <MDBox mt="-40px">
            {listTeacher.map((item, index) => (
              <Item
                stt={index + 1}
                hovaten={item.name}
                ngaysinh={item.birthday}
                sdt={item.numberPhone}
                setIsSave={setIsSave}
                hide={false}
                idTeacher={item.id}
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
              setData({
                ...data,
                name: e.target.value,
              });
            }}
          />
          <TextField
            id="date"
            label="Ngày sinh"
            type="date"
            // defaultValue="2022-12-02"
            sx={{ width: "450px", mx: 4, mt: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setData({
                ...data,
                birthday: e.target.value,
              });
            }}
          />
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Chuyên môn"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Lớp chủ nhiệm"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
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
          /> */}
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
              setData({
                ...data,
                numberPhone: e.target.value,
              });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleCreateInforTeacher();
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

ListTeacher.propTypes = {
  listTeacher: PropTypes.arrayOf.isRequired,
  setIsSave: PropTypes.bool.isRequired,
};

export default ListTeacher;
