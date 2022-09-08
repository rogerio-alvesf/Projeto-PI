import React, { useEffect, useState } from "react";

import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

import BuscaImovel from "./BuscaImovel";
import Logo from "../../../../Images/logo-espaco-aberto.png";
import useStyles from "./styles";
import Menu from "./Menu";

const Header = () => {
  const styles = useStyles();

  return (
    <AppBar sx={styles.header} position="static">
      <Toolbar>
        <Grid container>
          <Grid
            item
            md={2}
            xs={0}
            paddingBottom={1}
            paddingTop={1}
            paddingLeft={6}
            paddingRight={6}
            sx={styles.imgLogoContainer}
          >
            <Box
              component="img"
              sx={styles.imgLogo}
              src={Logo}
              alt="Logo Espaço Aberto"
            />
          </Grid>
          <Grid item md={3.5} xs={12} sx={styles.campoBusca}>
            <BuscaImovel />
          </Grid>
          <Grid item xs={0} md={6.5} sx={styles.opcoes} flex={1} gap={8}>
            <Button sx={styles.botao}>Início</Button>
            <Button sx={styles.botao}>Sobre</Button>
            <Button sx={styles.botao}>Ajuda</Button>
            <IconButton size="large" sx={styles.iconeConta}>
              <AccountCircleOutlined fontSize="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
