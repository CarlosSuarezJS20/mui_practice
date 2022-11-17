import React, { useEffect } from "react";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import theme from "./theme";

// styling

const useStyles = makeStyles(() => ({
  menu: {
    "&.MuiMenu-paper": {
      backgroundColor: theme.palette.common.blue,
      color: "white",
      borderRadius: "0px",
    },
  },
  menuTab: {
    "&.MuiMenuItem-root": {
      opacity: 0.7,
      ...theme.typography.tab,
      "&:hover": {
        opacity: 1,
      },
    },
    "&.Mui-selected": {
      ...theme.typography.tab,
      opacity: 1,
    },
  },
}));

interface ProsMenuPositioned {
  id: string;
  menu_id: string;
  anchorElement: HTMLElement | null;
  open: boolean;
  closeMenu: () => void;
  routeValueHandler: {
    routeValueHandler: (n: number) => void;
    routeValue: number;
  };
  headerModalToolTipSelectedTabHandler: {
    headerModalToolTipSelectedTabHandler: (n: number) => void;
    toolTipSelectedTabeValue: number;
  };
}

const MenuPositionedToolTip: React.FC<ProsMenuPositioned> = ({
  anchorElement,
  open,
  id,
  menu_id,
  routeValueHandler,
  headerModalToolTipSelectedTabHandler,
  closeMenu,
}) => {
  const classes = useStyles();
  const menuOptions1 = [
    { name: "Services", link: "/services" },
    { name: "Custome Software Dev", link: "/customsoftware" },
    { name: "Mobile Apps Dev", link: "/mobileapps" },
    { name: "Website Dev", link: "/websites" },
  ];

  useEffect(() => {
    switch (window.location.pathname) {
      case "/services":
        if (routeValueHandler.routeValue != 1) {
          headerModalToolTipSelectedTabHandler.headerModalToolTipSelectedTabHandler(
            0
          );
        }
        break;
      case "/customsoftware":
        if (routeValueHandler.routeValue != 1) {
          headerModalToolTipSelectedTabHandler.headerModalToolTipSelectedTabHandler(
            1
          );
        }
        break;
      case "/customsoftware":
        if (routeValueHandler.routeValue != 1) {
          headerModalToolTipSelectedTabHandler.headerModalToolTipSelectedTabHandler(
            1
          );
        }
        break;
      case "/mobileapps":
        if (routeValueHandler.routeValue != 1) {
          headerModalToolTipSelectedTabHandler.headerModalToolTipSelectedTabHandler(
            2
          );
        }
        break;
      case "/websites":
        if (routeValueHandler.routeValue != 1) {
          headerModalToolTipSelectedTabHandler.headerModalToolTipSelectedTabHandler(
            3
          );
        }
        break;
      default:
        break;
    }
  });

  const elementClickedHandler = (
    e: React.MouseEvent<HTMLElement>,
    i: number
  ) => {
    headerModalToolTipSelectedTabHandler.headerModalToolTipSelectedTabHandler(
      i
    );
    closeMenu();
    routeValueHandler.routeValueHandler(i);
  };

  return (
    <Menu
      id={menu_id}
      classes={{ paper: classes.menu }}
      anchorEl={anchorElement}
      open={open}
      aria-labelledby={id}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      MenuListProps={{ onMouseLeave: closeMenu }}
      elevation={0}>
      {menuOptions1.map((item, index) => {
        return (
          <MenuItem
            key={index}
            component={Link}
            to={item.link}
            className={classes.menuTab}
            selected={
              index ===
              headerModalToolTipSelectedTabHandler.toolTipSelectedTabeValue
            }
            onClick={(e) => {
              elementClickedHandler(e, index);
            }}>
            {item.name}
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default MenuPositionedToolTip;
