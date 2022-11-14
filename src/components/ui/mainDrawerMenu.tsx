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
  selectedLink: {
    "&.MuiButtonBase-root-MuiListItemButton-root": {
      backgroundColor: "red",
    },
  },
  drawerItem: {
    "&.MuiListItemText-root": {
      ...theme.typography.tab,
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
}));

const MainDrawerMenu: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const classes = useStyles();
  // Responsive swipe on mobile
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleSelected = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    selectedIndex: number
  ) => {
    setSelectedIndex(selectedIndex);
  };

  return (
    <React.Fragment>
      <SwipeableDrawer
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
        <List disablePadding>
          <ListItemButton
            component={Link}
            className={classes.selectedLink}
            to='/'
            onClick={(event) => {
              setIsDrawerOpen(false);
              handleSelected(event, 0);
            }}
            selected={selectedIndex === 0}>
            <ListItemText disableTypography className={classes.drawerItem}>
              Home
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            to='/services'
            onClick={(event) => {
              setIsDrawerOpen(false);
              handleSelected(event, 1);
            }}
            selected={selectedIndex === 1}>
            <ListItemText disableTypography className={classes.drawerItem}>
              Services
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            to='/revolution'
            onClick={(event) => {
              setIsDrawerOpen(false);
              handleSelected(event, 2);
            }}
            selected={selectedIndex === 2}>
            <ListItemText disableTypography className={classes.drawerItem}>
              Revolution
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            to='/about'
            onClick={(event) => {
              setIsDrawerOpen(false);
              handleSelected(event, 3);
            }}
            selected={selectedIndex === 3}>
            <ListItemText disableTypography className={classes.drawerItem}>
              About
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            to='/contact'
            onClick={(event) => {
              setIsDrawerOpen(false);
              handleSelected(event, 4);
            }}
            selected={selectedIndex === 4}>
            <ListItemText disableTypography className={classes.drawerItem}>
              Contact Us
            </ListItemText>
          </ListItemButton>
          <Divider />
          <ListItem
            button
            component={Link}
            to='/estimate'
            onClick={() => {
              setIsDrawerOpen(false);
            }}>
            <ListItemText
              disableTypography
              className={clsx(classes.drawerItem, classes.estimate)}>
              Estimate
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
