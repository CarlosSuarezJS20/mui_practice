import React from "react";
import { SwipeableDrawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import theme from "./theme";

const MainDrawerMenu: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // Responsive swipe on mobile
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
        onOpen={() => {
          setIsDrawerOpen(true);
        }}>
        Example Drawer
      </SwipeableDrawer>
      <IconButton
        onClick={() => {
          setIsDrawerOpen(!isDrawerOpen);
        }}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default MainDrawerMenu;
