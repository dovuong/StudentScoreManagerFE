export default function data() {
  return {
    columns: [
      { Header: "stt", accessor: "stt", width: "10%", align: "left" },
      { Header: "Lớp", accessor: "monhoc", width: "30%", align: "left" },
      { Header: "Khoa", accessor: "khoa", align: "left" },
    ],
    rows: [],
  };
}
