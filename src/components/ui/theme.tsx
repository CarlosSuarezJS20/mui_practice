import { createTheme } from "@mui/material/styles";

import "@mui/material/styles";

enum themePalette {
  ARCBLUE = "#0B72B9",
  ARCORANGE = "#FFBA60",
}

enum typographyFonts {
  H3 = 300,
}

// adding a field

declare module "@mui/material/styles" {
  interface TypographyVariants {
    tab: React.CSSProperties;
    estimateBtn: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    tab?: React.CSSProperties;
    estimateBtn?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    tab: true;
    estimateBtn: true;
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
  },
  typography: {
    h3: {
      fontWeight: typographyFonts.H3,
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
  },
});

export default theme;
