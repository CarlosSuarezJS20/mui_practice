import React from "react";
import AppBar from "@mui/material/AppBar";
import ToolBarCom from "./toolbar";
import ElevationScrolling from "./ElevationScrollAppBar";
import { makeStyles } from "@mui/styles";
import theme from "./theme";

// Media query api
const useStyles = makeStyles(() => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    //fix margin issue with the hidden text
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      height: "4.5em",
      marginBottom: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "4em",
      marginBottom: "1em",
    },
  },
  appbar: {
    [theme.breakpoints.down("md")]: {
      "&.MuiAppBar-root": {
        zIndex: theme.zIndex.modal + 1,
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

const Header: React.FC<ToolBarComProps> = (
  { routeValueHandler, headerModalToolTipSelectedTabHandler },
  props
) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScrolling {...props}>
        <AppBar className={classes.appbar} position='fixed' color='primary'>
          <ToolBarCom
            headerModalToolTipSelectedTabHandler={
              headerModalToolTipSelectedTabHandler
            }
            routeValueHandler={routeValueHandler}
          />
        </AppBar>
      </ElevationScrolling>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
