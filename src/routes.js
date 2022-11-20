// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Subjects from "layouts/subjects";
import Class from "layouts/classed";
import Teacher from "layouts/teacher";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "admin/dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/admin/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Quản lý môn học",
    key: "admin/subjects",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/subjects",
    component: <Subjects />,
  },
  {
    type: "collapse",
    name: "Quản lý lớp học",
    key: "admin/class",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/class",
    component: <Class />,
  },
  {
    type: "collapse",
    name: "Quản lý giáo viên",
    key: "admin/teacher",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/teacher",
    component: <Teacher />,
  },
  {
    type: "collapse",
    name: "Quản lý học sinh",
    key: "admin/student",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/student",
    component: <Teacher />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "admin/profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/admin/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Logout",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Logout",
    key: "sign-up",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
