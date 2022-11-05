import React from "react";
import Header from "./ui/header";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./ui/theme";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path='/' element={<div>home</div>} />
          <Route path='/services' element={<div>services</div>} />
          <Route path='/customsoftware' element={<div>customsoftware</div>} />
          <Route path='/mobileapps' element={<div>mobileapps</div>} />
          <Route path='/websites' element={<div>websites</div>} />
          <Route path='/revolution' element={<div>revolution</div>} />
          <Route path='/about' element={<div>about</div>} />
          <Route path='/contact' element={<div>contact</div>} />
          <Route path='/estimate' element={<div>estimate</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
