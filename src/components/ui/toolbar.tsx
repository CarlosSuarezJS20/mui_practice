import React from "react";
import ToolBar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";

import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import theme from "./theme";

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
}));

// Styling the tab, need to create a
const StyledTab = styled(Tab)(() => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "25px",
}));

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

  return (
    <ToolBar disableGutters>
      {/* <Typography variant='h3'>Arc Development</Typography> */}
      <img src={logo} alt='company logo' className={classes.logo} />
      <Tabs
        value={value}
        onChange={onChangeHandler}
        textColor='secondary'
        indicatorColor='primary'
        className={classes.tabsContainer}
        variant='scrollable'
        scrollButtons='auto'>
        <StyledTab value={0} label='Home' />
        <StyledTab value={1} label='Services' />
        <StyledTab value={2} label=' The Revolution' />
        <StyledTab value={3} label='About Us' />
        <StyledTab value={4} label=' Contact Us' />
      </Tabs>
      <StyledButton variant='contained' color='secondary'>
        Free Trial
      </StyledButton>
    </ToolBar>
  );
};

export default ToolBarCom;
