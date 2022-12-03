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

// import React, { Fragment } from "react";
// import { withStyles } from "@material-ui/core/styles";
// import { AppBar, Toolbar, Typography, IconButton, Modal } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
// import MUIDataTable from "mui-datatables";

// const styles = () => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   title: {
//     flexGrow: 1,
//     display: "block",
//     color: "#fff",
//   },
// });

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.open = false;
//     this.state = { open: false, edit: false };
//     this.array = [];
//     this.currentUser = [];
//     this.editing = false;
//   }

//   loadContentFromServer() {
//     const url = "https://jsonplaceholder.typicode.com/users";

//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => {
//         this.setState({ results: json });
//       });
//   }

//   componentDidMount() {
//     this.loadContentFromServer();
//   }

//   render() {
//     const classes = styles();
//     const array = this.array;
//     var data = [];
//     var open = false;
//     var editing = false;
//     var currentUser = [];

//     const handleOpen = () => {
//       this.setState({ open: true });
//     };

//     const handleClose = () => {
//       this.setState({ open: false });
//     };

//     open = this.state.open;

//     if (!!this.state.results) {
//       this.array = this.state.results.map((result) => [
//         result.id,
//         result.name,
//         result.username,
//         result.email,
//         "",
//       ]);
//     }

//     if (!!this.state.array) {
//       data = this.state.array;
//     } else {
//       data = this.array;
//     }

//     // CRUD operations
//     const addUser = (user) => {
//       user.id = data.length + 1;
//       const addUser = [user.id, user.name, user.username, user.email, ""];
//       this.setState({ array: data.concat([addUser]) });
//       handleClose();
//     };

//     const addButton = () => {
//       this.setState({ edit: false });
//       handleOpen();
//     };

//     const deleteUser = (id) => {
//       this.setState({ edit: false });
//       this.setState({ array: data.filter((user) => user.id !== id) });
//     };

//     const updateUser = (id, updatedUser) => {
//       this.setState({ edit: false });
//       const editUser = [
//         updatedUser.id,
//         updatedUser.name,
//         updatedUser.username,
//         updatedUser.email,
//         "",
//       ];
//       this.setState({ array: data.map((user) => (user[0] === id ? editUser : user)) });
//       handleClose();
//     };

//     const editButton = (user) => {
//       this.setState({ edit: true });
//       this.setState({
//         arrayEdit: { id: user[0], name: user[1], username: user[2], email: user[3], acao: "" },
//       });
//       handleOpen();
//     };

//     editing = this.state.edit;
//     currentUser = this.state.arrayEdit;

//     const columns = [
//       { name: "ID", options: { filter: false } },
//       { name: "Nome", options: { filter: false } },
//       { name: "Usuário", options: { filter: false } },
//       { name: "E-mail", options: { filter: false } },
//       {
//         name: "Ações",
//         options: {
//           filter: true,
//           customBodyRender: (value, tableMeta, updateValue) => {
//             return (
//               <button
//                 onClick={() => {
//                   editButton(tableMeta.rowData);
//                 }}
//                 className="button muted-button"
//               >
//                 Editar
//               </button>
//             );
//           },
//         },
//       },
//     ];

//     const options = {
//       filter: true,
//       filterType: "dropdown",
//       responsive: "",
//     };

//     return (
//       <div className={classes.root}>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton edge="start" className="" color="inherit" aria-label="menu">
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" className="">
//               ReactJS App
//             </Typography>
//           </Toolbar>
//         </AppBar>

//         <button
//           type="button"
//           className="button"
//           onClick={() => {
//             addButton();
//           }}
//         >
//           Adicionar
//         </button>

//         <MUIDataTable title={"Lista de Usuários"} data={data} columns={columns} options={options} />

//         <Modal
//           aria-labelledby="simple-modal-title"
//           aria-describedby="simple-modal-description"
//           open={open}
//           onClose={handleClose}
//         >
//           <div className="modal">
//             {editing ? (
//               <Fragment>
//                 <h2 id="simple-modal-title">Editar Usuário</h2>
//               </Fragment>
//             ) : (
//               <Fragment>
//                 <h2 id="simple-modal-title">Adicionar Usuário</h2>
//               </Fragment>
//             )}
//           </div>
//         </Modal>
//       </div>
//     );
//   }
// }
// export default withStyles(styles)(App);
