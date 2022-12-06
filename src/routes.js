// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Subjects from "layouts/subjects";
import Department from "layouts/department";
import Class from "layouts/classed";
import Teacher from "layouts/teacher";
import Student from "layouts/student";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import ManageScore from "layouts/manageScore";

// @mui icons
import Icon from "@mui/material/Icon";
import Course from "layouts/Course";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "admin/dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/admin/dashboard",
    component: <Dashboard />,
    role: "admin",
    permission: "login",
  },
  {
    type: "collapse",
    name: "Quản lý khoa",
    key: "admin/department",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/department",
    component: <Department />,
    role: "admin",
    permission: "login",
  },
  {
    type: "collapse",
    name: "Quản lý lớp học",
    key: "admin/class",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/class",
    component: <Class />,
    role: "admin",
    permission: "login",
  },
  {
    type: "collapse",
    name: "Quản lý giáo viên",
    key: "admin/teacher",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/teacher",
    component: <Teacher />,
    role: "admin",
    permission: "login",
  },
  {
    type: "collapse",
    name: "Quản lý sinh viên",
    key: "admin/student",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/student",
    component: <Student />,
    role: "admin",
    permission: "login",
  },
  {
    type: "collapse",
    name: "Quản lý môn học",
    key: "admin/subjects",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/subjects",
    component: <Subjects />,
    role: "admin",
    permission: "login",
  },
  {
    type: "collapse",
    name: "Quản Lý Khóa học",
    key: "admin/course",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/course",
    component: <Course />,
    role: "admin",
    permission: "login",
  },
  {
    key: "sign-in",
    type: "collapse",
    name: "Logout",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
    permission: "",
  },
  {
    type: "collapse",
    name: "Quản lý điểm",
    key: "manageScore",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/manageScore",
    component: <ManageScore />,
    role: "teacher",
    permission: "login",
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
    role: "teacher",
    permission: "login",
  },
  {
    type: "collapse",
    name: "Logout",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
    permission: "",
  },
  {
    type: "collapse",
    name: "Logout",
    key: "sign-up",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
    permission: "",
  },
];

export default routes;
