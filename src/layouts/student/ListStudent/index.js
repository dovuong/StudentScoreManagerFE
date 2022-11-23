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

function ListStudent() {
  const { columns, rows } = authorsTableData();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2} display="flex">
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          Danh sách sinh viên
        </MDTypography>
        <MDBox mt={1} mb={2} ml="75%" width="120px">
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
            <Item
              stt="1"
              hovaten="Nguyen Van A"
              lop="19TCLC_DT2"
              ngaysinh="12/05/2001"
              email="a@gmail.com"
              sdt="0356266554"
            />
            <Item
              stt="2"
              hovaten="Nguyen Van B"
              lop="19TCLC_DT2"
              ngaysinh="12/05/2001"
              email="a@gmail.com"
              sdt="0356266554"
            />
            <Item
              stt="3"
              hovaten="Nguyen Van C"
              lop="19TCLC_DT2"
              ngaysinh="12/05/2001"
              email="a@gmail.com"
              sdt="0356266554"
            />
            <Item
              stt="4"
              hovaten="Nguyen Van D"
              lop="19SH2"
              ngaysinh="12/05/2001"
              email="a@gmail.com"
              sdt="0356266554"
            />
            <Item
              stt="5"
              hovaten="Nguyen Van E"
              lop="22T2"
              ngaysinh="12/05/2001"
              email="a@gmail.com"
              sdt="0356266554"
            />
            <Item
              stt="6"
              hovaten="Nguyen Van R"
              lop="21T1"
              ngaysinh="12/05/2001"
              email="a@gmail.com"
              sdt="0356266554"
            />
            <Item
              stt="7"
              hovaten="Nguyen Van S"
              lop="19TCLC_DT2"
              ngaysinh="12/05/2001"
              email="a@gmail.com"
              sdt="0356266554"
            />
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
            label="Lớp"
            type="email"
            fullWidth
            variant="standard"
            sx={{ width: "450px", mx: 4 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Ngày sinh"
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

export default ListStudent;
