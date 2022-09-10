import React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Clear } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Tooltip from "@mui/material/Tooltip";

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
      <Box sx={styles.root}>
        <Box sx={styles.closeButton}>
        <Tooltip title="Fechar">
          <IconButton size="large" onClick={handleCloseMenu}>
            <Clear sx={styles.imgBottonClose} />
          </IconButton>
          </Tooltip>
        </Box>
        <Box sx={styles.iconeContaContainer}>
          <Avatar alt="Icone Usuário" src="" sx={styles.iconeConta}>E</Avatar>
        </Box>
        <List sx={styles.menu} component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary="Lista de favoritos" sx={styles.opcoesMenu} />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Favoritos" sx={styles.opcoesMenu} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Cadastrar Imóvel" sx={styles.opcoesMenu} />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Como anunciar" sx={styles.opcoesMenu} />
          </ListItem>
        </List>
        </Box>
    </SwipeableDrawer>
  );
};

export default Menu;
