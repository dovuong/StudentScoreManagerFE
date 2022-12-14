export default function data() {
  return {
    columns: [
      // { Header: "stt", width: "5%", align: "left" },
      // { Header: "họ và tên", width: "13%", align: "left" },
      // { Header: "chuyên môn", width: "13%", align: "left" },
      // { Header: "chủ nhiệm lớp", width: "13%", align: "left" },
      // { Header: "email", width: "13%", align: "left" },
      // { Header: "birthday", width: "13%", align: "left" },
      // { Header: "Số điện thoại", align: "left" },
    ],
    columns1: [
      {
        name: "name",
        label: "Name",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "company",
        label: "Company",
        options: {
          filter: true,
          sort: false,
          align: "center",
        },
      },
      {
        name: "city",
        label: "City",
        options: {
          filter: true,
          sort: false,
          align: "center",
        },
      },
      {
        name: "state",
        label: "State",
        options: {
          filter: true,
          sort: false,
          align: "center",
        },
      },
    ],
    rows: [],
  };
}
