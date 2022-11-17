import React from "react";
import {
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItem,
  Divider,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";

import { Link } from "react-router-dom";

// styling
import { makeStyles } from "@mui/styles";
import theme from "./theme";

const useStyles = makeStyles(() => ({
  drawerMenuHolder: {
    "&.MuiDrawer-paper": {
      backgroundColor: theme.palette.common.blue,
    },
  },
  drawerItem: {
    "&.MuiListItemText-root": {
      ...theme.typography.tab,
      opacity: 0.7,
      "&:hover": {
        opacity: 1,
      },
    },
  },
  drawerItemSelected: {
    "&.MuiListItemText-root": {
      opacity: 1,
    },
  },
  estimate: {
    "&.MuiListItemText-root": {
      color: theme.palette.common.orange,
    },
  },
  menuIcon: {
    color: "white",
  },
  iconMenuBtn: {
    "&.MuiIconButton-root": {
      marginLeft: "auto",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  toolBarMargin: {
    marginTop: "60px",
  },
}));

interface MainDrawerProps {
  routeValueHandler: {
    routeValueHandler: (n: number) => void;
    routeValue: number;
  };
}

const MainDrawerMenu: React.FC<MainDrawerProps> = ({ routeValueHandler }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const classes = useStyles();
  // Responsive swipe on mobile
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleSelected = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    selectedIndex: number
  ) => {
    routeValueHandler.routeValueHandler(selectedIndex);
  };

  return (
    <React.Fragment>
      <SwipeableDrawer
        hideBackdrop
        classes={{ paper: classes.drawerMenuHolder }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
        onOpen={() => {
          setIsDrawerOpen(true);
        }}>
        <div className={classes.toolBarMargin} />
        <List disablePadding>
          <ListItemButton
            component={Link}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "rgba(10, 0, 50, 0.1)",
                opacity: 1,
              },
            }}
            to='/'
            onClick={(event) => {
              setIsDrawerOpen(false);
              handleSelected(event, 0);
            }}
            selected={routeValueHandler.routeValue === 0}>
            <ListItemText
              disableTypography
              className={
                routeValueHandler.routeValue === 0
                  ? clsx(classes.drawerItem, classes.drawerItemSelected)
                  : classes.drawerItem
              }>
              Home
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "rgba(10, 0, 50, 0.1)",
              },
            }}
            to='/services'
            onClick={(event) => {
              setIsDrawerOpen(false);
              handleSelected(event, 1);
            }}
            selected={routeValueHandler.routeValue === 1}>
            <ListItemText
              disableTypography
              className={
                routeValueHandler.routeValue === 1
                  ? clsx(classes.drawerItem, classes.drawerItemSelected)
                  : classes.drawerItem
              }>
              Services
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "rgba(10, 0, 50, 0.1)",
              },
            }}
            to='/revolution'
            onClick={(event) => {
              setIsDrawerOpen(false);
              handleSelected(event, 2);
            }}
            selected={routeValueHandler.routeValue === 2}>
            <ListItemText
              disableTypography
              className={
                routeValueHandler.routeValue === 2
                  ? clsx(classes.drawerItem, classes.drawerItemSelected)
                  : classes.drawerItem
              }>
              Revolution
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "rgba(10, 0, 50, 0.1)",
              },
            }}
            to='/about'
            onClick={(event) => {
              setIsDrawerOpen(false);
              handleSelected(event, 3);
            }}
            selected={routeValueHandler.routeValue === 3}>
            <ListItemText
              disableTypography
              className={
                routeValueHandler.routeValue === 3
                  ? clsx(classes.drawerItem, classes.drawerItemSelected)
                  : classes.drawerItem
              }>
              About
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "rgba(10, 0, 50, 0.1)",
              },
            }}
            to='/contact'
            onClick={(event) => {
              setIsDrawerOpen(false);
              handleSelected(event, 4);
            }}
            selected={routeValueHandler.routeValue === 4}>
            <ListItemText
              disableTypography
              className={
                routeValueHandler.routeValue === 4
                  ? clsx(classes.drawerItem, classes.drawerItemSelected)
                  : classes.drawerItem
              }>
              Contact Us
            </ListItemText>
          </ListItemButton>
          <Divider />
          <ListItem
            button
            component={Link}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "rgba(10, 0, 50, 0.1)",
              },
            }}
            to='/estimate'
            onClick={(event) => {
              setIsDrawerOpen(false);
              handleSelected(event, 5);
            }}
            selected={routeValueHandler.routeValue === 5}>
            <ListItemText
              disableTypography
              className={
                routeValueHandler.routeValue === 5
                  ? clsx(
                      classes.drawerItem,
                      classes.estimate,
                      classes.drawerItemSelected
                    )
                  : clsx(classes.drawerItem, classes.estimate)
              }>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.iconMenuBtn}
        onClick={() => {
          setIsDrawerOpen(!isDrawerOpen);
        }}>
        <MenuIcon fontSize='large' className={classes.menuIcon} />
      </IconButton>
    </React.Fragment>
  );
};

export default MainDrawerMenu;
