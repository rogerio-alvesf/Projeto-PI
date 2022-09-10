import React from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import useStyles from "./styles";

const BuscaImovel = () => {
  const styles = useStyles();

  const listaChacaras = [
    { label: "Chácara do Senhor Zé", preco: 2.25 },
    { label: "Chácara nossa senhora da Aparecida", preco: 2.15 },
  ];

  return (
    <Autocomplete
      sx={styles.root}
      id="free-solo-demo"
      disablePortal
      options={listaChacaras.map((option) => option.label)}
      renderInput={(params) => (
        <TextField {...params} label="Buscar imóvel" size="small" />
      )}
    />
  );
};

export default BuscaImovel;
