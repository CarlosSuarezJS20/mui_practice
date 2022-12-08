import React, { useEffect } from "react";
import Header from "./ui/header";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./ui/theme";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./ui/footer";

import HomePage from "./ui/homePage";

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
            element={<div style={{ height: "2000px" }}>services</div>}
          />
          <Route
            path='/customsoftware'
            element={<div style={{ height: "2000px" }}>custom software</div>}
          />
          <Route
            path='/mobileapps'
            element={<div style={{ height: "2000px" }}>mobile apps</div>}
          />
          <Route
            path='/websites'
            element={<div style={{ height: "2000px" }}>websites</div>}
          />
          <Route
            path='/revolution'
            element={<div style={{ height: "2000px" }}>revolution</div>}
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
