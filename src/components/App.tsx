import React from "react";
import Header from "./ui/header";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./ui/theme";
import { CssBaseline } from "@mui/material";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      Hello
    </ThemeProvider>
  );
};

export default App;
