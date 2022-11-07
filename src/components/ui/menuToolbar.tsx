import React, { useEffect } from "react";
import { Menu, MenuItem } from "@mui/material";

interface ProsMenuPositioned {
  id: string;
  menu_id: string;
  anchorElement: HTMLElement | null;
  open: boolean;
  closeMenu: () => void;
}

const MenuPositionedToolTip: React.FC<ProsMenuPositioned> = ({
  anchorElement,
  open,
  id,
  menu_id,
  closeMenu,
}) => {
  return (
    <Menu
      id={menu_id}
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
      MenuListProps={{ onMouseLeave: closeMenu }}>
      <MenuItem onClick={closeMenu}>Test 1</MenuItem>
      <MenuItem onClick={closeMenu}>Test 2</MenuItem>
      <MenuItem onClick={closeMenu}>Test 3</MenuItem>
    </Menu>
  );
};

export default MenuPositionedToolTip;
