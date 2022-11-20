// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/admin/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Quản lý môn học",
    key: "tables",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/monhoc",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Quản lý lớp học",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/lophoc",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Quản lý giáo viên",
    key: "notifications",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/giaovien",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Quản lý học sinh",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/admin/hocsinh",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
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
