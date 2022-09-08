import React, { useState } from "react";

import Box from "@mui/material/Box";
import { Clear } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import useStyles from "./styles";

type MenuProps = {
  handleOpenMenu: () => void;
  openMenu: boolean;
  handleCloseMenu: () => void;
};

const Menu = ({ handleOpenMenu, openMenu, handleCloseMenu }: MenuProps) => {
  const styles = useStyles();

  return (
    <SwipeableDrawer
      open={openMenu}
      onOpen={handleOpenMenu}
      onClose={handleCloseMenu}
      anchor="right"
    >
        <Box sx={styles.closeButton}>
          <IconButton size="large" onClick={handleCloseMenu}>
            <Clear />
          </IconButton>
        </Box>
        <List sx={{ width: 500 }} component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
    </SwipeableDrawer>
  );
};

export default Menu;
