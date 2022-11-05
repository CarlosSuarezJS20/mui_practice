import React, { useEffect } from "react";
import ToolBar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";

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
  // handles classes for non react elements
  const classes = useStyles();

  const onChangeHandler = (e: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  useEffect(() => {
    let refreshValue: any;
    if (window.location.pathname === "/" && value != 0) {
      refreshValue = 0;
    } else if (window.location.pathname === "/services" && value != 1) {
      refreshValue = 1;
    } else if (window.location.pathname === "/revolution" && value != 2) {
      refreshValue = 2;
    } else if (window.location.pathname === "/about" && value != 3) {
      refreshValue = 3;
    } else if (window.location.pathname === "/contact" && value != 4) {
      refreshValue = 4;
    }
    setValue(refreshValue);
  }, []);

  return (
    <ToolBar disableGutters>
      {/* <Typography variant='h3'>Arc Development</Typography> */}
      <Button
        component={Link}
        to='/'
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
          component={Link}
          to='/services'
          className={classes.tab}
          value={1}
          label='Services'
        />
        <Tab
          component={Link}
          to='revolution'
          className={classes.tab}
          value={2}
          label=' The Revolution'
        />
        <Tab
          component={Link}
          to='about'
          className={classes.tab}
          value={3}
          label='About Us'
        />
        <Tab
          component={Link}
          to='contact'
          className={classes.tab}
          value={4}
          label=' Contact Us'
        />
      </Tabs>
      <StyledButton variant='contained' color='secondary'>
        Free Trial
      </StyledButton>
    </ToolBar>
  );
};

export default ToolBarCom;
