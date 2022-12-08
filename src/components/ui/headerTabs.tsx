import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import theme from "./theme";

// Media query api

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import MenuPositionedToolTip from "./menuToolbar";
import EstimateButton from "./aux-components/estimateButton";

const useStyles: any = makeStyles(() => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    //fix margin issue with the hidden text
    height: "6.5em",
    marginBottom: "4em",
  },
  tabsContainer: {
    marginLeft: "auto",
    color: "white",
  },
  tab: {
    "&.MuiTab-root": {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
    },
  },
}));

// props
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
const HeaderTabs: React.FC<ToolBarComProps> = ({
  routeValueHandler,
  headerModalToolTipSelectedTabHandler,
}) => {
  const classes = useStyles();
  // responsive rendering
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  // handles classes for non react elements
  // responsive rendering

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (routeValueHandler.routeValue != 0) {
          routeValueHandler.routeValueHandler(0);
        }
        break;
      case "/services":
        if (routeValueHandler.routeValue != 1) {
          routeValueHandler.routeValueHandler(1);
        }
        break;
      case "/revolution":
        if (routeValueHandler.routeValue != 2) {
          routeValueHandler.routeValueHandler(2);
        }
        break;
      case "/about":
        if (routeValueHandler.routeValue != 3) {
          routeValueHandler.routeValueHandler(3);
        }
        break;
      case "/contact":
        if (routeValueHandler.routeValue != 4) {
          routeValueHandler.routeValueHandler(4);
        }
        break;
      case "/estimate":
        if (routeValueHandler.routeValue != 5) {
          routeValueHandler.routeValueHandler(5);
        }
        break;
      default:
        break;
    }
  }, [routeValueHandler.routeValue, routeValueHandler.routeValueHandler]);

  const onChangeHandler = (e: React.SyntheticEvent, value: number) => {
    routeValueHandler.routeValueHandler(value);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tabs
        value={routeValueHandler.routeValue}
        onChange={onChangeHandler}
        textColor='secondary'
        indicatorColor='primary'
        className={classes.tabsContainer}
        variant='scrollable'
        scrollButtons='auto'>
        <Tab
          component={Link}
          to='/'
          className={classes.tab}
          value={0}
          label='Home'
        />
        <Tab
          id='services-positioned-tab'
          component={Link}
          to='/services'
          className={classes.tab}
          value={1}
          label='Services'
          // handles menu tooltip
          aria-controls={open ? "menu-positioned-tooltip" : undefined}
          aria-expanded={open ? "true" : undefined}
          onMouseOver={(e) => {
            handleClick(e);
          }}
        />
        <Tab
          component={Link}
          to='/revolution'
          className={classes.tab}
          value={2}
          label=' The Revolution'
          // handles menu tooltip
          aria-controls={open ? "menu-positioned-tooltip" : undefined}
          aria-expanded={open ? "true" : undefined}
        />
        <Tab
          component={Link}
          to='/about'
          className={classes.tab}
          value={3}
          label='About Us'
          // handles menu tooltip
          aria-controls={open ? "menu-positioned-tooltip" : undefined}
          aria-expanded={open ? "true" : undefined}
        />
        <Tab
          component={Link}
          to='/contact'
          className={classes.tab}
          value={4}
          label=' Contact Us'
          // handles menu tooltip
          aria-controls={open ? "menu-positioned-tooltip" : undefined}
          aria-expanded={open ? "true" : undefined}
        />
      </Tabs>
      <EstimateButton routeValueHandler={routeValueHandler.routeValueHandler} />
      <MenuPositionedToolTip
        id='menu-positioned-tooltip'
        routeValueHandler={routeValueHandler}
        headerModalToolTipSelectedTabHandler={
          headerModalToolTipSelectedTabHandler
        }
        menu_id='services-menu'
        open={open}
        anchorElement={anchorEl}
        closeMenu={handleClose}
      />
    </React.Fragment>
  );
};

export default HeaderTabs;
