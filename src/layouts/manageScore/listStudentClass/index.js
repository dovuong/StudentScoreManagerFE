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
import { PropTypes } from "prop-types";
import { updatePoint } from "Apis/manageScore.api";

function ListStudentClass({ listPoint, setIsSave, setNotification }) {
  const { columns, rows } = authorsTableData();
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [edit, setEdit] = React.useState("");
  const handleClick = (id) => {
    if (edit === "") {
      setEdit(id);
    }
    if (edit === id) {
      setEdit("");
    }
  };

  const [dataUpdate, setDataUpdate] = React.useState({
    course_id: 0,
    point: "",
    student_id: 0,
  });

  const handleUpdatePoint = () => {
    updatePoint(dataUpdate, setIsSave, setNotification);
  };

  return (
    <Card id="delete-account" sx={{ mb: 4 }}>
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
            {listPoint?.map((item, index) => (
              <MDBox
                pl={3}
                display="flex"
                height="3.5rem"
                pt={2}
                borderBottom="0.2px solid #f0f2f5"
              >
                <MDTypography variant="caption" color="text" fontWeight="medium" margineft="5px">
                  {index + 1}
                </MDTypography>
                <MDTypography
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                  ml={10}
                  width="180px"
                >
                  10219005{item.student.id}
                </MDTypography>
                <MDTypography
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                  ml={0}
                  width="190px"
                >
                  {item.student.name}
                </MDTypography>
                <MDTypography
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                  ml={0}
                  width="190px"
                >
                  {item.student.birthday.slice(0, 10)}
                </MDTypography>
                <MDTypography
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                  ml={0}
                  width="160px"
                >
                  {item.student.numberPhone}
                </MDTypography>
                <MDBox width="250px" mt={-1.3}>
                  {!(edit === item.id) ? (
                    <MDTypography
                      variant="caption"
                      color="text"
                      fontWeight="medium"
                      ml={12}
                      sx={{ width: "20px" }}
                    >
                      {item.point}
                    </MDTypography>
                  ) : (
                    <TextField
                      autoFocus
                      margin="dense"
                      id="t4"
                      type="number"
                      inputProps={{ min: 0, max: 10 }}
                      variant="standard"
                      sx={{ width: "30px", ml: 11 }}
                      value={dataUpdate.point}
                      onChange={(e) => {
                        let value = parseInt(e.target.value, 10);

                        if (value > 10) value = 10;
                        if (value < 0) value = 0;
                        setDataUpdate({
                          ...dataUpdate,
                          point: value,
                        });
                      }}
                    />
                  )}
                  <MDTypography
                    variant="caption"
                    color="text"
                    fontWeight="medium"
                    ml={14}
                    width="20px"
                  >
                    {Math.round((item.point / 10) * 4 * 10) / 10}
                  </MDTypography>
                </MDBox>
                <MDBox display="flex" alignItems="center" mt={-2.5}>
                  {!(edit === item.id) ? (
                    <MDButton
                      variant="text"
                      color={darkMode ? "white" : "dark"}
                      sx={{ width: "160px", px: 0 }}
                      onClick={() => {
                        handleClick(item.id);
                        setDataUpdate({
                          ...dataUpdate,
                          course_id: item.course.id,
                          point: item.point,
                          student_id: item.student.id,
                        });
                      }}
                    >
                      <Icon>edit</Icon>&nbsp;edit
                    </MDButton>
                  ) : (
                    <MDButton
                      variant="text"
                      color={darkMode ? "white" : "dark"}
                      sx={{ width: "160px", px: 0 }}
                      onClick={() => {
                        handleClick(item.id);
                        handleUpdatePoint();
                      }}
                    >
                      <Icon>save</Icon>&nbsp;save
                    </MDButton>
                  )}
                </MDBox>
              </MDBox>
            ))}
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

ListStudentClass.propTypes = {
  listPoint: PropTypes.arrayOf.isRequired,
  setIsSave: PropTypes.arrayOf.isRequired,
  setNotification: PropTypes.arrayOf.isRequired,
};
export default ListStudentClass;
