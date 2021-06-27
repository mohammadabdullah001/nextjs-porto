import React from "react";

// material
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";

// import
import NavList from "./navList";
import clsx from "clsx";

const useStyles = makeStyles({
  listWrapper: {
    width: 250,
  },
});

function SwipeableDrawerMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => {
    setState(open);
  };

  return (
    <div>
      <React.Fragment>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          open={state}
          onClose={() => toggleDrawer(false)}
          onOpen={() => {}}
        >
          <Box className={clsx(classes.listWrapper)}>
            <NavList toggledrawer={toggleDrawer} />
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
export default SwipeableDrawerMenu;