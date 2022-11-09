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
  tabValue: number;
  closeMenu: () => void;
  setValueMenuItem: (index: number) => void;
}

const MenuPositionedToolTip: React.FC<ProsMenuPositioned> = ({
  anchorElement,
  open,
  id,
  menu_id,
  tabValue,
  closeMenu,
  setValueMenuItem,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
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
        if (tabValue != 1) {
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (tabValue != 1) {
          setSelectedIndex(1);
        }
        break;
      case "/customsoftware":
        if (tabValue != 1) {
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (tabValue != 1) {
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (tabValue != 1) {
          setSelectedIndex(3);
        }
        break;
      default:
        break;
    }
  }, [selectedIndex]);

  const elementClickedHandler = (
    e: React.MouseEvent<HTMLElement>,
    i: number
  ) => {
    setSelectedIndex(i);
    closeMenu();
    setValueMenuItem(i);
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
        console.log(index === selectedIndex);
        return (
          <MenuItem
            key={index}
            component={Link}
            to={item.link}
            className={classes.menuTab}
            selected={index === selectedIndex}
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
