import React, { useEffect, lazy, Suspense } from "react";
import Header from "./ui/header";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./ui/theme";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./ui/footer";
import HomePage from "./ui/homePage";

const ServicesPage = lazy(() => import("./ui/servicesPage"));
const CustomDevelopmentPage = lazy(() => import("./ui/customeSoftwarePage"));
const IosAndroidAppDev = lazy(() => import("./ui/iosAndroidAppDev"));
const WebsitesPage = lazy(() => import("./ui/websitesPage"));
const TheRevolutionPage = lazy(() => import("./ui/theRevolution"));

const App: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value != 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value != 1) {
          setValue(1);
        }
        break;
      case "/revolution":
        if (value != 2) {
          setValue(2);
        }
        break;
      case "/about":
        if (value != 3) {
          setValue(3);
        }
        break;
      case "/contact":
        if (value != 4) {
          setValue(4);
        }
        break;
      case "/estimate":
        if (value != 5) {
          setValue(5);
        }
        break;
      case "/customsoftware":
        if (value != 1) {
          setValue(1);
        }
        break;
      case "/mobileapps":
        if (value != 1) {
          setValue(1);
        }
        break;
      case "/websites":
        if (value != 1) {
          setValue(1);
        }
        break;
      default:
        break;
    }
  }, [value, setSelectedIndex]);

  const routeValueHandler = (n: number) => {
    setValue(n);
  };

  const headerModalToolTipSelectedTabHandler = (n: number | undefined) => {
    setSelectedIndex(n!);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Header
          routeValueHandler={{
            routeValueHandler: routeValueHandler,
            routeValue: value,
          }}
          headerModalToolTipSelectedTabHandler={{
            headerModalToolTipSelectedTabHandler:
              headerModalToolTipSelectedTabHandler,
            toolTipSelectedTabeValue: selectedIndex,
          }}
        />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route
              path='/'
              element={
                <HomePage
                  routerValueHandler={routeValueHandler}
                  toolTipValueHandler={headerModalToolTipSelectedTabHandler}
                />
              }
            />
            <Route
              path='/services'
              element={
                <ServicesPage
                  routerValueHandler={routeValueHandler}
                  toolTipValueHandler={headerModalToolTipSelectedTabHandler}
                />
              }
            />
            <Route
              path='/customsoftware'
              element={
                <CustomDevelopmentPage
                  toolTipValueHandler={headerModalToolTipSelectedTabHandler}
                  toolTipValue={selectedIndex}
                />
              }
            />
            <Route
              path='/mobileapps'
              element={
                <IosAndroidAppDev
                  toolTipValueHandler={headerModalToolTipSelectedTabHandler}
                  toolTipValue={selectedIndex}
                />
              }
            />
            <Route
              path='/websites'
              element={
                <WebsitesPage
                  toolTipValueHandler={headerModalToolTipSelectedTabHandler}
                  toolTipValue={selectedIndex}
                />
              }
            />
            <Route
              path='/revolution'
              element={
                <TheRevolutionPage routerValueHandler={routeValueHandler} />
              }
            />
            <Route
              path='/about'
              element={<div style={{ height: "2000px" }}>about</div>}
            />
            <Route
              path='/contact'
              element={<div style={{ height: "2000px" }}>contact</div>}
            />
            <Route
              path='/estimate'
              element={<div style={{ height: "2000px" }}>estimate</div>}
            />
          </Routes>
        </Suspense>
        <Footer
          routeValueHandler={{
            routeValueHandler: routeValueHandler,
            routeValue: value,
          }}
          headerModalToolTipSelectedTabHandler={{
            headerModalToolTipSelectedTabHandler:
              headerModalToolTipSelectedTabHandler,
            toolTipSelectedTabeValue: selectedIndex,
          }}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
