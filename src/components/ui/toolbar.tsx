import React from "react";

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

interface ToolBarComProps {
  routeValueHandler: {
    routeValueHandler: (n: number) => void;
    routeValue: number;
  };
  headerModalToolTipSelectedTabHandler: {
    headerModalToolTipSelectedTabHandler: (n: number) => void;
    toolTipSelectedTabeValue: number;
  };
}

const ToolBarCom: React.FC<ToolBarComProps> = ({
  routeValueHandler,
  headerModalToolTipSelectedTabHandler,
}) => {
  // Styling hooks
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();

  return (
    <ToolBar disableGutters>
      {/* <Typography variant='h3'>Arc Development</Typography> */}
      <Button
        component={Link}
        to='/'
        disableRipple
        onClick={() => {
          routeValueHandler.routeValueHandler(0);
        }}
        className={classes.logoContainer}>
        <img src={logo} alt='company logo' className={classes.logo} />
      </Button>
      {matches ? (
        <MainDrawerMenu routeValueHandler={routeValueHandler} />
      ) : (
        <HeaderTabs
          headerModalToolTipSelectedTabHandler={
            headerModalToolTipSelectedTabHandler
          }
          routeValueHandler={routeValueHandler}
        />
      )}
    </ToolBar>
  );
};

export default ToolBarCom;
