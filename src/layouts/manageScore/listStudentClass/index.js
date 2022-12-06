import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import authorsTableData from "layouts/manageScore/data/tableListstudent";
import * as React from "react";
import Icon from "@mui/material/Icon";
import { useMaterialUIController } from "context";
import MDButton from "components/MDButton";
import TextField from "@mui/material/TextField";

function ListStudentClass() {
  const { columns, rows } = authorsTableData();
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [edit, setEdit] = React.useState(false);
  const handleClick = () => {
    setEdit(!edit);
  };

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2} display="flex">
        <MDTypography variant="h6" fontWeight="medium" ml={2}>
          Danh sách sinh viên
        </MDTypography>
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
            <MDBox pl={3} display="flex" height="3.5rem" pt={2} borderBottom="0.2px solid #f0f2f5">
              <MDTypography variant="caption" color="text" fontWeight="medium" marginLeft="5px">
                1
              </MDTypography>
              <MDTypography variant="caption" color="text" fontWeight="medium" ml={9} width="120px">
                102190052
              </MDTypography>
              <MDTypography variant="caption" color="text" fontWeight="medium" ml={0} width="128px">
                Nguyen van a
              </MDTypography>
              <MDTypography variant="caption" color="text" fontWeight="medium" ml={0} width="120px">
                12/07/2002
              </MDTypography>
              <MDTypography variant="caption" color="text" fontWeight="medium" ml={0} width="150px">
                a@gmail.com
              </MDTypography>
              <MDTypography variant="caption" color="text" fontWeight="medium" ml={0} width="158px">
                0365886556
              </MDTypography>
              {!edit ? (
                <MDBox width="400px" mt={-1.3}>
                  <MDTypography
                    variant="caption"
                    color="text"
                    fontWeight="medium"
                    ml={1}
                    width="20px"
                  >
                    9
                  </MDTypography>
                  <MDTypography
                    variant="caption"
                    color="text"
                    fontWeight="medium"
                    ml={9}
                    width="20px"
                  >
                    9
                  </MDTypography>
                  <MDTypography
                    variant="caption"
                    color="text"
                    fontWeight="medium"
                    ml={9.5}
                    width="20px"
                  >
                    9
                  </MDTypography>
                  <MDTypography
                    variant="caption"
                    color="text"
                    fontWeight="medium"
                    ml={12}
                    width="20px"
                  >
                    9
                  </MDTypography>
                  <MDTypography
                    variant="caption"
                    color="text"
                    fontWeight="medium"
                    ml={10}
                    width="20px"
                  >
                    3.8
                  </MDTypography>
                </MDBox>
              ) : (
                <MDBox width="400px" mt={-1.7}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="bt"
                    type="text"
                    variant="standard"
                    sx={{ width: "30px", ml: -0.5, textAlign: "center" }}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="gk"
                    type="text"
                    variant="standard"
                    sx={{ width: "30px", ml: 6.7 }}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="ck"
                    type="text"
                    variant="standard"
                    sx={{ width: "30px", ml: 6.5 }}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="t10"
                    type="text"
                    variant="standard"
                    sx={{ width: "30px", ml: 8 }}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="t4"
                    type="text"
                    variant="standard"
                    sx={{ width: "30px", ml: 8.8 }}
                  />
                </MDBox>
              )}
              <MDBox display="flex" alignItems="center" mt={-2.5}>
                {!edit ? (
                  <MDButton
                    variant="text"
                    color={darkMode ? "white" : "dark"}
                    sx={{ width: "100px", px: 0 }}
                    onClick={handleClick}
                  >
                    <Icon>edit</Icon>&nbsp;edit
                  </MDButton>
                ) : (
                  <MDButton
                    variant="text"
                    color={darkMode ? "white" : "dark"}
                    sx={{ width: "100px", px: 0 }}
                    onClick={handleClick}
                  >
                    <Icon>save</Icon>&nbsp;save
                  </MDButton>
                )}
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ListStudentClass;
