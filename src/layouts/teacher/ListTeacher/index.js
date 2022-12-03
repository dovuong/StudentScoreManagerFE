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

function ListTeacher({ listTeacher }) {
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
        <Item
          stt="stt"
          hovaten="họ và tên"
          chuyenmon="chuyên môn"
          chunhiemlop="chủ nhiệm lớp"
          email="email"
          sdt="Số điện thoại"
          hide
        />
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
                chuyenmon="Mạng máy tính"
                chunhiemlop="19TCLC_DT2"
                email="a@gmail.comAAA"
                sdt={item.numberPhone}
                hide={false}
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
          />
          <TextField
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

ListTeacher.propTypes = {
  listTeacher: PropTypes.arrayOf.isRequired,
};

export default ListTeacher;
