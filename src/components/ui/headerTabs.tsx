import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import theme from "./theme";

// Media query api

import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import MenuPositionedToolTip from "./menuToolbar";

const useStyles = makeStyles(() => ({
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

const StyledButton = styled(Button)(() => ({
  ...theme.typography.estimateBtn,
  borderRadius: "50px",
  marginLeft: "25px",
  marginRight: "25px",
  height: "50px",
}));

// props
interface HeaderTabsProps {
  setValueProp: (pos: number) => void;
  position: number;
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ setValueProp, position }) => {
  const classes = useStyles();
  // responsive rendering
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  // handles classes for non react elements
  // responsive rendering

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (position != 0) {
          setValueProp(0);
        }
        break;
      case "/services":
        if (position != 1) {
          setValueProp(1);
        }
        break;
      case "/revolution":
        if (position != 2) {
          setValueProp(2);
        }
        break;
      case "/about":
        if (position != 3) {
          setValueProp(3);
        }
        break;
      case "/contact":
        if (position != 4) {
          setValueProp(4);
        }
        break;
      case "/estimate":
        if (position != 5) {
          setValueProp(5);
        }
        break;
      case "/customsoftware":
        if (position != 1) {
          setValueProp(1);
        }
        break;
      case "/mobileapps":
        if (position != 1) {
          setValueProp(1);
        }
        break;
      case "/websites":
        if (position != 1) {
          setValueProp(1);
        }
        break;
      default:
        break;
    }
  }, [position]);

  const onChangeHandler = (e: React.SyntheticEvent, value: number) => {
    setValueProp(value);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  // Helper function to set value for menu items
  const setValueMenuItemsHandler = (menuItemIndex: number) => {
    setValueProp(menuItemIndex);
  };

  return (
    <React.Fragment>
      <Tabs
        value={position}
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
      <StyledButton variant='contained' color='secondary'>
        Free Trial
      </StyledButton>
      <MenuPositionedToolTip
        id='menu-positioned-tooltip'
        tabValue={position}
        menu_id='services-menu'
        open={open}
        anchorElement={anchorEl}
        closeMenu={handleClose}
        setValueMenuItem={setValueMenuItemsHandler}
      />
    </React.Fragment>
  );
};

export default HeaderTabs;
