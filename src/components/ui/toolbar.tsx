import React, { useEffect } from "react";
import ToolBar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import MenuPositionedToolTip from "./menuToolbar";

import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import theme from "./theme";

import { Link } from "react-router-dom";

// import Typography from "@mui/material/Typography";

// creative components
import logo from "../../assets/logo.svg";

// Styling
const useStyles = makeStyles(() => ({
  logo: {
    height: "5em",
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

const StyledButton = styled(Button)(() => ({
  ...theme.typography.estimateBtn,
  borderRadius: "50px",
  marginLeft: "25px",
  marginRight: "25px",
  height: "50px",
}));

const ToolBarCom: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  // handles classes for non react elements
  const classes = useStyles();

  const onChangeHandler = (e: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

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
  }, [value]);

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
    setValue(menuItemIndex);
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

      <Tabs
        value={value}
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
          onMouseOver={(e) => {
            handleClick(e);
          }}
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
          onMouseOver={(e) => {
            handleClick(e);
          }}
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
          onMouseOver={(e) => {
            handleClick(e);
          }}
        />
      </Tabs>
      <StyledButton variant='contained' color='secondary'>
        Free Trial
      </StyledButton>
      <MenuPositionedToolTip
        id='menu-positioned-tooltip'
        tabValue={value}
        menu_id='services-menu'
        open={open}
        anchorElement={anchorEl}
        closeMenu={handleClose}
        setValueMenuItem={setValueMenuItemsHandler}
      />
    </ToolBar>
  );
};

export default ToolBarCom;
