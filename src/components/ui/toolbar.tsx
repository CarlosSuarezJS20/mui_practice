import React, { useEffect } from "react";

import ToolBar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import HeaderTabs from "./headerTabs";
import MainDrawerMenu from "./mainDrawerMenu";

import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "./theme";

// creative components
import logo from "../../assets/logo.svg";

// Styling
const useStyles = makeStyles(() => ({
  logo: {
    height: "6.5em",
    [theme.breakpoints.down("md")]: {
      height: "4.5em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "4em",
    },
  },

  logoContainer: {
    "&.MuiButton-root": {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
}));

// Styling the tab, need to create a

const ToolBarCom: React.FC = () => {
  const [value, setValue] = React.useState(0);
  // Styling hooks
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();

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
  }, [value]);

  // handles setValue in th tabs
  const setValueHandler = (position: number) => {
    setValue(position);
  };

  return (
    <ToolBar disableGutters>
      {/* <Typography variant='h3'>Arc Development</Typography> */}
      <Button
        component={Link}
        to='/'
        disableRipple
        onClick={() => {
          setValue(0);
        }}
        className={classes.logoContainer}>
        <img src={logo} alt='company logo' className={classes.logo} />
      </Button>
      {matches ? (
        <MainDrawerMenu
          selectedValueHandler={setValueHandler}
          selectedPosition={value}
        />
      ) : (
        <HeaderTabs setValueProp={setValueHandler} position={value} />
      )}
    </ToolBar>
  );
};

export default ToolBarCom;
