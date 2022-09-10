import React from "react";

import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import useStyles from "./styles";

const BuscaImovel = () => {
  const styles = useStyles();

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  return (
    <Autocomplete
      sx={styles.root}
      id="free-solo-demo"
      disablePortal
      options={top100Films.map((option) => option.label)}
      renderInput={(params) => (
        <TextField {...params} label="Buscar imóvel" size="small" />
      )}
    />
  );
};

export default BuscaImovel;
