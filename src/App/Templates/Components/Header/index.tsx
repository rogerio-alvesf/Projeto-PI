import React, { useState } from "react";

import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";

import BuscaImovel from "./BuscaImovel";
import Logo from "../../../../Images/logo-espaco-aberto.png";
import Menu from "./Menu";
import useStyles from "./styles";

const Header = () => {
  const styles = useStyles();

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  return (
    <AppBar sx={styles.header} position="static">
      <Toolbar>
        <Grid container>
          <Grid
            item
            xs={2}
            md={2}
            paddingBottom={1}
            paddingTop={1}
            paddingLeft={6}
          >
            <Box
              component="img"
              sx={styles.imgLogo}
              src={Logo}
              alt="Logo Espaço Aberto"
            />
          </Grid>
          <Grid item xs={12} md={3.5}>
            <BuscaImovel />
          </Grid>
          <Grid item xs={12} md={6.5} sx={styles.opcoes} flex={1} gap={7}>
            <Tooltip title="Início">
              <Button sx={styles.botao} size="small">Início</Button>
            </Tooltip>
            <Tooltip title="Sobre">
              <Button sx={styles.botao}>Sobre</Button>
            </Tooltip>
            <Tooltip title="Ajuda">
              <Button sx={styles.botao}>Ajuda</Button>
            </Tooltip>
            <Tooltip title="Icon">
              <IconButton
                size="large"
                sx={styles.iconeConta}
                onClick={handleOpenMenu}
              >
                <AccountCircleOutlined fontSize="inherit" />
              </IconButton>
            </Tooltip>
            <Menu
              handleOpenMenu={handleOpenMenu}
              handleCloseMenu={handleCloseMenu}
              openMenu={openMenu}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
