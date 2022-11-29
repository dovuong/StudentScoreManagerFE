import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorage, STORAGE } from "Utils/storage";

function PrivateRoutes() {
  const isAuth = getLocalStorage(STORAGE.USER_TOKEN);

  return isAuth ? <Outlet /> : <Navigate to="/authentication/sign-in" />;
}

export default PrivateRoutes;
