import { createTheme } from "@mui/material/styles";

import "@mui/material/styles";
import "@mui/material/styles/createPalette";

enum themePalette {
  ARCBLUE = "#0B72B9",
  ARCORANGE = "#ff9100",
}

enum typographyFonts {
  H3 = 300,
}

// adding a field

declare module "@mui/material/styles" {
  interface TypographyVariants {
    tab: React.CSSProperties;
    estimateBtn: React.CSSProperties;
    titles: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    tab?: React.CSSProperties;
    estimateBtn?: React.CSSProperties;
    titles?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    tab: true;
    estimateBtn: true;
    titles?: React.CSSProperties;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    blue: string;
    orange: string;
  }
}

// create a brand new part of the theme

// declare module "@mui/material/styles" {
//   interface Theme {
//     // status: {
//     //   danger: string;
//     // };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     // status?: {
//     //   danger?: string;
//     // };
//   }
// }

const theme = createTheme({
  // status:{
  //   danger: themePalette.ARCORANGE,
  // },
  palette: {
    primary: {
      main: themePalette.ARCBLUE,
    },
    secondary: {
      main: themePalette.ARCORANGE,
    },
    common: {
      blue: themePalette.ARCBLUE,
      orange: themePalette.ARCORANGE,
    },
  },
  typography: {
    h3: {
      fontWeight: typographyFonts.H3,
    },
    h2: {
      color: themePalette.ARCBLUE,
      fontFamily: "Raleway",
      fontSize: "2em",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    tab: {
      fontFamily: "Raleway",
      color: "white",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
    },
    estimateBtn: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    titles: {
      color: themePalette.ARCBLUE,
      fontWeight: "bold",
    },
  },
});

export default theme;
