/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Material Dashboard 2 React routes
import routes from "routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import * as Sentry from "@sentry/react";
// import PrivateRoutes from "layouts/PrivateRoutes/PrivateRoutes";
// import { currentUser } from "Apis/auth.api";
import { STORAGE } from "Utils/storage";

export default function App() {
  try {
    // const a = false;
    // if (!a) {
    //   throw new Error("This is a test on repo fe");
    // }

    const [controller, dispatch] = useMaterialUIController();
    const {
      miniSidenav,
      direction,
      layout,
      openConfigurator,
      sidenavColor,
      transparentSidenav,
      whiteSidenav,
      darkMode,
    } = controller;
    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const [rtlCache, setRtlCache] = useState(null);
    const { pathname } = useLocation();

    // Cache for the rtl
    useMemo(() => {
      const cacheRtl = createCache({
        key: "rtl",
        stylisPlugins: [rtlPlugin],
      });

      setRtlCache(cacheRtl);
    }, []);

    // Open sidenav when mouse enter on mini sidenav
    const handleOnMouseEnter = () => {
      if (miniSidenav && !onMouseEnter) {
        setMiniSidenav(dispatch, false);
        setOnMouseEnter(true);
      }
    };

    // Close sidenav when mouse leave mini sidenav
    const handleOnMouseLeave = () => {
      if (onMouseEnter) {
        setMiniSidenav(dispatch, true);
        setOnMouseEnter(false);
      }
    };

    // Change the openConfigurator state
    const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

    // Setting the dir attribute for the body element
    useEffect(() => {
      document.body.setAttribute("dir", direction);
    }, [direction]);

    // Setting page scroll to 0 when changing the route
    useEffect(() => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }, [pathname]);

    const getRoutesPublic = (allRoutes) =>
      allRoutes.map((route) => {
        if (!route.permission) {
          return <Route exact path={route.route} element={route.component} key={route.key} />;
        }

        return null;
      });
    // useLayoutEffect(() => {
    //   currentUser();
    // }, []);
    // useEffect(() => {
    //   console.log(
    //     new Date().valueOf() - Date.parse(JSON.parse(localStorage.getItem("EXPIRE")) < 86400000)
    //   );
    // }, []);
    const getRoutes = (allRoutes) =>
      allRoutes.map((route) => {
        // if (route.collapse) {
        //   return getRoutes(route.collapse);
        // }
        if (localStorage.getItem("POSITION") === "1") {
          if (route.route && route.permission && route.role === "teacher") {
            return <Route exact path={route.route} element={route.component} key={route.key} />;
          }
          return null;
        }
        if (route.route && route.permission && route.role === "admin") {
          return <Route exact path={route.route} element={route.component} key={route.key} />;
        }
        return null;

        // return null;
      });

    const elemDefault = () => {
      let res = null;
      if (
        !localStorage.getItem(STORAGE.USER_TOKEN) ||
        new Date().valueOf() - Date.parse(JSON.parse(localStorage.getItem("EXPIRE")) > 86400000)
      ) {
        res = <Route path="*" element={<Navigate to="/authentication/sign-in" />} />;
      } else if (localStorage.getItem("POSITION") === "0") {
        res = <Route path="*" element={<Navigate to="/admin/dashboard" />} />;
      } else if (localStorage.getItem("POSITION") === "1") {
        res = <Route path="*" element={<Navigate to="/manageScore" />} />;
      }
      return res;
    };

    const configsButton = (
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="3.25rem"
        height="3.25rem"
        bgColor="white"
        shadow="sm"
        borderRadius="50%"
        position="fixed"
        right="2rem"
        bottom="2rem"
        zIndex={99}
        color="dark"
        sx={{ cursor: "pointer" }}
        onClick={handleConfiguratorOpen}
      >
        <Icon fontSize="small" color="inherit">
          settings
        </Icon>
      </MDBox>
    );

    return direction === "rtl" ? (
      <CacheProvider value={rtlCache}>
        <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
          <CssBaseline />
          {layout === "dashboard" && (
            <>
              <Sidenav
                color={sidenavColor}
                brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
                brandName="Trang quản trị 12"
                routes={routes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              />
              <Configurator />
              {configsButton}
            </>
          )}
          {layout === "vr" && <Configurator />}
          <Routes>
            {getRoutes(routes)}
            {localStorage.getItem("POSITION") === "0" ? (
              <Route path="*" element={<Navigate to="/admin/dashboard" />} />
            ) : (
              <Route path="*" element={<Navigate to="/manageScore" />} />
            )}
            ;
          </Routes>
        </ThemeProvider>
      </CacheProvider>
    ) : (
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="Trang quản trị"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {!localStorage.getItem(STORAGE.USER_TOKEN) ||
          new Date().valueOf() - Date.parse(JSON.parse(localStorage.getItem("EXPIRE")) > 86400000)
            ? getRoutesPublic(routes)
            : null}

          {localStorage.getItem(STORAGE.USER_TOKEN) &&
          new Date().valueOf() - Date.parse(JSON.parse(localStorage.getItem("EXPIRE"))) < 86400000
            ? getRoutes(routes)
            : null}
          {/* {getRoutes(routes)} */}
          {elemDefault()}
        </Routes>
      </ThemeProvider>
    );
  } catch (err) {
    Sentry.captureException(err);
  }
}
